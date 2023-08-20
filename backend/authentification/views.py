from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import status
from django.contrib.auth.models import User


class HomeView(APIView):
    permission_classes = (IsAuthenticated, )

    def get(self, request):
        user = request.user
        user_details = {
            "username": user.username,
            "email": user.email,
            "first_name": user.first_name,
            "last_name": user.last_name,
        }

        if user.groups.filter(name='Student').exists():
            content = {'message': 'Welcome to the Student Dashboard!', 'user_type': 'Student'}
        elif user.groups.filter(name='Panelist').exists():
            content = {'message': 'Welcome to the Panelist Dashboard!', 'user_type': 'Panelist'}
        else:
            content = {'message': 'Welcome to the Superadmin Dashboard!', 'user_type': 'Superadmin'}

        content.update(user_details)
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