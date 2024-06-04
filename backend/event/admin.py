from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Event


@admin.register(Event)
class Event(admin.ModelAdmin):
    list_display = (
        'eventID','eventTitle','eventInstiID','eventType','eventLocation','eventDescr','eventSPOCFname','eventSPOCLname',
        'eventSPOCMobile','eventSPOCWhatsapp','eventSPOCEmail','eventSPOCWeb','eventStartTime',
        'eventEndTime','eventStartDate','eventEndDate','eventGuidelines','recordCreatedOn','recordCreatedBy',
        'recordUpdatedOn','recordUpdatedBy'
    )