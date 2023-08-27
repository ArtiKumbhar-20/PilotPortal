from django.urls import path
from .views import IdeaSubView
from .views import IdeaDetailView

urlpatterns = [
    path('ideasub/', IdeaSubView.as_view(), name='idea-submission'),
    path('ideaDetailFetch/', IdeaDetailView.as_view(), name='idea-detail-fetch'),
]