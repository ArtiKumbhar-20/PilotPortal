from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Student
from .models import Institute
from .models import Incubators
from .serializers import StudentSerializer
from .serializers import PanelistSerializer
from .serializers import InstituteSerializer
from .serializers import IncubatorsSerializer
from .serializers import CatalystSerializer

# Student Registration
class StudentRegistration(APIView):
    def post(self, request):
        serializer = StudentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Panelist Registration
class PanelistRegistration(APIView):
    def post(self, request):
        serializer = PanelistSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#Institute Form
class InstituteRegistration(APIView):
    def post(self, request):
        serializer = InstituteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Incubators Registration
class IncubatorsRegistration(APIView):
    def post(self, request):
        serializer = IncubatorsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Catalyst Registration
class CatalystRegistration(APIView):
    def post(self, request):
        serializer = CatalystSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

