import "../styles/dashboard.css";
import ComplianceChart from "../components/ComplianceChart";
import AuditChart from "../components/AuditChart";
import RiskSummary from "../components/RiskSummary";

function Dashboard() {
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

          <div className="col-lg-3 col-md-6 mb-4">
            <div className="dashboard-card">
              <h6 className="text-success">Compliance</h6>
              <h2 className="fw-bold">82%</h2>
              <small>Current Organization Score</small>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <div className="dashboard-card">
              <h6 className="text-warning">Security Controls</h6>
              <h2 className="fw-bold">93</h2>
              <small>Annex A Controls</small>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <div className="dashboard-card">
              <h6 className="text-danger">Risk Level</h6>
              <h2 className="fw-bold">Medium</h2>
              <small>Requires Continuous Monitoring</small>
            </div>
          </div>

        </div>

        {/* Compliance Progress */}
        <div className="dashboard-card mt-2">

          <div className="d-flex justify-content-between align-items-center">

            <h4 className="mb-0">
              Compliance Progress
            </h4>

            <span className="badge bg-success">
              82%
            </span>

          </div>

          <div
            className="progress mt-4"
            style={{ height: "22px" }}
          >

            <div
              className="progress-bar progress-bar-striped progress-bar-animated bg-success"
              style={{ width: "82%" }}
            >
              82%
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

                <li className="list-group-item bg-transparent text-white border-secondary">
                  ✅ ISO 27001 Policy Updated
                </li>

                <li className="list-group-item bg-transparent text-white border-secondary">
                  ✅ Internal Security Audit Completed
                </li>

                <li className="list-group-item bg-transparent text-warning border-secondary">
                  ⚠ Risk Assessment Pending
                </li>

                <li className="list-group-item bg-transparent text-info border-secondary">
                  📄 Security Documentation Reviewed
                </li>

              </ul>

            </div>

          </div>

          <div className="col-lg-6 mb-4">

            <div className="dashboard-card h-100">

              <h4 className="mb-4">
                📅 Upcoming Audits
              </h4>

              <ul className="list-group list-group-flush">

                <li className="list-group-item bg-transparent text-white border-secondary">
                  ISO 27001 Internal Audit
                </li>

                <li className="list-group-item bg-transparent text-white border-secondary">
                  ISO 27002 Documentation Review
                </li>

                <li className="list-group-item bg-transparent text-white border-secondary">
                  ISO 42001 AI Governance Review
                </li>

                <li className="list-group-item bg-transparent text-white border-secondary">
                  Supplier Security Assessment
                </li>

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
        <div className="mt-4">
          <RiskSummary />
        </div>

      </div>
    </div>
  );
}

export default Dashboard;