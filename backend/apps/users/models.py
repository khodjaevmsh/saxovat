import binascii
import os
import random
from datetime import timedelta

from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils import timezone
from django.utils.translation import ugettext as _

from core.models import BaseModel
from users.querysets.confirmation import ConfirmationQuerySet
from users.querysets.users import UsersManager


class User(AbstractUser):
    phone = models.CharField(max_length=20, null=True, blank=True, verbose_name=_('Номер телефона'))

    objects = UsersManager()

    class Meta(AbstractUser.Meta):
        db_table = 'user_users'
        app_label = 'users'


class ConfirmationCode(BaseModel):
    AUTHENTICATION = 'authentication'
    CHANGE_PHONE = 'change_phone'

    TYPES = (
        (AUTHENTICATION, _('Авторизация')),
        (CHANGE_PHONE, _('Смена телефона'))
    )

    type = models.CharField(max_length=255, choices=TYPES, default=AUTHENTICATION)
    phone = models.CharField(max_length=20, verbose_name=_('Номер телефона'))
    user = models.ForeignKey(User, models.CASCADE, verbose_name=_('Пользователь'))
    code = models.CharField(max_length=20, verbose_name=_('Код подтверждения'))
    is_used = models.BooleanField(default=False, verbose_name=_('Был использован?'))
    expires_at = models.DateTimeField(verbose_name=_('Срок действия'))

    objects = ConfirmationQuerySet.as_manager()

    def save(self, *args, **kwargs):
        self.code = "0000"
        self.expires_at = timezone.now() + timedelta(hours=2)
        return super().save(*args, **kwargs)

    def send(self):
        pass

    def __str__(self):
        return str(self.code) or 'n/a'

    class Meta:
        get_latest_by = 'id'
        db_table = 'users_confirmation_codes'
        verbose_name = _('Код подтверждения')
        verbose_name_plural = _('Коды подтверждения')


class Token(BaseModel):
    key = models.CharField(max_length=40, verbose_name=_("Ключ"), unique=True)
    user = models.ForeignKey(User, models.CASCADE, related_name='tokens', verbose_name=_("Пользователь"))

    def save(self, *args, **kwargs):
        if not self.key:
            self.key = binascii.hexlify(os.urandom(20)).decode()
        return super(Token, self).save(*args, **kwargs)

    def __str__(self):
        return self.key

    class Meta:
        db_table = 'users_tokens'
        verbose_name = _("Ключ доступа")
        verbose_name_plural = _("Ключи доступа")
