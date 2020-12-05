from django.urls import path

from users.views.signin import SignInView, ConfirmationView, ChangeNameView
from users.views.change_phone import ChangePhoneView, ConfirmChangePhoneView
from users.views.signout import SignOutView

urlpatterns = [
    path('signin', SignInView.as_view(), name='signin'),
    path('confirm', ConfirmationView.as_view(), name='confirm'),
    path('change_name', ChangeNameView.as_view(), name='change-name'),
    path('change_phone', ChangePhoneView.as_view(), name='change-phone'),
    path('change_phone/confirm', ConfirmChangePhoneView.as_view(), name='confirm-change-form'),
    path('signout', SignOutView.as_view(), name='signout')
]
