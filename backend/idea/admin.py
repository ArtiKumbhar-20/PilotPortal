# Register your models here.
from django.contrib import admin
from .models import *

@admin.register(IdeaSub)
class IdeaSubAdmin(admin.ModelAdmin):
    list_display = (
        'ideaID','ideaUniqueID','ideaTeamID','ideaTeamName','ideaTeamInstiID',
        'ideaTeamCFO','ideaTeamCEO','ideaTeamCTO','ideaTeamCOO','ideaTeamCMO','ideaTeamPSdetail',
        'ideaTeamPersona1','ideaTeamPersona2','ideaTeamInterviews','ideaTeamQuestions',
        'ideaTeamInsights','ideaTeamFinalPS','ideaTeamDomain','ideaTeamSDG',
        'ideaTeamSolnCount','ideaTeamTopSoln1','ideaTeamTopSoln2','ideaTeamTopSoln3',
        'ideaTeamQuickVal','ideaTeamFinalSoln','ideaTeamOfferingType','ideaTeamTechReq',
        'ideaTeamHardwareReq','ideaTeamNonTechReq','ideaTeamProtoTime','ideaTeamProtoCost',
        'ideaTeamIncuSupport','ideaStatus','recordCreatedOn','recordCreatedBy','recordUpdatedOn','recordUpdatedBy'
    )

@admin.register(IdeaStat)
class IdeaStatAdmin(admin.ModelAdmin):
    list_display = (
        'ideaStatID','ideaStatStatus','ideaStatMarketResearch', 'ideaStatAdvBoot',
        'ideaStatIncuSupport','ideaStatIPRTrademark','ideaStatIPRPatent','ideaStatIPRCopyright','ideaStatBusinessPlan',
        'ideaStatIPRTradeSecrets','ideaStatProto','ideaStatTeamPlacement','ideaStatIncorpStatus',
        'ideaStatEmploybilitySkilling','recordCreatedOn','recordCreatedBy','recordUpdatedOn','recordUpdatedBy'
    )
