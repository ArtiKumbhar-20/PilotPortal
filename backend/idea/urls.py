from django.urls import path
from .views import *

urlpatterns = [
    path('ideasub/', IdeaSubView.as_view(), name='idea-submission'),
    path('ideaDetailFetch/', IdeaDetailView.as_view(), name='idea-detail-fetch'),
    path('IdeaStatView/', IdeaStatView.as_view(), name='idea-status'),

]