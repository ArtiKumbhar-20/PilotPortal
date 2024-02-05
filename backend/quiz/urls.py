# quiz_api/urls.py
from django.urls import path
from .views import QuizResultListCreateView

urlpatterns = [
    path('quiz-results/', QuizResultListCreateView.as_view(), name='quiz-result-list-create'),
]
