# quiz_api/views.py
from rest_framework import generics
from .models import QuizResult
from .serializers import QuizResultSerializer

class QuizResultListCreateView(generics.ListCreateAPIView):
    queryset = QuizResult.objects.all()
    serializer_class = QuizResultSerializer
