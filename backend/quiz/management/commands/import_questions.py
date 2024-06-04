import csv
from django.core.management.base import BaseCommand
from quiz.models import Question

class Command(BaseCommand):
    help = 'Import questions from CSV file'

    def add_arguments(self, parser):
        parser.add_argument('file_path', type=str, help='Path to CSV file')

    def handle(self, *args, **options):
        file_path = options['file_path']
        with open(file_path, newline='', encoding='utf-8') as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                Question.objects.create(
                    sr_no=row['Sr. No.'],
                    topic=row['Topic'],
                    subtopic=row['SubTopic'],
                    question_text=row['Question'],
                    option_a=row['Option A'],
                    option_b=row['Option B'],
                    option_c=row['Option C'],
                    option_d=row['Option D'],
                    correct_answer=row['Correct Answer'],
                    difficulty_level=row['Difficulty Level'],
                    score=row['Score'],
                )
        self.stdout.write(self.style.SUCCESS('Questions imported successfully'))
