from django.db import models
from django.utils import timezone
from studRegistration.models import Institute
from studRegistration.models import Team
from django.conf import settings
from studRegistration.models import Panelist

from django.db import models
from django.utils import timezone

# Assuming Panelist and Team models are defined elsewhere in your codebase

class IdeaSub(models.Model):
    panelistID = models.ForeignKey(Panelist, on_delete=models.SET_NULL, null=True, blank=True)
    ideaID = models.AutoField(primary_key=True)
    ideaStatus = models.CharField(max_length=100, default='Idea Submitted')
    ideaTeamID = models.ForeignKey(Team, to_field='teamUniqueID', on_delete=models.CASCADE, blank=True, null=True)
    ideaUniqueID = models.PositiveIntegerField(unique=True, blank=True, null=True)
    ideaTeamName = models.CharField(max_length=100)
    ideaTeamPSdetail = models.CharField(max_length=100)
    ideaTeamPersona1 = models.CharField(max_length=100)
    ideaTeamPersona2 = models.CharField(max_length=100)
    ideaTeamInterviews = models.CharField(max_length=100)
    ideaTeamQuestions = models.CharField(max_length=100)
    ideaTeamInsights = models.CharField(max_length=100)
    ideaTeamFinalPS = models.CharField(max_length=100)
    ideaTeamDomain = models.CharField(max_length=100)
    ideaTeamSDG = models.CharField(max_length=100)
    ideaTeamSolnCount = models.CharField(max_length=100)
    ideaTeamTopSoln1 = models.CharField(max_length=100)
    ideaTeamTopSoln2 = models.CharField(max_length=100)
    ideaTeamTopSoln3 = models.CharField(max_length=100)
    ideaTeamQuickVal = models.CharField(max_length=100)
    ideaTeamFinalSoln = models.CharField(max_length=100)
    ideaTeamOfferingType = models.CharField(max_length=100)
    ideaTeamTechReq = models.CharField(max_length=100)
    ideaTeamHardwareReq = models.CharField(max_length=100)
    ideaTeamNonTechReq = models.CharField(max_length=100)
    ideaTeamProtoTime = models.CharField(max_length=100)
    ideaTeamProtoCost = models.CharField(max_length=100)
    ideaTeamIncuSupport = models.CharField(max_length=100)
    recordCreatedOn = models.DateField(default=timezone.now)
    recordCreatedBy = models.CharField(max_length=100, default='admin')
    recordUpdatedOn = models.DateField(default=timezone.now)
    recordUpdatedBy = models.CharField(max_length=100, default='admin')
    
    # New field for evaluation status
    EVALUATE_STATUS_CHOICES = [
        ('yes', 'Yes'),
        ('no', 'No'),
    ]
    evaluateStatus = models.CharField(
        max_length=3,
        choices=EVALUATE_STATUS_CHOICES,
        default='yes',
    )

    def __str__(self):       
        return f"{self.ideaID} {self.ideaTeamName}"
   

class IdeaStat(models.Model):
    ideaStatID = models.AutoField(primary_key=True)
    ideaStatStatus = models.CharField(max_length=100)
    ideaStatMarketResearch = models.CharField(max_length=100)
    ideaStatAdvBoot = models.CharField(max_length=100)
    ideaStatIncuSupport = models.CharField(max_length=100)
    ideaStatIPRTrademark = models.CharField(max_length=100)
    ideaStatIPRPatent = models.CharField(max_length=100)
    ideaStatIPRCopyright = models.CharField(max_length=100)
    ideaStatBusinessPlan = models.CharField(max_length=100)
    ideaStatIPRTradeSecrets = models.CharField(max_length=100)
    ideaStatProto = models.CharField(max_length=100)
    ideaStatTeamPlacement = models.CharField(max_length=100)
    ideaStatIncorpStatus = models.CharField(max_length=100)
    ideaStatEmploybilitySkilling = models.CharField(max_length=100)
    recordCreatedOn = models.DateField(default=timezone.now)
    recordCreatedBy = models.CharField(max_length=100, default='admin')
    recordUpdatedOn = models.DateField(default=timezone.now)
    recordUpdatedBy = models.CharField(max_length=100, default='admin')

    def __str__(self):
        return f"{self.ideaStatStatus} {self.ideaStatID}"


class IdeaEval(models.Model):
    evalID = models.AutoField(primary_key=True)
    evalPanelistID = models.CharField(max_length=100)
    evalTeamID = models.CharField(max_length=100)
    ideaID = models.CharField(max_length=100, default='default_ideaID')
    evalAffordable = models.CharField(max_length=100)
    evalSustainable = models.CharField(max_length=100)
    evalScalable = models.CharField(max_length=100)
    evalUniversal = models.CharField(max_length=100)
    evalRapid = models.CharField(max_length=100)
    evalExcellent = models.CharField(max_length=100)
    evalDistinctive = models.CharField(max_length=100)
    evalWow = models.CharField(max_length=100)
    evalScopeIPs = models.CharField(max_length=100)
    evalMarketNeed = models.CharField(max_length=100)
    evalSupplyChain = models.CharField(max_length=100)
    evalScopeRevenue = models.CharField(max_length=100)
    evalCompetition = models.CharField(max_length=100)
    evalEaseOfOperation = models.CharField(max_length=100)
    evalBonus = models.CharField(max_length=100)
    evalRecommendedToIncu = models.CharField(max_length=100)
    evalAreaOfImprov = models.TextField()
    evalOverallFeedback = models.TextField()
    ideaTeamPSdetail = models.TextField(default='')
    recordCreatedOn = models.DateField(default=timezone.now)
    recordCreatedBy = models.CharField(max_length=100, default='admin')
    recordUpdatedOn = models.DateField(default=timezone.now)
    recordUpdatedBy = models.CharField(max_length=100, default='admin')

    def __str__(self):
        return f"{self.evalID} {self.evalPanelistID}"