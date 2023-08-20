# Register your models here.
from django.contrib import admin
from .models import IdeaSub

@admin.register(IdeaSub)
class IdeaSubAdmin(admin.ModelAdmin):
    list_display = (
        'ideaID','ideaTeamName','ideaTeamInstiID',
        'ideaTeamCFO',
        'ideaTeamCEO','ideaTeamCTO','ideaTeamCOO','ideaTeamCMO','ideaTeamPSdetail',
        'ideaTeamPersona1','ideaTeamPersona2','ideaTeamInterviews','ideaTeamQuestions',
        'ideaTeamInsights','ideaTeamFinalPS','ideaTeamDomain','ideaTeamSDG',
        'ideaTeamSolnCount','ideaTeamTopSoln1','ideaTeamTopSoln2','ideaTeamTopSoln3',
        'ideaTeamQuickVal','ideaTeamFinalSoln','ideaTeamOfferingType','ideaTeamTechReq',
        'ideaTeamHardwareReq','ideaTeamNonTechReq','ideaTeamProtoTime','ideaTeamProtoCost',
        'ideaTeamIncuSupport','recordCreatedOn','recordCreatedBy','recordUpdatedOn','recordUpdatedBy'
    )
