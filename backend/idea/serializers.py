from rest_framework import serializers
from .models import IdeaSub

class IdeaSubSerializer(serializers.ModelSerializer):
    class Meta:
        model = IdeaSub
        fields = '__all__'