# quiz_api/admin.py
from django.contrib import admin
from .models import *

@admin.register(Question)
class QuizQuestionAdmin(admin.ModelAdmin):
    list_display = (
        'sr_no', 'topic', 'subtopic', 'question_text', 'option_a', 'option_b',
        'option_c', 'option_d', 'correct_answer', 'difficulty_level', 'score'
    )
    search_fields = ('topic', 'subtopic', 'question_text')
    list_filter = ('topic', 'subtopic', 'correct_answer', 'difficulty_level')


admin.site.register(QuizResult)



