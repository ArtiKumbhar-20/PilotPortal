from django.urls import path
from .views import Event

urlpatterns = [
    path('event/', Event.as_view(), name='events'),
    
]