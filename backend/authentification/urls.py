from django.urls import path
from . import views
from .views import HomeView

  
urlpatterns = [
    path('dashboard/', views.HomeView.as_view(), name ='dashboard'),
    path('home/changepassword/', views.ChangePasswordView.as_view(), name='changepassword'),
    path('logout/', views.LogoutView.as_view(), name ='logout'),
    path('forget-password/', views.ForgetPassword.as_view(), name='forget_password'),
    path('change-password/<str:otp>/<str:email>/', views.ChangePasswordWithOTP.as_view(), name='change_password'),
    path('verify-otp/', views.VerifyOTP.as_view(), name='verify_otp'),
]