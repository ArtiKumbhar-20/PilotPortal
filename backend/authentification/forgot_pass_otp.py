from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.conf import settings
import logging
from pathlib import Path
import os
from datetime import timedelta
import base64

# Define BASE_DIR
BASE_DIR = Path(__file__).resolve().parent.parent

logger = logging.getLogger(__name__)

def send_forget_password_mail(email, otp, username):
    try:
        subject = 'Your forget password OTP'
        template_path = BASE_DIR / 'templates' / 'forgot_password_otp_request.html'
        context = {'username': username, 'otp': otp}
        email_from = settings.EMAIL_HOST_USER
        recipient_list = [email]

        message = render_to_string(template_path, context)

        
        send_mail(
            subject,
            message,
            email_from,
            recipient_list,
            html_message=message  # This line ensures the email is sent as HTML
            
        )
        logger.info(f"Email sent successfully to {email}")
        return True
    except Exception as e:
        # Log or print the exception for debugging purposes
        logger.error(f"Email sending failed: {e}")
        return False
