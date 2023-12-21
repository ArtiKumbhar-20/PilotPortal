from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import status
from django.contrib.auth.models import User
from .helpers import send_forget_password_mail
from django.utils import timezone
from .models import Profile
from .serializers import ProfileSerializer
import random
import string
from .helpers import send_forget_password_mail
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError


class HomeView(APIView):
    permission_classes = (IsAuthenticated, )

    def get(self, request):
        user = request.user
        profile = Profile.objects.get(user=user)

        user_details = {
            "user_id": user.id,
            "username": user.username,
            "email": user.email,
            "first_name": user.first_name,
            "last_name": user.last_name,
        }

        if user.groups.filter(name='Student').exists():
            content = {'message': 'Welcome to the Student Dashboard!', 'user_type': 'Student'}
        elif user.groups.filter(name='Panelist').exists():
            content = {'message': 'Welcome to the Panelist Dashboard!', 'user_type': 'Panelist'}
        # else:
        #     content = {'message': 'Welcome to the Superadmin Dashboard!', 'user_type': 'Superadmin'}

        # Include the student_id from the profile
        user_details['student_id'] = profile.student_id

        content.update(user_details)
        # Serialize the data
        serializer = ProfileSerializer(profile)
        content.update(serializer.data)

        return Response(content)

class LogoutView(APIView):
    permission_classes = (IsAuthenticated,)
    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()

            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)



class ForgetPassword(APIView):
    def post(self, request):
        try:
            email = request.data.get('email')  # Updated to use email instead of username
            
            if not User.objects.filter(email=email).exists():
                return Response({'error': 'No user found with this email.'}, status=status.HTTP_404_NOT_FOUND)
            
            user_obj = User.objects.get(email=email)
            otp = ''.join(random.choices(string.digits, k=6))  # Generate a 6-digit OTP
            
            profile_obj = Profile.objects.get(user=user_obj)
            profile_obj.forget_password_token = otp
            profile_obj.otp_expiry_time = timezone.now() + timezone.timedelta(minutes=15)
            profile_obj.save()
            
            send_forget_password_mail(email, otp, user_obj.username)  # Send OTP through email
            
            return Response({'message': 'An OTP is sent to your email.', 'resetToken': otp}, status=status.HTTP_200_OK)
                
        except Exception as e:
            print(email)
            print(e)
            return Response({'error': 'An error occurred.'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class VerifyOTP(APIView):
    def post(self, request):
        try:
            email = request.data.get('email')  
            otp = request.data.get('otp')

            profile_obj = Profile.objects.get(user__email=email)  
            if profile_obj.forget_password_token == otp and profile_obj.otp_expiry_time > timezone.now():
                return Response({'message': 'OTP verified successfully.'}, status=status.HTTP_200_OK)
            else:
                return Response({'error': 'Invalid OTP or expired.'}, status=status.HTTP_400_BAD_REQUEST)
        except Profile.DoesNotExist:
            return Response({'error': 'Profile not found.'}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({'error': 'An error occurred.'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class ChangePasswordWithOTP(APIView):
    def post(self, request, otp, email):  
        try:
            profile_obj = Profile.objects.filter(forget_password_token=otp).first()
            if not profile_obj or profile_obj.forget_password_token != otp:
                return Response({'error': 'Invalid or expired token'}, status=status.HTTP_404_NOT_FOUND)

            new_password = request.data.get('new_password').strip()
            confirm_password = request.data.get('confirm_password').strip()

            try:
                validate_password(new_password) 
            except ValidationError as e:
                return Response({'error': ', '.join(e.messages)}, status=status.HTTP_400_BAD_REQUEST)

            if new_password != confirm_password:
                return Response({'error': 'Passwords do not match.'}, status=status.HTTP_400_BAD_REQUEST)

            user_obj = profile_obj.user
            if user_obj.email != email:  
                return Response({'error': 'Email mismatch'}, status=status.HTTP_400_BAD_REQUEST)

            try:
                validate_password(new_password)  
            except ValidationError as e:
                return Response({'error': ', '.join(e.messages)}, status=status.HTTP_400_BAD_REQUEST)

            user_obj.set_password(new_password)
            user_obj.save()

            profile_obj.forget_password_token = None
            profile_obj.save()

            return Response({'message': 'Password changed successfully'}, status=status.HTTP_200_OK)

        except Profile.DoesNotExist:
            return Response({'error': 'Invalid or expired token'}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)