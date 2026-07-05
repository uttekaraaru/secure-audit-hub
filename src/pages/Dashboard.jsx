import "../styles/dashboard.css";
import ComplianceChart from "../components/ComplianceChart";
import AuditChart from "../components/AuditChart";
import RiskSummary from "../components/RiskSummary";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="container py-5">

        <h1 className="fw-bold mb-5">Dashboard</h1>

        {/* Top Cards */}
        <div className="row">

          <div className="col-md-3 mb-4">
            <div className="dashboard-card">
              <h5>Compliance</h5>
              <h2>82%</h2>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="dashboard-card">
              <h5>Risk Score</h5>
              <h2>Medium</h2>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="dashboard-card">
              <h5>Documents</h5>
              <h2>15</h2>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="dashboard-card">
              <h5>Audit Tasks</h5>
              <h2>32</h2>
            </div>
          </div>

        </div>

        {/* Compliance Progress */}
        <div className="dashboard-card mt-4">

          <h4>Compliance Progress</h4>

          <div
            className="progress mt-4"
            style={{ height: "25px" }}
          >
            <div
              className="progress-bar bg-success"
              style={{ width: "82%" }}
            >
              82%
            </div>
          </div>

        </div>

        {/* Recent Activities & Upcoming Audits */}
        <div className="row mt-5">

          <div className="col-lg-6 mb-4">

            <div className="dashboard-card">

              <h4>Recent Activities</h4>

              <ul className="mt-4">
                <li>✅ ISO 27001 Policy Updated</li>
                <li>✅ Internal Audit Completed</li>
                <li>⚠ Risk Assessment Pending</li>
              </ul>

            </div>

          </div>

          <div className="col-lg-6 mb-4">

            <div className="dashboard-card">

              <h4>Upcoming Audits</h4>

              <ul className="mt-4">
                <li>📅 ISO 27001 Internal Audit</li>
                <li>📅 ISO 42001 AI Review</li>
                <li>📅 ISO 27002 Documentation Review</li>
              </ul>

            </div>

          </div>

        </div>

        {/* Charts */}
        <div className="row mt-4">

          <div className="col-lg-6 mb-4">
            <ComplianceChart />
          </div>

          <div className="col-lg-6 mb-4">
            <AuditChart />
          </div>

        </div>

        {/* Risk Summary */}
        <RiskSummary />

      </div>
    </div>
  );
}

export default Dashboard;