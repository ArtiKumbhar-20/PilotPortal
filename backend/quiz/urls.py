# quiz_api/urls.py
from django.urls import path
from .views import QuizResultListCreateView
from .views import QuestionListAPIView


urlpatterns = [
    path('quiz-results/', QuizResultListCreateView.as_view(), name='quiz-result-list-create'),
    path('quiz-questions/', QuestionListAPIView.as_view(), name='question_list'),
]
