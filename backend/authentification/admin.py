from django.contrib import admin
from .models import Profile

@admin.register(Profile)
class InstAdmin(admin.ModelAdmin):
    list_display = (
        'student_id','user',
    )