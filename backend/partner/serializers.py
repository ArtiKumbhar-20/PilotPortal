from rest_framework import serializers
from .models import partner

# partners
class partnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = partner
        fields = '__all__'