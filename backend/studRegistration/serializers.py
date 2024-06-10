from rest_framework import serializers
from .models import *
from idea.models import IdeaSub

from django.contrib.auth.models import User

#Idea form Serializer

class IdeaSubSerializer(serializers.ModelSerializer):
    class Meta:
        model = IdeaSub
        fields = '__all__'


# Institute Form
class InstituteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Institute   
        # fields = '__all__'
        fields = ['instID', 'instName']

# Student Registration
class StudentSerializer(serializers.ModelSerializer):
    verification_otp = serializers.CharField(write_only=True, allow_blank=True, required=False)
    # stdInstiID = serializers.PrimaryKeyRelatedField(queryset=Institute.objects.all())
    # institute = serializers.PrimaryKeyRelatedField(queryset=Institute.objects.all())
    # institute = InstituteSerializer()
    class Meta:
        model = Student
        fields = '__all__'



class OTPVerificationSerializer(serializers.Serializer):
    # email = serializers.EmailField()
    verification_otp = serializers.CharField(max_length=6)
        
# Panelist Registration
class PanelistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Panelist
        fields = '__all__'

# Incubators Registration
class IncubatorsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Incubators
        fields = '__all__'

# Catalyst Registration
class CatalystSerializer(serializers.ModelSerializer):
    class Meta:
        model = Catalyst
        fields = '__all__'

# Team Registration
class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = '__all__'


class AssignedIdeaSerializer(serializers.ModelSerializer):
    panelist_username = serializers.CharField(source='panelistID.username', read_only=True)

    class Meta:
        model = IdeaSub
        fields = ['ideaID', 'panelist_username']  # Include other fields as needed
