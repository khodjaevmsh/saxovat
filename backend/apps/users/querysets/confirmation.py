from django.utils import timezone

from core.querysets.base_queryset import BaseQuerySet
from core.utils.helpers import integers_only


class ConfirmationQuerySet(BaseQuerySet):
    def verify(self, phone, code):
        query = self.order_by('-id')
        query = query.filter(user__phone=integers_only(phone))
        query = query.filter(code=code)
        query = query.filter(expires_at__gte=timezone.now())
        query = query.filter(is_used=False)
        return query.first()
