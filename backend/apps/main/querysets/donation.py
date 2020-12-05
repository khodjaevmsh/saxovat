from core.querysets.base_queryset import BaseQuerySet


class DonationQuerySet(BaseQuerySet):
    def list(self, user=None):
        query = self.filter(user=user) if user else self
        return query
