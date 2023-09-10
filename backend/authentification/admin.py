from django.contrib import admin
from .models import Profile

@admin.register(Profile)
class InstAdmin(admin.ModelAdmin):
    list_display = (
        'user','student_id',
        # 'profileID','user','student_id','paneID',
    )

