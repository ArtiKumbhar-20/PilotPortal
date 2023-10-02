from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import *
from .serializers import *

class IdeaSubView(APIView):
    def post(self, request):
        serializer = IdeaSubSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class IdeaDetailView(APIView):
    def get(self, request):
        idea = IdeaSub.objects.first()  # Fetch the first team record

        # Process the data and create a JSON response
        response_data = {
            'idea': {
                'final_ps': idea.ideaTeamFinalPS,
                'domain': idea.ideaTeamDomain,
                'final_soln': idea.ideaTeamFinalSoln,
                'offering_type': idea.ideaTeamOfferingType,
                'tech_req': idea.ideaTeamTechReq,
                'hardware_req': idea.ideaTeamHardwareReq,
                'non_tech_req': idea.ideaTeamNonTechReq,
                'proto_time': idea.ideaTeamProtoTime,
                'proto_cost': idea.ideaTeamProtoCost,
            },
        }
        return Response(response_data)
    
# Idea Registration
class IdeaStatView(APIView):
    def post(self, request):
        serializer = IdeaStatSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)