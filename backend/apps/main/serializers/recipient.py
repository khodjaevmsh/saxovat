from rest_framework import serializers

from main.models import Recipient


class RecipientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipient
        fields = ('id', 'category', 'phone', 'address',)
