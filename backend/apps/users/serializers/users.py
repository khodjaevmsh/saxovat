from rest_framework import serializers
from users.models import User


class UserSerializer(serializers.ModelSerializer):
    first_name = serializers.CharField(required=True)

    class Meta:
        model = User
        fields = ('id', 'first_name', 'last_name', )
