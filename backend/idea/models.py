from django.db import models

# Create your models here.
from django.db import models
from django.utils import timezone

class IdeaSub(models.Model):
    ideaID = models.AutoField(primary_key=True)
    # ideaTeamID = models.ForeignKey('Institution', on_delete=models.CASCADE)
    ideaTeamName = models.CharField(max_length=100)
    ideaTeamInstiID = models.CharField(max_length=100,default='1')
    ideaTeamCFO = models.CharField(max_length=100)
    ideaTeamCEO = models.CharField(max_length=100) 
    ideaTeamCTO = models.CharField(max_length=100)
    ideaTeamCOO = models.CharField(max_length=100)
    ideaTeamCMO = models.CharField(max_length=100)
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

    def __str__(self):
        return f"{self.ideaTeamName} {self.ideaID} ({self.ideaTeamInstiID})"

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