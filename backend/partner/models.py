from django.db import models

from django.db import models
from django.utils import timezone

# Create your models here.
class partner(models.Model):
    partnerID = models.AutoField(primary_key=True)
    partnerName = models.CharField(max_length=100)
    partnerImage = models.ImageField()
    partnerLocation = models.CharField(max_length=100)
    partnerDomain = models.CharField(max_length=100)
    partnerType = models.CharField(max_length=100)
    partnerAddress = models.CharField(max_length=100)
    partnerPin = models.CharField(max_length=6)
    partnerCity = models.CharField(max_length=100)
    partnerTaluka = models.CharField(max_length=100)
    partnerDist = models.CharField(max_length=100)
    partnerState = models.CharField(max_length=100)
    partnerCountry = models.CharField(max_length=100)
    partnerSPOCFname = models.CharField(max_length=100)
    partnerSPOCLname = models.CharField(max_length=100)
    partnerSPOCMobile = models.CharField(max_length=10)
    partnerSPOCWhatsapp = models.CharField(max_length=10)
    partnerSPOCEmail = models.EmailField()
    partnerSPOCWeb = models.CharField(max_length=100)
    partnershipStartDate = models.DateField()
    partnershipEndDate = models.DateField()
    partnerDisplayOrder = models.CharField(max_length=100)
    recordCreatedOn = models.DateField(default=timezone.now)
    recordCreatedBy = models.CharField(max_length=100, default='admin')
    recordUpdatedOn = models.DateField(default=timezone.now)
    recordUpdatedBy = models.CharField(max_length=100, default='admin')

    def __str__(self):
        return f"{self.partnerImage} )"