from django.db import models

from django.db import models
from django.utils import timezone

# Create your models here.
class Event(models.Model):
    eventID = models.AutoField(primary_key=True)
    eventTitle = models.CharField(max_length=100)
    eventInstiID = models.CharField(max_length=100,default='1')
    eventType = models.CharField(max_length=100)
    eventLocation = models.CharField(max_length=100)
    eventDescr = models.TextField()
    eventSPOCFname = models.CharField(max_length=100)
    eventSPOCLname = models.CharField(max_length=100)
    eventSPOCMobile = models.CharField(max_length=10)
    eventSPOCWhatsapp = models.CharField(max_length=10)
    eventSPOCEmail = models.EmailField()
    eventSPOCWeb = models.CharField(max_length=100)
    eventStartTime = models.TimeField()
    eventEndTime = models.TextField
    eventStartDate = models.DateField()
    eventEndDate = models.DateField()
    eventGuidelines = models.TextField()
    recordCreatedOn = models.DateField(default=timezone.now)
    recordCreatedBy = models.CharField(max_length=100, default='admin')
    recordUpdatedOn = models.DateField(default=timezone.now)
    recordUpdatedBy = models.CharField(max_length=100, default='admin')

    def __str__(self):
        return f"{self.eventTitle} {self.eventType} ({self.eventID})"