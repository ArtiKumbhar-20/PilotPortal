from django.contrib.auth.models import User
from django.db import models
from django.utils import timezone


# Institute Registration
class Institute(models.Model):
    instID = models.AutoField(primary_key=True)
    instName = models.CharField(max_length=100)
    instType = models.CharField(max_length=100)
    instStream = models.CharField(max_length=100)
    instNoOfStudents = models.CharField(max_length=100)
    instAddress = models.CharField(max_length=100)
    instPin = models.CharField(max_length=100)
    instCity = models.CharField(max_length=100)
    instTaluka = models.CharField(max_length=100)
    instDist = models.CharField(max_length=100)
    instState = models.CharField(max_length=100)
    instCountry = models.CharField(max_length=100)
    instSPOCFname = models.CharField(max_length=100)
    instSPOCLname = models.CharField(max_length=100)
    instSPOCEmail = models.EmailField()
    instSPOCMobile = models.CharField(max_length=10)
    instSPOCWhatsapp = models.CharField(max_length=10)
    instSPOCWeb = models.TextField()
    instIncubator = models.CharField(max_length=100,default='no')
    instEDC = models.CharField(max_length=100,default='no')
    instIIC = models.CharField(max_length=100,default='no')
    instARIIA = models.CharField(max_length=100)
    instNIRF = models.CharField(max_length=100)
    instNAAC = models.CharField(max_length=100)
    instNBA = models.CharField(max_length=100)
    recordCreatedOn = models.DateField(default=timezone.now)
    recordCreatedBy = models.CharField(max_length=100, default='admin')
    recordUpdatedOn = models.DateField(default=timezone.now)
    recordUpdatedBy = models.CharField(max_length=100, default='admin')

    def __str__(self):
        return f"{self.instID}"  
    
# Team Registration   
class Team(models.Model):
    teamID = models.AutoField(primary_key=True)
    teamName = models.CharField(max_length=100)
    teamCEO = models.CharField(max_length=100)
    teamCOO = models.CharField(max_length=100)
    teamCMO = models.CharField(max_length=100)
    teamCTO = models.CharField(max_length=100)
    teamCFO = models.CharField(max_length=100)
    teamInstiID = models.ForeignKey(Institute, on_delete=models.CASCADE)
    recordCreatedOn = models.DateField(default=timezone.now)
    recordCreatedBy = models.CharField(max_length=100, default='admin')
    recordUpdatedOn = models.DateField(default=timezone.now)
    recordUpdatedBy = models.CharField(max_length=100, default='admin')

    def __str__(self):
        return f"{self.teamID}"

# Student Registration
class Student(models.Model):
    stdID = models.AutoField(primary_key=True)
    teamID = models.ForeignKey(Team, on_delete=models.CASCADE)
    stdFname = models.CharField(max_length=100)
    stdLname = models.CharField(max_length=100)
    stdInstiID = models.ForeignKey(Institute, on_delete=models.CASCADE)
    # stdInstiID = models.CharField(max_length=100,default='1')
    stdEmail = models.EmailField()
    stdMobile = models.CharField(max_length=10)
    stdWhatsapp = models.CharField(max_length=10)
    stdPassoutYear = models.PositiveIntegerField()
    stdStream = models.CharField(max_length=100)
    stdBranch = models.CharField(max_length=100)
    stdGender = models.CharField(max_length=10)
    stdDOB = models.DateField()
    stdTriedStartupBefore = models.CharField(max_length=100)
    stdFamBackground = models.TextField()
    stdParentSupport = models.CharField(max_length=100,default='no')
    stdEBC = models.TextField()
    stdEduLoan = models.CharField(max_length=100,default='no')
    stdAadhar = models.CharField(max_length=14)
    stdAddress = models.TextField()
    stdAddrPin = models.CharField(max_length=6)
    stdAddrCity = models.CharField(max_length=100)
    stdAddrTaluka = models.CharField(max_length=100)
    stdAddrDist = models.CharField(max_length=100)
    stdAddrState = models.CharField(max_length=100)
    stdAddrCountry = models.CharField(max_length=100)
    stdBelongsTo = models.CharField(max_length=100)
    recordCreatedOn = models.DateField(default=timezone.now)
    recordCreatedBy = models.CharField(max_length=100, default='admin')
    recordUpdatedOn = models.DateField(default=timezone.now)
    recordUpdatedBy = models.CharField(max_length=100, default='admin')

    def __str__(self):
        return f"{self.stdFname} {self.stdLname} ({self.stdID})"

# Panelist Registration
class Panelist(models.Model):
    panelID = models.AutoField(primary_key=True)
    panelistFname = models.CharField(max_length=100)
    panelistLname = models.CharField(max_length=100)
    panelistDOB = models.DateField()
    panelistGender = models.CharField(max_length=10)
    panelistEmail = models.EmailField()
    panelistMobile = models.CharField(max_length=10)
    panelistWhatsapp = models.CharField(max_length=10)
    panelistAadhar = models.CharField(max_length=14)
    # panelistInstiID = models.CharField(max_length=100)
    panelistInstiID = models.ForeignKey('Institute', on_delete=models.CASCADE)
    panelistDomain = models.CharField(max_length=100)
    panelistDegree = models.CharField(max_length=100)
    panelistDesignation = models.CharField(max_length=100)
    panelistTotalExp = models.CharField(max_length=100)
    panelistIdeaEvaluated = models.CharField(max_length=100)
    panelistStatus = models.CharField(max_length=100, default='N/A') # Here Default need to change
    recordCreatedOn = models.DateField(default=timezone.now)
    recordCreatedBy = models.CharField(max_length=100, default='admin')
    recordUpdatedOn = models.DateField(default=timezone.now)
    recordUpdatedBy = models.CharField(max_length=100, default='admin')

    def __str__(self):
        return f"{self.panelistFname} {self.panelistLname} ({self.panelID})"
      
# Incubators Registration
class Incubators(models.Model):
    incuID = models.AutoField(primary_key=True)
    incuName = models.CharField(max_length=100)
    incuType = models.TextField()
    incuSupportedBy = models.TextField()
    incuFundAvailable = models.CharField(max_length=10)
    incuAddress = models.TextField()
    incuCity = models.CharField(max_length=100)
    incuTaluka = models.CharField(max_length=100)
    incuDist = models.CharField(max_length=100)
    incuState = models.CharField(max_length=100)
    incuCountry = models.CharField(max_length=100)
    incuPin = models.CharField(max_length=6)
    incuSPOCFname = models.CharField(max_length=100)
    incuSPOCLname = models.CharField(max_length=100)
    incuSPOCEmail = models.EmailField()
    incuSPOCMobile = models.CharField(max_length=10)
    incuSPOCWhatsapp = models.CharField(max_length=10)
    incuSPOCWeb = models.TextField()
    recordCreatedOn = models.DateField(default=timezone.now)
    recordCreatedBy = models.CharField(max_length=100, default='admin')
    recordUpdatedOn = models.DateField(default=timezone.now)
    recordUpdatedBy = models.CharField(max_length=100, default='admin')

    def __str__(self):
        return f"{self.incuName} ({self.incuID})"

#Catalyst form
class Catalyst(models.Model):
    catalystID = models.AutoField(primary_key=True)
    catalystInstiID = models.ForeignKey('Institute', on_delete=models.CASCADE)
    catalystFname = models.CharField(max_length=100)
    catalystLname  = models.CharField(max_length=100)
    catalystEmail = models.EmailField()
    catalystMobile = models.CharField(max_length=10)
    catalystWhatsapp  = models.CharField(max_length=10)
    catalystYear  = models.CharField(max_length=10)
    catalystStreamBranch = models.CharField(max_length=100)
    catalystGender = models.CharField(max_length=100)
    catalystDOB = models.DateField()
    catalystTriedStartupBefore  = models.CharField(max_length=100)
    catalystFamilyBackground = models.CharField(max_length=100)
    catalystEBC = models.CharField(max_length=100)
    catalystAadhar = models.CharField(max_length=14)
    catalystAddress = models.CharField(max_length=100) 
    catalystPin = models.CharField(max_length=6)
    catalystCity = models.CharField(max_length=100)
    catalystTaluka = models.CharField(max_length=100)
    catalystDist = models.CharField(max_length=100)
    catalystState = models.CharField(max_length=100)
    catalystCountry  = models.CharField(max_length=100)
    catalystBelongsTo = models.CharField(max_length=100)
    #catalystInstiName = models.CharField(max_length=100)
    catalystType=models.CharField(max_length=100, default='default_value_here')
    recordCreatedOn = models.DateField(default=timezone.now)
    recordCreatedBy = models.CharField(max_length=100, default='admin')
    recordUpdatedOn = models.DateField(default=timezone.now)
    recordUpdatedBy = models.CharField(max_length=100, default='admin')

    def __str__(self):
        return f"{self.catalystFname} {self.catalystLname} ({self.catalystID})"
    



