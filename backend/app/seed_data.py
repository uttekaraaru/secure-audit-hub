"""Populates the database with the same data the original frontend had hardcoded."""

from sqlalchemy.orm import Session

from app import models


def seed_if_empty(db: Session):
    if db.query(models.DashboardStat).count() == 0:
        db.add_all(
            [
                models.DashboardStat(title="Compliance", value="82%", color="success", order=1),
                models.DashboardStat(title="Risk Score", value="Medium", color="warning", order=2),
                models.DashboardStat(title="Documents", value="4", color="primary", order=3),
                models.DashboardStat(title="Audit Tasks", value="32", color="danger", order=4),
            ]
        )

    if db.query(models.ComplianceSlice).count() == 0:
        db.add_all(
            [
                models.ComplianceSlice(label="Compliant", value=82, color="#198754", order=1),
                models.ComplianceSlice(label="Pending", value=12, color="#ffc107", order=2),
                models.ComplianceSlice(label="Critical", value=6, color="#dc3545", order=3),
            ]
        )

    if db.query(models.AuditProgress).count() == 0:
        db.add_all(
            [
                models.AuditProgress(standard="ISO 27001", percent=82, color="#0d6efd", order=1),
                models.AuditProgress(standard="ISO 27002", percent=75, color="#20c997", order=2),
                models.AuditProgress(standard="ISO 42001", percent=68, color="#ffc107", order=3),
            ]
        )

    if db.query(models.RiskItem).count() == 0:
        db.add_all(
            [
                models.RiskItem(title="Low Risk", value="12 Systems", color="#198754", icon="🟢", description="Systems operating securely", order=1),
                models.RiskItem(title="Medium Risk", value="5 Systems", color="#ffc107", icon="🟡", description="Requires monitoring", order=2),
                models.RiskItem(title="High Risk", value="2 Systems", color="#dc3545", icon="🔴", description="Immediate action required", order=3),
                models.RiskItem(title="Open Findings", value="9 Findings", color="#0d6efd", icon="📋", description="Pending audit observations", order=4),
            ]
        )

    if db.query(models.Activity).count() == 0:
        db.add_all(
            [
                models.Activity(text="ISO 27001 Policy Updated", status="success", order=1),
                models.Activity(text="Internal Security Audit Completed", status="success", order=2),
                models.Activity(text="Risk Assessment Pending", status="warning", order=3),
                models.Activity(text="Security Documentation Reviewed", status="info", order=4),
            ]
        )

    if db.query(models.UpcomingAudit).count() == 0:
        db.add_all(
            [
                models.UpcomingAudit(title="ISO 27001 Internal Audit", order=1),
                models.UpcomingAudit(title="ISO 27002 Documentation Review", order=2),
                models.UpcomingAudit(title="ISO 42001 AI Governance Review", order=3),
                models.UpcomingAudit(title="Supplier Security Assessment", order=4),
            ]
        )

    if db.query(models.IsoClause).filter_by(standard="27001").count() == 0:
        clauses_27001 = [
            ("Clause 4", "Context of the Organization", "Understand internal and external issues affecting the ISMS."),
            ("Clause 5", "Leadership", "Top management commitment, policy and organizational roles."),
            ("Clause 6", "Planning", "Risk assessment, objectives and treatment planning."),
            ("Clause 7", "Support", "Resources, competence, awareness and documented information."),
            ("Clause 8", "Operation", "Operational planning, implementation and risk treatment."),
            ("Clause 9", "Performance Evaluation", "Monitoring, internal audits and management reviews."),
            ("Clause 10", "Improvement", "Corrective actions and continual improvement."),
        ]
        db.add_all(
            [
                models.IsoClause(standard="27001", code=code, title=title, description=desc, order=i)
                for i, (code, title, desc) in enumerate(clauses_27001, start=1)
            ]
        )

    if db.query(models.IsoClause).filter_by(standard="27002").count() == 0:
        controls_27002 = [
            ("Organizational Controls", "Policies, governance, asset management, supplier relationships and information security responsibilities."),
            ("People Controls", "Security awareness, background verification, training, disciplinary process and remote working."),
            ("Physical Controls", "Secure areas, physical access control, equipment security and environmental protection."),
            ("Technological Controls", "Access control, cryptography, malware protection, logging, backup and network security."),
        ]
        db.add_all(
            [
                models.IsoClause(standard="27002", code=None, title=title, description=desc, order=i)
                for i, (title, desc) in enumerate(controls_27002, start=1)
            ]
        )

    if db.query(models.IsoClause).filter_by(standard="42001").count() == 0:
        principles_42001 = [
            ("AI Governance", "Establish policies, roles and responsibilities for Artificial Intelligence management."),
            ("Risk Management", "Identify, assess and mitigate risks associated with AI systems."),
            ("Transparency", "Ensure AI decisions are explainable, documented and understandable."),
            ("Continuous Improvement", "Monitor AI performance and continuously improve security and compliance."),
        ]
        db.add_all(
            [
                models.IsoClause(standard="42001", code=None, title=title, description=desc, order=i)
                for i, (title, desc) in enumerate(principles_42001, start=1)
            ]
        )

    if db.query(models.AnnexControl).count() == 0:
        db.add_all(
            [
                models.AnnexControl(category="Organizational", control_count=37, order=1),
                models.AnnexControl(category="People", control_count=8, order=2),
                models.AnnexControl(category="Physical", control_count=14, order=3),
                models.AnnexControl(category="Technological", control_count=34, order=4),
                models.AnnexControl(category="Total Controls", control_count=93, order=5),
            ]
        )

    db.commit()
