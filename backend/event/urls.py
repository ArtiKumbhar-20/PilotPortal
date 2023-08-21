from django.urls import path
from .views import EventCreateView

urlpatterns = [
    path('event/', EventCreateView.as_view(), name='events'),
    
]