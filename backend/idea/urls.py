from django.urls import path
from .views import *

urlpatterns = [
    path('ideasub/', IdeaDetailView.as_view(), name='idea-submission'),
    path('ideaDetailFetch/', IdeaDetailView.as_view(), name='idea-detail-fetch'),
    path('IdeaStatView/', IdeaStatView.as_view(), name='idea-status'),
]