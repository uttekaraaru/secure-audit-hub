from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app import models, schemas
from app.database import get_db
from app.services.email_service import send_contact_email

router = APIRouter(prefix="/api/contact", tags=["contact"])


@router.post("", response_model=schemas.ContactMessageOut)
def submit_contact_form(payload: schemas.ContactMessageIn, db: Session = Depends(get_db)):
    email_sent = False
    try:
        email_sent = send_contact_email(
            name=payload.name,
            email=payload.email,
            subject=payload.subject,
            message=payload.message,
        )
    except Exception as exc:
        # Message is still saved even if the email fails to send.
        email_sent = False

    entry = models.ContactMessage(
        name=payload.name,
        email=payload.email,
        subject=payload.subject,
        message=payload.message,
        email_sent=1 if email_sent else 0,
    )
    db.add(entry)
    db.commit()
    db.refresh(entry)

    return schemas.ContactMessageOut(
        id=entry.id,
        email_sent=bool(entry.email_sent),
        created_at=entry.created_at,
    )


@router.get("", response_model=list[schemas.ContactMessageOut])
def list_contact_messages(db: Session = Depends(get_db)):
    """Simple admin endpoint to view submitted messages."""
    messages = db.query(models.ContactMessage).order_by(models.ContactMessage.created_at.desc()).all()
    return [
        schemas.ContactMessageOut(id=m.id, email_sent=bool(m.email_sent), created_at=m.created_at)
        for m in messages
    ]
