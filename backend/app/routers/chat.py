from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app import models, schemas
from app.database import get_db
from app.services.ai_service import get_ai_reply

router = APIRouter(prefix="/api/chat", tags=["chat"])


@router.post("", response_model=schemas.ChatOut)
def chat(payload: schemas.ChatIn, db: Session = Depends(get_db)):
    reply, source = get_ai_reply(payload.message)

    db.add(models.ChatMessage(session_id=payload.session_id, sender="user", text=payload.message))
    db.add(models.ChatMessage(session_id=payload.session_id, sender="bot", text=reply))
    db.commit()

    return schemas.ChatOut(reply=reply, source=source)


@router.get("/history/{session_id}", response_model=list[schemas.ChatHistoryItem])
def chat_history(session_id: str, db: Session = Depends(get_db)):
    messages = (
        db.query(models.ChatMessage)
        .filter(models.ChatMessage.session_id == session_id)
        .order_by(models.ChatMessage.created_at)
        .all()
    )
    return messages
