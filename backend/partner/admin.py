from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import partner


@admin.register(partner)
class partner(admin.ModelAdmin):
    list_display = (
        'partnerID','partnerName','partnerLocation','partnerDomain','partnerType','partnerAddress','partnerPin','partnerCity',
        'partnerTaluka','partnerDist','partnerState','partnerCountry','partnerSPOCFname',
        'partnerSPOCLname','partnerSPOCMobile','partnerSPOCWhatsapp','partnerSPOCEmail','partnerSPOCWeb','partnershipStartDate',
        'partnershipEndDate','partnerDisplayOrder','recordCreatedOn','recordCreatedBy','recordUpdatedOn','recordUpdatedBy'
    )