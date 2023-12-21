from django.contrib.auth.models import User
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.utils import timezone
import random
import string

class Profile(models.Model):
    profileID = models.AutoField(primary_key=True)
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    # student_id = models.CharField(max_length=10, default='NULL')
    student_id = models.PositiveIntegerField(default=0)
    paneID = models.PositiveIntegerField(default=0)  
    forget_password_token = models.CharField(max_length=100, null=True, blank=True)
    otp_expiry_time = models.DateTimeField(null=True, blank=True)
    created_at = models.DateTimeField(default=timezone.now)

    def is_valid_otp(self, otp):
        return self.forget_password_token == otp and self.otp_expiry_time > timezone.now()
    
    def generate_otp(self):
        # Generate and assign OTP with an expiration time
        self.forget_password_token = ''.join(random.choices(string.digits, k=6))
        self.otp_expiry_time = timezone.now() + timezone.timedelta(minutes=30)  # Set expiration time (30 minutes in this example)
        self.save()

    def _str_(self):
        return f"{self.user.username} {self.student_id} {self.profileID} {self.paneID}"
    
@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()