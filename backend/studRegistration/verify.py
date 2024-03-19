from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.conf import settings
import logging
from pathlib import Path

# Define BASE_DIR
BASE_DIR = Path(__file__).resolve().parent.parent

logger = logging.getLogger(__name__)

def verify_email(student_email, otp):
    try:
        subject = 'OTP for Email Verification'
        template_path = BASE_DIR / 'templates' / 'resend_otp.html'
        context = {'otp': otp}
        email_from = settings.EMAIL_HOST_USER
        recipient_list = [student_email]

        message = render_to_string(template_path, context)

        send_mail(
            subject,
            '',
            email_from,
            recipient_list,
            html_message=message  # This line ensures the email is sent as HTML
        )

        logger.info(f"Email sent successfully to {student_email}")
        return True
    except Exception as e:
        # Log or print the exception for debugging purposes
        logger.error(f"Email sending failed: {e}")
        return False
