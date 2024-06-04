# quiz_api/views.py
from rest_framework import generics
from django.db.models import Count
from .models import QuizResult, Question
from .serializers import QuizResultSerializer, QuestionSerializer

class QuestionListAPIView(generics.ListAPIView):
    serializer_class = QuestionSerializer

    def get_queryset(self):
        # Initialize empty lists to store selected questions
        selected_questions = []

        # Fetch random questions for each score category
        questions_score_1 = Question.objects.filter(score=1).order_by('?')[:4]
        questions_score_2 = Question.objects.filter(score=2).order_by('?')[:3]
        questions_score_3 = Question.objects.filter(score=3).order_by('?')[:3]

        # Select unique questions from each score category until we have a total of 10 questions
        for questions_set in [questions_score_1, questions_score_2, questions_score_3]:
            for question in questions_set:
                # Check if the question has already been selected and add it to the list
                if question not in selected_questions:
                    selected_questions.append(question)
                    # Break the loop if we have selected 10 questions
                    if len(selected_questions) == 10:
                        break
            # Break the outer loop if we have selected 10 questions
            if len(selected_questions) == 10:
                break

        return selected_questions

class QuizResultListCreateView(generics.ListCreateAPIView):
    queryset = QuizResult.objects.all()
    serializer_class = QuizResultSerializer
