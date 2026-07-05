"""
Contact form email service.

If SMTP settings are configured in .env, the message is emailed to CONTACT_TO_EMAIL.
If not configured, the message is simply saved to the database (see routers/contact.py)
and this function is a no-op that returns False, so the API still works with zero setup.
"""

import smtplib
from email.mime.text import MIMEText

from app.config import settings


def send_contact_email(name: str, email: str, subject: str, message: str) -> bool:
    if not (settings.smtp_host and settings.smtp_user and settings.smtp_password):
        return False

    body = f"New message from Secure Audit Hub contact form\n\n" f"From: {name} <{email}>\n" f"Subject: {subject}\n\n" f"{message}"

    msg = MIMEText(body, "plain", "utf-8")
    msg["Subject"] = f"[Secure Audit Hub] {subject}"
    msg["From"] = settings.contact_from_email or settings.smtp_user
    msg["To"] = settings.contact_to_email
    msg["Reply-To"] = email

    with smtplib.SMTP(settings.smtp_host, settings.smtp_port) as server:
        server.starttls()
        server.login(settings.smtp_user, settings.smtp_password)
        server.sendmail(msg["From"], [settings.contact_to_email], msg.as_string())

    return True
