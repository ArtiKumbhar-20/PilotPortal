# Register your models here.
from django.contrib import admin
from .models import Student
from .models import Panelist
from .models import Institute
from .models import Incubators
from .models import Catalyst

# Student Registration
@admin.register(Student)
class StudAdmin(admin.ModelAdmin):
    list_display = (
        'stdID', 'stdFname', 'stdLname', 'stdInstiID', 'stdEmail',
        'stdMobile', 'stdWhatsapp', 'stdPassoutYear', 'stdStream',
        'stdBranch', 'stdGender', 'stdDOB', 'stdTriedStartupBefore',
        'stdFamBackground', 'stdParentSupport', 'stdEBC', 'stdEduLoan',
        'stdAadhar', 'stdAddress', 'stdAddrPin', 'stdAddrCity',
        'stdAddrTaluka', 'stdAddrDist', 'stdAddrState', 'stdAddrCountry',
        'stdBelongsTo', 'recordCreatedOn', 'recordCreatedBy',
        'recordUpdatedOn', 'recordUpdatedBy'
    )

# Panelist Registration
@admin.register(Panelist)
class PanelistAdmin(admin.ModelAdmin):
    list_display = (
        'panelID', 'panelistFname', 'panelistLname', 'panelistDOB', 
        'panelistGender', 'panelistEmail', 'panelistMobile', 'panelistWhatsapp', 
        'panelistAadhar', 'panelistInstiID', 'panelistDomain', 'panelistDegree', 'panelistDesignation', 
        'panelistTotalExp', 'panelistIdeaEvaluated', 'panelistStatus', 'recordCreatedOn', 
        'recordCreatedBy', 'recordUpdatedOn', 'recordUpdatedBy'
    )

# Institute Registration
@admin.register(Institute)
class InstAdmin(admin.ModelAdmin):
    list_display = (
        'instID', 'instName', 'instType', 'instStream', 'instNoOfStudents', 'instAddress', 'instPin', 'instCity', 'instTaluka', 'instDist', 'instState', 'instCountry', 'instSPOCFname', 'instSPOCLname', 'instSPOCEmail', 'instSPOCMobile', 'instSPOCWhatsapp', 'instSPOCWeb', 'instIncubator', 'instEDC', 'instIIC', 'instARIIA', 'instNIRF', 'instNAAC', 'instNBA', 'recordCreatedOn', 'recordCreatedBy', 'recordUpdatedOn', 'recordUpdatedBy'
    )

# Incubators Registration
@admin.register(Incubators)
class IncuAdmin(admin.ModelAdmin):
    list_display = (
        'incuID', 'incuName', 'incuType', 'incuFundAvailable', 'incuAddress', 
        'incuPin', 'incuCity', 'incuTaluka','incuDist', 'incuState', 'incuCountry', 
        'incuSPOCFname', 'incuSPOCLname', 'incuSPOCMobile', 'incuSPOCWhatsapp',
        'incuSPOCEmail', 'incuSPOCWeb', 'incuSupportedBy', 'recordCreatedOn', 
        'recordCreatedBy', 'recordUpdatedOn', 'recordUpdatedBy'
    )

# Catalyst Registration
@admin.register(Catalyst)
class CatalystAdmin(admin.ModelAdmin):
    list_display = (
        'catalystID', 'catalystFname', 'catalystLname',
        'catalystEmail', 'catalystMobile', 'catalystWhatsapp', 'catalystYear',
        'catalystStreamBranch', 'catalystGender', 'catalystDOB', 'catalystTriedStartupBefore',
        'catalystFamilyBackground', 'catalystEBC', 'catalystAadhar', 'catalystAddress',
        'catalystPin', 'catalystCity', 'catalystTaluka', 'catalystDist', 'catalystState',
        'catalystCountry', 'catalystBelongsTo',  'recordCreatedBy',
        'recordUpdatedOn', 'recordUpdatedBy'
    )