from django.contrib.auth.models import User, Group
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import *
from .models import *

# Student Registration with login access
class StudentRegistration(APIView):
    def post(self, request):
        serializer = StudentSerializer(data=request.data)
        if serializer.is_valid():
            student = serializer.save()

            # Create a new user for the student with a default password
            user = User(username=student.stdEmail, email=student.stdEmail, first_name=student.stdFname, last_name=student.stdLname)
            user.set_password("admin@123")  # Set the default password
            user.save()

            # Add the new user to the 'Student' group
            student_group = Group.objects.get(name='Student')
            user.groups.add(student_group)

            student.user = user  # Link the user to the student
            student.save()

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Panelist Registration
class PanelistRegistration(APIView):
    def post(self, request):
        serializer = PanelistSerializer(data=request.data)
        if serializer.is_valid():
            panelist = serializer.save()

            # Create a new user for the panelist with a default password
            user = User(username=panelist.panelistEmail, email=panelist.panelistEmail, first_name=panelist.panelistFname, last_name=panelist.panelistLname)
            user.set_password("admin@123")  # Set the default password
            user.save()

            # Add the new user to the 'Panelist' group
            panelist_group = Group.objects.get(name='Panelist')
            user.groups.add(panelist_group)

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
    
class IdeaSubGetDataAPIView(APIView):
    def get(self, request):
        team = Team.objects.first()  # Fetch the first team record
        panelist = Panelist.objects.last()  # Fetch the first panelist record

        # Process the data and create a JSON response
        response_data = {
            'team': {'id': team.teamID, 'name': team.teamName},
            'panelist': {'id': panelist.panelID, 'name': f"{panelist.panelistFname} {panelist.panelistLname}"}
        }
        return Response(response_data)
    
class StudentDetailView(APIView):
    def get(self, request, loggedInUserId):
        try:
            # Fetching the student using the stdID
            stud = Student.objects.get(stdID=loggedInUserId)
        except Student.DoesNotExist:
            return Response({'error': 'Student not found'}, status=404)

        response_data = {
            'stud': {
                'stdFname': stud.stdFname,
                'stdLname': stud.stdLname,
                'Email': stud.stdEmail,
                'stdDOB': stud.stdDOB,
                'stdGender': stud.stdGender,
                'stdMobile': stud.stdMobile,
                'stdWhatsapp': stud.stdWhatsapp,
                'stdAddress': stud.stdAddress,
                'stdAddrCity': stud.stdAddrCity,
                'stdAddrDist': stud.stdAddrDist,
                'stdAddrState': stud.stdAddrState,
                'stdAddrCountry': stud.stdAddrCountry,
                'stdAddrPin': stud.stdAddrPin,
                'stdInstiID': stud.stdInstiID,
                'stdStream': stud.stdStream,
                'stdBranch': stud.stdBranch,
                'stdPassoutYear': stud.stdPassoutYear,
                'stdTriedStartupBefore': stud.stdTriedStartupBefore
                # Add more fields as needed
            }
        }
        return Response(response_data)
