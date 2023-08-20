from django.urls import path
from .views import IdeaSubView

urlpatterns = [
    path('ideasub/', IdeaSubView.as_view(), name='idea-submission'),
]