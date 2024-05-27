from django.urls import path
from .views import partnerCreateView

urlpatterns = [
    path('partner/', partnerCreateView.as_view(), name='partner'),
    
]