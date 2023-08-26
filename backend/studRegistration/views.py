from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import *
from .models import Panelist, Team

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
    
# Team Registration
class TeamRegistration(APIView):
    def post(self, request):
        serializer = TeamSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
# Idea Registration
class IdeaStatView(APIView):
    def post(self, request):
        serializer = IdeaStatSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class IdeaSubGetDataAPIView(APIView):
    def get(self, request):
        teams = Team.objects.all()  # Fetch team data from Team model
        panelists = Panelist.objects.all()  # Fetch panelist data from Panelist model

        # Process the data and create a JSON response
        response_data = {
            'Teams': [{'id': team.teamID, 'name': team.teamName} for team in teams],
            'Panelists': [{'id': panelist.panelID, 'name': f"{panelist.panelistFname} {panelist.panelistLname}"} for panelist in panelists]
        }
        return Response(response_data)

