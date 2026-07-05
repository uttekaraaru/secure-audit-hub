import { useEffect, useState } from "react";
import "../styles/dashboard.css";
import ComplianceChart from "../components/ComplianceChart";
import AuditChart from "../components/AuditChart";
import RiskSummary from "../components/RiskSummary";
import { getDashboard } from "../services/api";

const activityIcon = {
  success: "✅",
  warning: "⚠",
  info: "📄",
};

const activityClass = {
  success: "text-white",
  warning: "text-warning",
  info: "text-info",
};

function Dashboard() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    getDashboard()
      .then(setData)
      .catch(() => setError(true));
  }, []);

  const statSubtitle = {
    Compliance: "Current Organization Score",
    "Risk Score": "Overall Security Risk Rating",
    Documents: "Published Compliance Documents",
    "Audit Tasks": "Total Tasks Tracked",
  };

  // Fallback values (used while loading, or if the backend isn't reachable)
  const stats = data?.stats ?? [
    { id: 1, title: "Compliance", value: "82%", color: "success" },
    { id: 2, title: "Risk Score", value: "Medium", color: "warning" },
    { id: 3, title: "Documents", value: "4", color: "primary" },
    { id: 4, title: "Audit Tasks", value: "32", color: "danger" },
  ];
  const compliancePercent =
    data?.compliance_chart?.[0]?.value ?? 82;
  const activities = data?.recent_activities ?? [
    { text: "ISO 27001 Policy Updated", status: "success" },
    { text: "Internal Security Audit Completed", status: "success" },
    { text: "Risk Assessment Pending", status: "warning" },
    { text: "Security Documentation Reviewed", status: "info" },
  ];
  const upcomingAudits = data?.upcoming_audits ?? [
    { title: "ISO 27001 Internal Audit" },
    { title: "ISO 27002 Documentation Review" },
    { title: "ISO 42001 AI Governance Review" },
    { title: "Supplier Security Assessment" },
  ];

  return (
    <div className="dashboard">
      <div className="container py-5">

        {/* Header */}
        <div className="mb-5">
          <h1 className="fw-bold text-white">
            📊 Secure Audit Dashboard
          </h1>

          <p className="text-light">
            Monitor ISO compliance, audit activities, risk posture and security
            metrics from one centralized dashboard.
          </p>

          {error && (
            <p className="text-warning small">
              ⚠ Could not reach the backend API — showing default values. Make sure the
              backend is running (see backend/README.md) and VITE_API_URL is set correctly.
            </p>
          )}
        </div>

        {/* Statistics Cards */}
        <div className="row">

          <div className="col-lg-3 col-md-6 mb-4">
            <div className="dashboard-card">
              <h6 className="text-info">ISO Standards</h6>
              <h2 className="fw-bold">3</h2>
              <small>ISO 27001 • ISO 27002 • ISO 42001</small>
            </div>
          </div>

          {stats.map((stat) => (
            <div className="col-lg-3 col-md-6 mb-4" key={stat.id ?? stat.title}>
              <div className="dashboard-card">
                <h6 className={`text-${stat.color}`}>{stat.title}</h6>
                <h2 className="fw-bold">{stat.value}</h2>
                <small>{statSubtitle[stat.title] ?? ""}</small>
              </div>
            </div>
          ))}

        </div>

        {/* Compliance Progress */}
        <div className="dashboard-card mt-2">

          <div className="d-flex justify-content-between align-items-center">

            <h4 className="mb-0">
              Compliance Progress
            </h4>

            <span className="badge bg-success">
              {compliancePercent}%
            </span>

          </div>

          <div
            className="progress mt-4"
            style={{ height: "22px" }}
          >

            <div
              className="progress-bar progress-bar-striped progress-bar-animated bg-success"
              style={{ width: `${compliancePercent}%` }}
            >
              {compliancePercent}%
            </div>

          </div>

        </div>

        {/* Activity + Audit */}
        <div className="row mt-5">

          <div className="col-lg-6 mb-4">

            <div className="dashboard-card h-100">

              <h4 className="mb-4">
                📋 Recent Activities
              </h4>

              <ul className="list-group list-group-flush">

                {activities.map((activity, index) => (
                  <li
                    key={index}
                    className={`list-group-item bg-transparent border-secondary ${activityClass[activity.status] ?? "text-white"}`}
                  >
                    {activityIcon[activity.status] ?? "•"} {activity.text}
                  </li>
                ))}

              </ul>

            </div>

          </div>

          <div className="col-lg-6 mb-4">

            <div className="dashboard-card h-100">

              <h4 className="mb-4">
                📅 Upcoming Audits
              </h4>

              <ul className="list-group list-group-flush">

                {upcomingAudits.map((audit, index) => (
                  <li
                    key={index}
                    className="list-group-item bg-transparent text-white border-secondary"
                  >
                    {audit.title}
                  </li>
                ))}

              </ul>

            </div>

          </div>

        </div>

        {/* Charts */}
        <div className="row mt-4">

          <div className="col-lg-6 mb-4">
            <ComplianceChart slices={data?.compliance_chart} />
          </div>

          <div className="col-lg-6 mb-4">
            <AuditChart progress={data?.audit_chart} />
          </div>

        </div>

        {/* Risk Summary */}
        <div className="mt-4">
          <RiskSummary items={data?.risk_summary} />
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
