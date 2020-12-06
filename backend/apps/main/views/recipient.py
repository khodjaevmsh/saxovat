from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView
from main.models import Recipient
from main.serializers.recipient import RecipientSerializer


class RecipientListView(APIView):
    def get(self, request):
        queryset = Recipient.objects.all()
        serializer = RecipientSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = RecipientSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, 201)


class RecipientDetailView(APIView):
    def get(self, request, pk):
        instance = get_object_or_404(Recipient, id=pk)
        serializer = RecipientSerializer(instance)
        return Response(serializer.data)

    def delete(self, request, pk):
        instance = get_object_or_404(Recipient, id=pk)
        instance.delete()
        return Response({}, 204)

    def put(self, request, pk):
        instance = get_object_or_404(Recipient, id=pk)
        serializer = RecipientSerializer(instance, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(updated_by=request.user)
        return Response(serializer.data)
