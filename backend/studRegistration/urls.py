from django.urls import path
from .views import StudentRegistration
from .views import PanelistRegistration
from .views import InstituteRegistration
from .views import IncubatorsRegistration
from .views import CatalystRegistration

urlpatterns = [
    path('register/', StudentRegistration.as_view(), name='student-registration'),
    path('panelist_register/', PanelistRegistration.as_view(), name='panelist-registration'),
    path('institute_register/', InstituteRegistration.as_view(), name='institute-registration'),
    path('incubators/', IncubatorsRegistration.as_view(), name='incubators-registration'),
    path('catalyst_register/', CatalystRegistration.as_view(), name='catalyst-registration')
]