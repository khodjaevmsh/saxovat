from rest_framework.generics import GenericAPIView, get_object_or_404
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from users.models import ConfirmationCode, Token, User
from users.serializers.signin import SignInSerializer, ConfirmationSerializer
from users.serializers.users import UserSerializer
from core.utils.helpers import integers_only
from core.utils.security import AntiPerMinuteThrottle, AntiPerDayThrottle
from django.conf import settings


class SignInView(GenericAPIView):
    """
    ### Creates new user by phone if not exists
    ### Sends SMS with confirmation code
    """
    permission_classes = (AllowAny,)
    serializer_class = SignInSerializer
    throttle_key = 'sign_in'

    def get_throttles(self):
        return [AntiPerDayThrottle(), AntiPerMinuteThrottle()] if settings.SEND_CONFIRMATION_SMS else []

    def post(self, request):
        data = SignInSerializer.check(request.data)
        user, code = User.objects.sign_in(data.get('phone'))
        return Response({}, 201)


class ConfirmationView(GenericAPIView):
    """
    ### Check confirmation code sent by sms
    ### Return authentication token
    """
    permission_classes = (AllowAny,)
    serializer_class = ConfirmationSerializer

    def post(self, request):
        data = ConfirmationSerializer.check(request.data)
        user = get_object_or_404(User, phone=integers_only(data.get('phone')))
        token = Token.objects.create(user=user)
        serializer = UserSerializer(user)
        ConfirmationCode.objects.filter(code=data.get('code'), user=user).update(is_used=True)
        return Response({'user': serializer.data, 'token': token.key})


class ChangeNameView(APIView):
    def put(self, request):
        instance = get_object_or_404(User, id=request.user.id)
        serializer = UserSerializer(instance, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(updated_by=request.user)
        return Response(serializer.data)
