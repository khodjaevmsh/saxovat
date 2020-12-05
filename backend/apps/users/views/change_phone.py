from users.models import ConfirmationCode, User
from rest_framework.response import Response
from rest_framework.views import APIView
from users.serializers.change_phone import ChangePhoneSerializer, ConfirmChangePhoneSerializer
from django.conf import settings
from core.utils.security import AntiPerDayThrottle, AntiPerMinuteThrottle


class ChangePhoneView(APIView):
    throttle_key = 'change_phone'

    def get_throttles(self):
        return [AntiPerDayThrottle(), AntiPerMinuteThrottle()] if settings.SEND_CONFIRMATION_SMS else []

    def post(self, request):
        data = ChangePhoneSerializer.check(request.data)
        confirmation = ConfirmationCode.objects.create(
            type=ConfirmationCode.CHANGE_PHONE,
            phone=data.get('phone'),
            user=self.request.user
        )
        confirmation.send()
        return Response(data)


class ConfirmChangePhoneView(APIView):
    def post(self, request):
        data = ConfirmChangePhoneSerializer.check(request.data)
        confirm = data.pop('confirm')
        user = User.objects.get(pk=confirm.user.id)
        old_phone = user.phone

        user.phone = data['phone']
        user.username = data['phone'] if old_phone == user.username else user.username
        user.save()
        return Response(data)
