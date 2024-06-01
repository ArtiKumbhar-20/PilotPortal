from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt import views as jwt_views

# For redirecting to admin by default
from django.urls import path
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index),
    path('', include('authentification.urls')),
    path('', include('studRegistration.urls')),
    path('', include('idea.urls')),
    path('', include ('event.urls')),
    path('', include ('quiz.urls')),
    path('', include ('partner.urls')),
    path('token/', jwt_views.TokenObtainPairView.as_view(), name ='token_obtain_pair'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name ='token_refresh'),
    path('api/', include('quiz.urls')),
    path('admin/', admin.site.urls),
    path('api/', include('contact.urls')),
]
