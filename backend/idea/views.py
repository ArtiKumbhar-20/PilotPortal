from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import *
from .serializers import *
from rest_framework import viewsets
from rest_framework import generics

class IdeaSubView(APIView):
    def post(self, request):
        serializer = IdeaSubSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class IdeaDetailView(APIView):
    def get(self, request, teamUniqueID):
        # idea = IdeaSub.objects.first()  # Fetch the first team record
        # idea = IdeaSub.objects.get(ideaTeamID=ideaTeamId)  # Fetch the first team record

        try:
            idea = IdeaSub.objects.get(ideaTeamID=teamUniqueID)
        except IdeaSub.DoesNotExist:
            return Response({'error': 'Idea not found'}, status=404)

        # Process the data and create a JSON response
        response_data = {
            'idea': {
                'ideaUniqueID':idea.ideaUniqueID,
                'ideaStatus':idea.ideaStatus,
                'ideaTeamName':idea.ideaTeamName,
                'final_ps': idea.ideaTeamFinalPS,
                'domain': idea.ideaTeamDomain,
                'final_soln': idea.ideaTeamFinalSoln,
                'offering_type': idea.ideaTeamOfferingType,
                'tech_req': idea.ideaTeamTechReq,
                'hardware_req': idea.ideaTeamHardwareReq,
                'non_tech_req': idea.ideaTeamNonTechReq,
                'proto_time': idea.ideaTeamProtoTime,
                'proto_cost': idea.ideaTeamProtoCost,
                'recordCreatedOn': idea.recordCreatedOn,
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

class IdeaSubViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = IdeaSub.objects.all()
    serializer_class = IdeaSubSerializer
    lookup_field = 'ideaID'

class IdeaEvalView(APIView):
    def post(self, request):
        data = request.data.copy()
        
        # Mapping values from "1" and "2" to "Yes" and "No"
        fields_to_map = [
            'evalAffordable', 'evalScalable', 'evalExcellent', 'evalDistinctive', 
            'evalWow', 'evalScopeIPs', 'evalMarketNeed', 'evalSupplyChain', 
            'evalScopeRevenue', 'evalCompetition', 'evalEaseOfOperation', 
            'evalBonus', 'evalRecommendedToIncu', 'evalUniversal', 
            'evalRapid', 'evalSustainable'
        ]

        for field in fields_to_map:
            if field in data:
                if data[field] == "1":
                    data[field] = "Yes"
                elif data[field] == "2":
                    data[field] = "No"

        serializer = IdeaEvalSerializer(data=data)

        if serializer.is_valid():
            eval_instance = serializer.save()

            # Find the related IdeaSub instance using the ideaID
            try:
                idea_sub_instance = IdeaSub.objects.get(ideaID=eval_instance.ideaID)
                idea_sub_instance.evaluateStatus = 'no'
                idea_sub_instance.save()
            except IdeaSub.DoesNotExist:
                # Handle the case where no IdeaSub instance matches the given ideaID
                return Response({"error": "IdeaSub instance not found"}, status=status.HTTP_404_NOT_FOUND)

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

#get data for evaluated ideas
class IdeaEvalListView(generics.ListAPIView):
    serializer_class = IdeaEvalSerializer

    def get_queryset(self):
        evalPanelistID = self.kwargs['evalPanelistID']
        return IdeaEval.objects.filter(evalPanelistID=evalPanelistID)
