from rest_framework import serializers
from .models import *

# Student Registration
class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'

# Panelist Registration
class PanelistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Panelist
        fields = '__all__'

# Institute Form
class InstituteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Institute
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