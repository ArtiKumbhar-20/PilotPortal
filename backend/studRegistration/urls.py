from django.urls import path
from .views import *

urlpatterns = [
    path('register/', StudentRegistration.as_view(), name='student-registration'),
    path('panelist_register/', PanelistRegistration.as_view(), name='panelist-registration'),
    path('institute_register/', InstituteRegistration.as_view(), name='institute-registration'),
    path('incubators/', IncubatorsRegistration.as_view(), name='incubators-registration'),
    path('catalyst_register/', CatalystRegistration.as_view(), name='catalyst-registration'),
    path('team_register/', TeamRegistration.as_view(), name='team-registration'),
    path('IdeaSubGetData/', IdeaSubGetDataAPIView.as_view(), name='ideaSubGetData'),
    path('StudGetData/<int:loggedInUserId>/', StudentDetailView.as_view(),name='student-detail'),
    path('TeamInfo/', TeamDetailView.as_view(),name='team-detail'),
]