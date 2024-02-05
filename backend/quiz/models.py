from django.db import models

class QuizResult(models.Model):
    user_id = models.IntegerField()  # You may want to link this to a user model
    score = models.IntegerField()
    correct_answers = models.IntegerField()
    wrong_answers = models.IntegerField()
    attempts = models.IntegerField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.user_id} - {self.timestamp}'

    class Meta:
        app_label = 'quiz'