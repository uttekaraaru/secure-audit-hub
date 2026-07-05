# 🛡️ Secure Audit Hub — Backend API

FastAPI backend for the Secure Audit Hub project. Provides:

1. **Dashboard data & DB** — stats, compliance chart, audit progress chart, risk summary, activities, upcoming audits, and ISO 27001/27002/42001 clause/control data — all stored in a real database (SQLite by default) instead of hardcoded frontend arrays.
2. **Contact form** — saves every submission to the database and emails it via SMTP (replaces the frontend's EmailJS setup).
3. **AI Chatbot** — answers ISO-related questions using real Claude AI (Anthropic API) when a key is configured, with an automatic rule-based fallback (same logic as the original `ChatBot.jsx`) so it works even with zero setup, and stores full chat history.

## 📁 Structure

```
backend/
├── app/
│   ├── main.py              # FastAPI app, CORS, startup (creates tables + seeds data)
│   ├── config.py            # Settings loaded from .env
│   ├── database.py          # SQLAlchemy engine/session
│   ├── models.py            # DB tables
│   ├── schemas.py           # Request/response validation
│   ├── seed_data.py         # Populates DB with the site's original content
│   ├── routers/
│   │   ├── dashboard.py     # /api/dashboard/*
│   │   ├── contact.py       # /api/contact
│   │   └── chat.py          # /api/chat
│   └── services/
│       ├── ai_service.py    # Claude AI + rule-based fallback
│       └── email_service.py # SMTP email sending
├── requirements.txt
└── .env.example
```

## 🚀 Setup

```bash
cd backend
python3 -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate
pip install -r requirements.txt

cp .env.example .env
# edit .env — see below

uvicorn app.main:app --reload --port 8000
```

The API will be live at `http://localhost:8000`, with interactive docs at `http://localhost:8000/docs`.

On first run it automatically creates the SQLite database (`secure_audit_hub.db`) and seeds it with the same numbers your frontend already had (82% compliance, 93 Annex A controls, etc.), so nothing changes visually — it's just now coming from a real backend + DB.

## ⚙️ Configuration (`.env`)

| Variable | Purpose | Required? |
|---|---|---|
| `CORS_ORIGINS` | Comma-separated frontend URLs allowed to call this API | Yes |
| `DATABASE_URL` | DB connection string (SQLite by default; swap for Postgres/MySQL in production) | No |
| `ANTHROPIC_API_KEY` | Enables real Claude AI answers in the chatbot | No — falls back to rule-based |
| `ANTHROPIC_MODEL` | Which Claude model to use | No |
| `SMTP_HOST` / `SMTP_PORT` / `SMTP_USER` / `SMTP_PASSWORD` | Sends contact form emails | No — messages still save to DB without it |
| `CONTACT_TO_EMAIL` | Where contact form emails are sent | Yes (has a default) |

**Gmail example** (`SMTP_HOST=smtp.gmail.com`, `SMTP_PORT=587`, `SMTP_USER=you@gmail.com`) — use a 16-character [Google App Password](https://myaccount.google.com/apppasswords), not your normal Gmail password.

## 📡 API Endpoints

| Method | Path | Purpose |
|---|---|---|
| GET | `/api/dashboard/full` | Everything the Dashboard page needs, in one call |
| GET | `/api/dashboard/stats` | Top 4 summary cards |
| GET | `/api/dashboard/compliance-chart` | Doughnut chart data |
| GET | `/api/dashboard/audit-chart` | Bar chart data |
| GET | `/api/dashboard/risk-summary` | Risk cards |
| GET | `/api/dashboard/activities` | Recent activity feed |
| GET | `/api/dashboard/upcoming-audits` | Upcoming audits list |
| GET | `/api/dashboard/iso/{standard}` | `standard` = `27001`, `27002`, or `42001` — clauses + (for 27001) Annex A table |
| POST | `/api/contact` | Submit contact form → `{name, email, subject, message}` |
| GET | `/api/contact` | List submitted messages (simple admin view) |
| POST | `/api/chat` | Chatbot → `{session_id, message}` → `{reply, source}` |
| GET | `/api/chat/history/{session_id}` | Full conversation history for a session |

## 🔌 Connecting your existing React frontend

Your frontend currently reads hardcoded arrays from `src/data/*.js` and component-level constants. To use this backend instead:

1. Add to your frontend `.env`: `VITE_API_URL=http://localhost:8000`
2. Replace the hardcoded data in `Dashboard.jsx`, `ComplianceChart.jsx`, `AuditChart.jsx`, `RiskSummary.jsx` with a `fetch(`${import.meta.env.VITE_API_URL}/api/dashboard/full`)` call in a `useEffect`.
3. Replace the EmailJS call in `Contact.jsx` with `fetch(`${import.meta.env.VITE_API_URL}/api/contact`, { method: "POST", body: JSON.stringify(formData) })`.
4. Replace the `getReply()` function in `ChatBot.jsx` with a call to `POST /api/chat` (generate a random `session_id` with `crypto.randomUUID()` once per chat session and reuse it).

Happy to make these exact frontend edits for you if you'd like — just say the word.

## 🧪 Tested

All endpoints (`/api/dashboard/full`, `/api/dashboard/iso/27001`, `/api/dashboard/iso/42001`, `/api/contact`, `/api/chat`, `/api/chat/history/{id}`) were run and verified locally before delivery.
