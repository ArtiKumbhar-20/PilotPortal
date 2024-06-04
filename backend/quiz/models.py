from django.db import models
from django.utils import timezone
from datetime import date
from studRegistration.models import Student

class QuizResult(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE, null=True)
    score = models.IntegerField()
    correct_answers = models.IntegerField()
    wrong_answers = models.IntegerField()
    attempts = models.IntegerField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        if self.student:
            formatted_date = self.timestamp.strftime("%d %b %Y")
            formatted_time = self.timestamp.strftime("%I:%M %p")
            return f'{self.student.stdFname} {self.student.stdLname} - {formatted_date}, {formatted_time}'  # Use student's name
        else:
            formatted_date = self.timestamp.strftime("%d %b %Y")
            formatted_time = self.timestamp.strftime("%I:%M %p")
            return f'Quiz Result - {formatted_date}, {formatted_time}'

    class Meta:
        app_label = 'quiz'


class Question(models.Model):
    sr_no = models.IntegerField()
    topic = models.CharField(max_length=255)
    subtopic = models.CharField(max_length=255)
    question_text = models.TextField()
    option_a = models.CharField(max_length=255)
    option_b = models.CharField(max_length=255)
    option_c = models.CharField(max_length=255)
    option_d = models.CharField(max_length=255)
    correct_answer = models.CharField(max_length=255)
    difficulty_level = models.CharField(max_length=50)
    score = models.IntegerField()
    

    def __str__(self):
        return f'{self.sr_no} - {self.topic} - {self.subtopic}'

    class Meta:
        app_label = 'quiz'
