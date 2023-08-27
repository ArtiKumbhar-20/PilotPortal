from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import IdeaSub
from .serializers import IdeaSubSerializer

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
        'idea': 
        {'id': idea.ideaID,
        'name': idea.ideaTeamName,
        'insti_id': idea.ideaTeamInstiID,
        'cfo': idea.ideaTeamCFO,
        'ceo': idea.ideaTeamCEO,
        'cto': idea.ideaTeamCTO,
        'coo': idea.ideaTeamCOO,
        'cmo': idea.ideaTeamCMO,
        'ps_detail': idea.ideaTeamPSdetail,
        'persona_1': idea.ideaTeamPersona1,
        'persona_2': idea.ideaTeamPersona2,
        'interviews': idea.ideaTeamInterviews,
        'questions': idea.ideaTeamQuestions,
        'insights': idea.ideaTeamInsights,
        'final_ps': idea.ideaTeamFinalPS,
        'domain': idea.ideaTeamDomain,
        'sdg': idea.ideaTeamSDG,
        'soln_count': idea.ideaTeamSolnCount,
        'top_soln_1': idea.ideaTeamTopSoln1,
        'top_soln_2': idea.ideaTeamTopSoln2,
        'top_soln_3': idea.ideaTeamTopSoln3,
        'quick_val': idea.ideaTeamQuickVal,
        'final_soln': idea.ideaTeamFinalSoln,
        'offering_type': idea.ideaTeamOfferingType,
        'tech_req': idea.ideaTeamTechReq,
        'hardware_req': idea.ideaTeamHardwareReq,
        'non_tech_req': idea.ideaTeamNonTechReq,
        'proto_time': idea.ideaTeamProtoTime,
        'proto_cost': idea.ideaTeamProtoCost,
        'incu_support': idea.ideaTeamIncuSupport,
        },
        }
        return Response(response_data)