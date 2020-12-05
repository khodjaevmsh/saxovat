from rest_framework.response import Response
from rest_framework.views import APIView

from main.models import Category
from main.serializers.category import CategorySerializer


class CarListView(APIView):
    def get(self, request):
        queryset = Category.objects.all()
        serializer = CategorySerializer(queryset, many=True)
        return Response(serializer.data)
