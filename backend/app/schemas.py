from datetime import datetime

from pydantic import BaseModel, EmailStr, Field


# ---------- Dashboard ----------

class DashboardStatOut(BaseModel):
    id: int
    title: str
    value: str
    color: str

    class Config:
        from_attributes = True


class ComplianceSliceOut(BaseModel):
    label: str
    value: int
    color: str

    class Config:
        from_attributes = True


class AuditProgressOut(BaseModel):
    standard: str
    percent: int
    color: str

    class Config:
        from_attributes = True


class RiskItemOut(BaseModel):
    title: str
    value: str
    color: str
    icon: str
    description: str

    class Config:
        from_attributes = True


class ActivityOut(BaseModel):
    text: str
    status: str

    class Config:
        from_attributes = True


class UpcomingAuditOut(BaseModel):
    title: str

    class Config:
        from_attributes = True


class IsoClauseOut(BaseModel):
    code: str | None
    title: str
    description: str

    class Config:
        from_attributes = True


class AnnexControlOut(BaseModel):
    category: str
    control_count: int

    class Config:
        from_attributes = True


class IsoStandardOut(BaseModel):
    standard: str
    clauses: list[IsoClauseOut]
    annex: list[AnnexControlOut] | None = None


class DashboardFullOut(BaseModel):
    stats: list[DashboardStatOut]
    compliance_chart: list[ComplianceSliceOut]
    audit_chart: list[AuditProgressOut]
    risk_summary: list[RiskItemOut]
    recent_activities: list[ActivityOut]
    upcoming_audits: list[UpcomingAuditOut]


# ---------- Contact ----------

class ContactMessageIn(BaseModel):
    name: str = Field(min_length=2, max_length=150)
    email: EmailStr
    subject: str = Field(min_length=2, max_length=200)
    message: str = Field(min_length=5, max_length=5000)


class ContactMessageOut(BaseModel):
    id: int
    email_sent: bool
    created_at: datetime

    class Config:
        from_attributes = True


# ---------- Chat ----------

class ChatIn(BaseModel):
    session_id: str = Field(min_length=1, max_length=100)
    message: str = Field(min_length=1, max_length=2000)


class ChatOut(BaseModel):
    reply: str
    source: str  # "ai" | "rule-based"


class ChatHistoryItem(BaseModel):
    sender: str
    text: str
    created_at: datetime

    class Config:
        from_attributes = True
