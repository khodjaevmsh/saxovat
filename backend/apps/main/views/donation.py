from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView
from main.models import Donation
from main.serializers.donation import DonationSerializer


class DonationListView(APIView):
    def get(self, request):
        queryset = Donation.objects.list(user=request.user)
        serializer = DonationSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = DonationSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(created_by=request.user, user=request.user)
        return Response(serializer.data, 201)


class DonationDetailView(APIView):
    def get(self, request, pk):
        instance = get_object_or_404(Donation, id=pk)
        serializer = DonationSerializer(instance)
        return Response(serializer.data)

    def delete(self, request, pk):
        instance = get_object_or_404(Donation, id=pk)
        instance.delete()
        return Response({}, 204)

    def put(self, request, pk):
        instance = get_object_or_404(Donation, id=pk)
        serializer = DonationSerializer(instance, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(updated_by=request.user)
        return Response(serializer.data)
