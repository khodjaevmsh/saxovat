from django.urls import path
from main.views.recipient import RecipientListView, RecipientDetailView

urlpatterns = [
    path('recipient', RecipientListView.as_view(), name='recipient-list'),
    path('recipient/<int:pk>', RecipientDetailView.as_view(), name='recipient-detail'),
]
