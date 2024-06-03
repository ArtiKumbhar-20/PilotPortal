from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.conf import settings
import logging
from pathlib import Path

# Define BASE_DIR
BASE_DIR = Path(__file__).resolve().parent.parent

logger = logging.getLogger(__name__)

# OTP for Email Verification
def otp_verify_email(student_email, otp):
    try:
        subject = 'OTP for Email Verification'
        template_path = BASE_DIR / 'templates' / 'otp_verify_email.html'
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

# Resend OTP for Email Verification
def resend_otp(student_email, otp, email):
    try:
        subject = 'OTP for Email Verification'
        template_path = BASE_DIR / 'templates' / 'otp_verify_email.html'
        context = {'stdEmail': email, 'otp': otp}
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

# Welcome Email after successful email verification
def send_welcome_email(student_email,stdEmail, password, stdUniqueID):
    try:
        subject = 'Welcome to EvolvingX'
        template_path = BASE_DIR / 'templates' / 'welcome_email.html'
        context = {'stdEmail': stdEmail, 'password': password, 'stdUniqueID': stdUniqueID}
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

# Team Email after sucessful team registration
def send_team_email(team_info, team_emails):
    try:
        subject = 'Team Registration Successful'
        template_path = BASE_DIR / 'templates' / 'team_email.html'
        context = {
            'teamUniqueID': team_info['teamUniqueID'],
            'teamName': team_info['teamName'],
            'teamMembers': team_info['teamMembers']
        }
        email_from = settings.EMAIL_HOST_USER
        recipient_list = team_emails

        message = render_to_string(template_path, context)

        send_mail(
            subject,
            '',
            email_from,
            recipient_list,
            html_message=message  # This line ensures the email is sent as HTML
        )

        logger.info(f"Team email sent successfully to {', '.join(team_emails)}")
        return True
    except Exception as e:
        # Log or print the exception for debugging purposes
        logger.error(f"Team email sending failed: {e}")
        return False