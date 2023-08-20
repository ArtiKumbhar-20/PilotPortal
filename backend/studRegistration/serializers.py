from rest_framework import serializers
from .models import Student
from .models import Panelist
from .models import Institute
from .models import Incubators
from .models import Catalyst

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