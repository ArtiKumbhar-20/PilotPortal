# quiz_api/views.py
from rest_framework import generics
from .models import QuizResult
from .serializers import QuizResultSerializer
from .models import Question
from .serializers import QuestionSerializer

class QuestionListAPIView(generics.ListAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer


class QuizResultListCreateView(generics.ListCreateAPIView):
    queryset = QuizResult.objects.all()
    serializer_class = QuizResultSerializer
