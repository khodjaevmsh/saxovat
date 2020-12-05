from django.db import models

from core.models import BaseModel
from main.querysets.donation import DonationQuerySet
from main.querysets.recipient import RecipientQuerySet


class Category(BaseModel):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'main_categories'


class Donation(BaseModel):
    CATEGORIES = (
        ('Money', 'Pul'),
        ('Product', 'Buyum'),
        ('Food', 'Ovqat'),
    )

    phone = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    category = models.CharField(max_length=255, choices=CATEGORIES)
    user = models.ForeignKey('users.User', models.CASCADE)
    needy = models.ForeignKey('main.Recipient', models.PROTECT, null=True, blank=True)
    delivery = models.BooleanField(default=True)
    objects = DonationQuerySet.as_manager()

    class Meta:
        db_table = 'main_donations'


class Recipient(BaseModel):
    category = models.ForeignKey('main.Category', models.CASCADE)
    phone = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    objects = RecipientQuerySet.as_manager()

    class Meta:
        db_table = 'main_recipients'
