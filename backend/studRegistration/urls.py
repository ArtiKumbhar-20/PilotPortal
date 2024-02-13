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
    path('StudGetData/<int:loggedInStudId>/', StudentDetailView.as_view(),name='student-detail'),
    path('TeamInfo/<int:loggedInStudId>/', TeamDetailView.as_view(),name='team-detail'),
    path('login/<int:student_id>/', TeamDetailView.as_view(), name='login_view'),
    path('PanelGetData/<int:loggedInPanelId>/',PanelistDetailView.as_view(),name='panelist-detail'),
    path('getInstitutesList/', InstituteListView.as_view(), name='institute-list'),
    path('student-verify-otp/', OTPVerification.as_view(), name='student-verify_otp'),
]