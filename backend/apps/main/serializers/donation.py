from rest_framework import serializers

from main.models import Donation


class DonationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Donation
        fields = ('id', 'phone', 'description', 'address', 'category', 'user', 'needy', 'delivery',)
