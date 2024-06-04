from rest_framework import serializers
from .models import *
from datetime import datetime

class IdeaSubSerializer(serializers.ModelSerializer):
    class Meta:
        model = IdeaSub
        fields = '__all__'
        

class IdeaStatSerializer(serializers.ModelSerializer):
    class Meta:
        model = IdeaStat
        fields = '__all__'

class IdeaEvalSerializer(serializers.ModelSerializer):
    recordCreatedOn = serializers.DateField(default=datetime.now().date())
    recordUpdatedOn = serializers.DateField(default=datetime.now().date())

    class Meta:
        model = IdeaEval
        fields = '__all__'

#get data 
class IdeaGetEvalSerializer(serializers.ModelSerializer):
    class Meta:
        model = IdeaEval
        fields = ['recordCreatedOn', 'ideaID', 'ideaTeamPSdetail']
