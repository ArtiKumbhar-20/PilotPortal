from django.contrib.auth.models import User, Group
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from authentification.models import Profile
from .serializers import *
from .models import *
from django.http import JsonResponse
from django.db import transaction
from .register import send_welcome_email
import random
import string
from .serializers import OTPVerificationSerializer
import secrets
import string



# Import the logging module for debugging
# import logging

# Create a logger instance
# logger = logging.getLogger(__name__)

#Institute Form
class InstituteRegistration(APIView):
    def post(self, request):
        serializer = InstituteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
# Student Registration with login access
# class StudentRegistration(APIView):
#     def get(self, request, pk):
#         try:
#             student = Student.objects.get(pk=pk)
#             student_serializer = StudentSerializer(student)
#             institute_serializer = InstituteSerializer(student.stdInstiID)
#             response_data = {
#                 "stud": student_serializer.data,
#                 "institute": institute_serializer.data
#             }
#             return Response(response_data, status=status.HTTP_200_OK)
#         except Student.DoesNotExist:
#             return Response({"error": "Student not found"}, status=status.HTTP_404_NOT_FOUND)

# Backup 'StudentRegistration'below

#Student Registration
class StudentRegistration(APIView):
    def generate_otp(self):
        # Generate a random 6-digit OTP
        return ''.join(random.choices(string.digits, k=6))

    def post(self, request):
        serializer = StudentSerializer(data=request.data)
        if serializer.is_valid():
            student = serializer.save()

            # Create a new user for the student with a default password
            user = User(username=student.stdEmail, email=student.stdEmail, first_name=student.stdFname, last_name=student.stdLname)
            # user.set_password("admin@123")  # Set the default password
            password_characters = string.ascii_letters + string.digits
            password = ''.join(secrets.choice(password_characters) for _ in range(8))
            # Set the password for the user
            user.set_password(password)
            user.is_active = False
            user.save()

            # Add the new user to the 'Student' group
            student_group = Group.objects.get(name='Student')
            user.groups.add(student_group)

            # Add debug statements to print information
            # logger.debug(f"Student ID: {student.stdID}")
            # logger.debug(f"User ID: {user.id}")
            try:
                profile = Profile.objects.get(user=user)
                profile.student_id = student.stdID
                profile.save()
            except Profile.DoesNotExist:
                profile = Profile(user=user, student_id=student.stdID)
                profile.save()

            student.user = user  # Link the user to the student
            student.save()
            
            otp = self.generate_otp()
            profile.verification_otp = otp
            profile.otp_expiry_time = timezone.now() + timezone.timedelta(minutes=15)
            profile.save()

            # Pass the OTP to the send_welcome_email function
            send_welcome_email(student.stdEmail, otp, student.stdEmail, password, student.stdUniqueID)

            # Set the OTP in the serializer context
            serializer.context['verification_otp'] = otp
            serializer.context['student_email'] = student.stdEmail
            serializer.context['is_active'] = user.is_active

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# OTP Verification
class OTPVerification(APIView):
    def post(self, request):
        # Get the received OTP from the request data
        received_otp = request.data.get('verification_otp', '')
        if not received_otp:
            return Response({'error': 'Verification OTP is required'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            # Retrieve the user profile using the received OTP
            profile = Profile.objects.get(verification_otp=received_otp, otp_expiry_time__gt=timezone.now())
            user = profile.user
            user.is_active = True  # Activate the user account upon successful OTP verification
            user.save()

            # Update the 'is_verified' flag in your Profile model
            profile.is_verified = True
            profile.save()

            student = Student.objects.get(stdID=profile.student_id)
            student.stdEmailVerified = True
            student.save()

            return Response({'message': 'Email verification successful'}, status=status.HTTP_200_OK)
        except Profile.DoesNotExist:
            return Response({'error': 'Invalid or expired OTP'}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'error': 'An error occurred while verifying OTP'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

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

            try:
                profile = Profile.objects.get(user=user)
                profile.paneID = panelist.panelID
                profile.save()
            except Profile.DoesNotExist:
                profile = Profile(user=user, paneID=panelist.panelID)
                profile.save()

            panelist.user = user  # Link the user to the panelist
            panelist.save()

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
            team_name = request.data['teamName']
            team_ceo = request.data['teamCEO']
            team_coo = request.data['teamCOO']
            team_cmo = request.data['teamCMO']
            team_cto = request.data['teamCTO']
            team_cfo = request.data['teamCFO']

            # Check if the team name is already taken (case-insensitive)
            if Team.objects.filter(teamName__iexact=team_name).exists():
                return Response({"error": "Team name already taken."}, status=status.HTTP_409_CONFLICT)

            # Check if team members are associated or registered with other teams
            conflicting_members = Student.objects.filter(
                stdUniqueID__in=[team_ceo, team_coo, team_cmo, team_cto, team_cfo],
                teamID__isnull=False
            )

            if conflicting_members.exists():
                conflicting_members_list = list(conflicting_members.values_list('stdUniqueID', flat=True))
                return Response({"error": f"One or more team members are already associated with other teams: {conflicting_members_list}"}, status=status.HTTP_409_CONFLICT)

            with transaction.atomic():
                # Save the team details
                team_instance = serializer.save()

                # Get the team ID
                teamID = team_instance.teamID

                # Update the teamID for each student
                student_unique_ids = [team_ceo, team_coo, team_cmo, team_cto, team_cfo]

                for uniqueID in student_unique_ids:
                    try:
                        student = Student.objects.get(stdUniqueID=uniqueID, teamID__isnull=True)
                        student.teamID = team_instance
                        student.save()
                    except Student.DoesNotExist:
                        return Response({"error": f"Student with uniqueID {uniqueID} is already associated with another team."}, status=status.HTTP_409_CONFLICT)

            return Response({"message": "Team created successfully."}, status=status.HTTP_201_CREATED)
        else:
            return Response({"error": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

class IdeaSubGetDataAPIView(APIView):
    def get(self, request):
        team = Team.objects.first()  # Fetch the first team record
        panelist = Panelist.objects.last()  # Fetch the first panelist record

        # Process the data and create a JSON response
        response_data = {
            'team': {'id': team.teamID, 'name': team.teamName},
            'panelist': {'id': panelist.panelID, 'name': f"{panelist.panelistFname} {panelist.panelistLname}"},
        }
        return Response(response_data)
    
class StudentDetailView(APIView):
    def get(self, request, loggedInStudId):
        try:
            # Fetching the student using the stdID
            stud = Student.objects.get(stdID=loggedInStudId)
        except Student.DoesNotExist:
            return Response({'error': 'Student not found'}, status=404)

        institute_serializer = InstituteSerializer(stud.stdInstiID)
        response_data = {
            'stud': {
                'stdID': stud.stdID,
                'stdUniqueID': stud.stdUniqueID,
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
                'stdInstiID': institute_serializer.data,
                'stdStream': stud.stdStream,
                'stdBranch': stud.stdBranch,
                'stdPassoutYear': stud.stdPassoutYear,
                'stdTriedStartupBefore': stud.stdTriedStartupBefore
            }
        }
        return Response(response_data)
    
class TeamDetailView(APIView):
    def get(self, request, loggedInStudId):  
        try:
            student = Student.objects.get(stdID=loggedInStudId)
            team = student.teamID
            # institute = Institute.objects.get(teamInstiID=team.teamInstiID)
            institute_serializer = InstituteSerializer(team.teamInstiID)
            if team:
                teamDetails = {
                    'teamID': team.teamID,
                    'teamName': team.teamName,
                    'teamCEO': team.teamCEO,
                    'teamCOO': team.teamCOO,
                    'teamCMO': team.teamCMO,
                    'teamCTO': team.teamCTO,
                    'teamCFO': team.teamCFO,
                    'teamInstiID': institute_serializer.data,
                }
            else:
                teamDetails = {}
        except Student.DoesNotExist:
            return Response({'error': 'Student not found'}, status=404)
    
        response_data = {
            'teams': teamDetails,
        }
        return Response(response_data)

class PanelistDetailView(APIView):
    def get(self, request, loggedInPanelId):
        try:
            # Fetching the student using the stdID
            stud = Panelist.objects.get(panelID=loggedInPanelId)
        except Panelist.DoesNotExist:
            return Response({'error': 'Panelist not found'}, status=404)

        response_data = {
            'stud': {
                'panelID': stud.panelID,
                'panelistFname': stud.panelistFname,
                'panelistLname': stud.panelistLname,
                'panelistDOB': stud.panelistDOB,
                'panelistGender': stud.panelistGender,
                'panelistEmail': stud.panelistEmail,
                'panelistMobile': stud.panelistMobile,
                'panelistWhatsapp': stud.panelistWhatsapp,
                'panelistAadhar': stud.panelistAadhar,
                'panelistInstiID': stud.panelistInstiID,
                'panelistDomain': stud.panelistDomain,
                'panelistDegree': stud.panelistDegree,
                'panelistDesignation': stud.panelistDesignation,
                'panelistTotalExp': stud.panelistTotalExp,
                'panelistIdeaEvaluated': stud.panelistIdeaEvaluated,
                'panelistStatus': stud.panelistStatus
            }
        }
        return Response(response_data)

class InstituteListView(APIView):
    def get(self, request, *args, **kwargs):
        institutes = Institute.objects.values('instID', 'instName')
        return JsonResponse({'institutes': list(institutes)}, safe=False)
    
