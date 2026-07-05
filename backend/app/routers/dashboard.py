from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app import models, schemas
from app.database import get_db

router = APIRouter(prefix="/api/dashboard", tags=["dashboard"])


@router.get("/stats", response_model=list[schemas.DashboardStatOut])
def get_stats(db: Session = Depends(get_db)):
    return db.query(models.DashboardStat).order_by(models.DashboardStat.order).all()


@router.get("/compliance-chart", response_model=list[schemas.ComplianceSliceOut])
def get_compliance_chart(db: Session = Depends(get_db)):
    return db.query(models.ComplianceSlice).order_by(models.ComplianceSlice.order).all()


@router.get("/audit-chart", response_model=list[schemas.AuditProgressOut])
def get_audit_chart(db: Session = Depends(get_db)):
    return db.query(models.AuditProgress).order_by(models.AuditProgress.order).all()


@router.get("/risk-summary", response_model=list[schemas.RiskItemOut])
def get_risk_summary(db: Session = Depends(get_db)):
    return db.query(models.RiskItem).order_by(models.RiskItem.order).all()


@router.get("/activities", response_model=list[schemas.ActivityOut])
def get_activities(db: Session = Depends(get_db)):
    return db.query(models.Activity).order_by(models.Activity.order).all()


@router.get("/upcoming-audits", response_model=list[schemas.UpcomingAuditOut])
def get_upcoming_audits(db: Session = Depends(get_db)):
    return db.query(models.UpcomingAudit).order_by(models.UpcomingAudit.order).all()


@router.get("/full", response_model=schemas.DashboardFullOut)
def get_full_dashboard(db: Session = Depends(get_db)):
    """Single call that returns everything the Dashboard page needs."""
    return schemas.DashboardFullOut(
        stats=db.query(models.DashboardStat).order_by(models.DashboardStat.order).all(),
        compliance_chart=db.query(models.ComplianceSlice).order_by(models.ComplianceSlice.order).all(),
        audit_chart=db.query(models.AuditProgress).order_by(models.AuditProgress.order).all(),
        risk_summary=db.query(models.RiskItem).order_by(models.RiskItem.order).all(),
        recent_activities=db.query(models.Activity).order_by(models.Activity.order).all(),
        upcoming_audits=db.query(models.UpcomingAudit).order_by(models.UpcomingAudit.order).all(),
    )


@router.get("/iso/{standard}", response_model=schemas.IsoStandardOut)
def get_iso_standard(standard: str, db: Session = Depends(get_db)):
    """standard = '27001' | '27002' | '42001'"""
    clauses = (
        db.query(models.IsoClause)
        .filter(models.IsoClause.standard == standard)
        .order_by(models.IsoClause.order)
        .all()
    )
    annex = None
    if standard == "27001":
        annex = db.query(models.AnnexControl).order_by(models.AnnexControl.order).all()

    return schemas.IsoStandardOut(standard=standard, clauses=clauses, annex=annex)
