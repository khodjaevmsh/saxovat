from django.contrib import admin

from main.models import Donation, Recipient


@admin.register(Donation)
class DonationAdmin(admin.ModelAdmin):
    list_display = ('phone', 'description', 'address', 'category', 'user', 'needy', 'delivery')
    fields = ('phone', 'description', 'address', 'category', 'user', 'needy', 'delivery')


@admin.register(Recipient)
class NeedyAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'phone',)
    fields = ('name', 'phone', 'comment', 'category',)
