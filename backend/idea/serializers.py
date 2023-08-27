from rest_framework import serializers
from .models import *

class IdeaSubSerializer(serializers.ModelSerializer):
    class Meta:
        model = IdeaSub
        fields = '__all__'

class IdeaStatSerializer(serializers.ModelSerializer):
    class Meta:
        model = IdeaStat
        fields = '__all__'