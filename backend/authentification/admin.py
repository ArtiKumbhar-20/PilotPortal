from django.contrib import admin
from .models import Profile

@admin.register(Profile)
class InstAdmin(admin.ModelAdmin):
    list_display = (
        'profileID', 'user', 'student_id', 'paneID'
        # 'profileID','user','student_id','paneID',
    )

