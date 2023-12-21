from django.core.mail import send_mail
from django.conf import settings

def send_forget_password_mail(email, otp, username):
    try:
        subject = 'Your forget password OTP'
        message = f'Hi {username}, your OTP to reset your password is: {otp}'
        email_from = settings.EMAIL_HOST_USER
        recipient_list = [email]
        send_mail(subject, message, email_from, recipient_list)
        return True
    except Exception as e:
        # Log or print the exception for debugging purposes
        print(f"Email sending failed: {e}")
        return False
