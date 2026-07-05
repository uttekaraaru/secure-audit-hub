from datetime import datetime, timezone

from sqlalchemy import Column, DateTime, Integer, String, Text

from app.database import Base


def utcnow():
    return datetime.now(timezone.utc)


class DashboardStat(Base):
    """Top summary cards: Compliance, Risk Score, Documents, Audit Tasks."""

    __tablename__ = "dashboard_stats"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(100), nullable=False)
    value = Column(String(50), nullable=False)
    color = Column(String(30), nullable=False)  # bootstrap color: success/warning/primary/danger
    order = Column(Integer, default=0)


class ComplianceSlice(Base):
    """Doughnut chart slices: Compliant / Pending / Critical."""

    __tablename__ = "compliance_slices"

    id = Column(Integer, primary_key=True, index=True)
    label = Column(String(50), nullable=False)
    value = Column(Integer, nullable=False)  # percentage
    color = Column(String(20), nullable=False)  # hex color
    order = Column(Integer, default=0)


class AuditProgress(Base):
    """Bar chart: audit progress % per ISO standard."""

    __tablename__ = "audit_progress"

    id = Column(Integer, primary_key=True, index=True)
    standard = Column(String(50), nullable=False)  # e.g. "ISO 27001"
    percent = Column(Integer, nullable=False)
    color = Column(String(20), nullable=False)
    order = Column(Integer, default=0)


class RiskItem(Base):
    """Risk summary cards: Low/Medium/High risk, Open findings."""

    __tablename__ = "risk_items"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(50), nullable=False)
    value = Column(String(50), nullable=False)
    color = Column(String(20), nullable=False)
    icon = Column(String(10), nullable=False)
    description = Column(String(200), nullable=False)
    order = Column(Integer, default=0)


class Activity(Base):
    """Recent activity feed on the dashboard."""

    __tablename__ = "activities"

    id = Column(Integer, primary_key=True, index=True)
    text = Column(String(200), nullable=False)
    status = Column(String(20), default="info")  # success/warning/info
    created_at = Column(DateTime, default=utcnow)
    order = Column(Integer, default=0)


class UpcomingAudit(Base):
    """Upcoming audits list on the dashboard."""

    __tablename__ = "upcoming_audits"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(200), nullable=False)
    order = Column(Integer, default=0)


class IsoClause(Base):
    """ISO 27001 clauses / ISO 27002 control categories / ISO 42001 principles."""

    __tablename__ = "iso_clauses"

    id = Column(Integer, primary_key=True, index=True)
    standard = Column(String(20), nullable=False, index=True)  # "27001" | "27002" | "42001"
    code = Column(String(50), nullable=True)  # e.g. "Clause 4" (nullable for 27002/42001)
    title = Column(String(200), nullable=False)
    description = Column(Text, nullable=False)
    order = Column(Integer, default=0)


class AnnexControl(Base):
    """Annex A control category summary table (Organizational/People/Physical/Technological)."""

    __tablename__ = "annex_controls"

    id = Column(Integer, primary_key=True, index=True)
    category = Column(String(50), nullable=False)
    control_count = Column(Integer, nullable=False)
    order = Column(Integer, default=0)


class ContactMessage(Base):
    """Messages submitted through the Contact page."""

    __tablename__ = "contact_messages"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(150), nullable=False)
    email = Column(String(150), nullable=False)
    subject = Column(String(200), nullable=False)
    message = Column(Text, nullable=False)
    email_sent = Column(Integer, default=0)  # 0/1 flag
    created_at = Column(DateTime, default=utcnow)


class ChatMessage(Base):
    """Chatbot conversation history, grouped by session_id."""

    __tablename__ = "chat_messages"

    id = Column(Integer, primary_key=True, index=True)
    session_id = Column(String(100), nullable=False, index=True)
    sender = Column(String(10), nullable=False)  # "user" | "bot"
    text = Column(Text, nullable=False)
    created_at = Column(DateTime, default=utcnow)
