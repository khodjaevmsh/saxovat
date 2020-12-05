from rest_framework import serializers

from main.models import Recipient


class RecipientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipient
        fields = ('id', 'name', 'phone', 'comment', 'category',)
