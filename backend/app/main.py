from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.cors import CORSMiddleware

from app.config import settings
from app.database import Base, SessionLocal, engine
from app.routers import chat, contact, dashboard
from app.seed_data import seed_if_empty

app = FastAPI(
    title="Secure Audit Hub API",
    description="Backend for the Secure Audit Hub ISO 27001/27002/42001 platform: "
    "dashboard data, contact form, and AI chatbot.",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origin_list,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
def on_startup():
    Base.metadata.create_all(bind=engine)
    db = SessionLocal()
    try:
        seed_if_empty(db)
    finally:
        db.close()


@app.get("/")
def root():
    return {"status": "ok", "service": "secure-audit-hub-api"}


@app.get("/api/health")
def health():
    return {"status": "healthy"}


app.include_router(dashboard.router)
app.include_router(contact.router)
app.include_router(chat.router)
