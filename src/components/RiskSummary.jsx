function RiskSummary() {
  const risks = [
    {
      title: "Low Risk",
      value: "12 Systems",
      color: "#198754",
      icon: "🟢",
      desc: "Systems operating securely",
    },
    {
      title: "Medium Risk",
      value: "5 Systems",
      color: "#ffc107",
      icon: "🟡",
      desc: "Requires monitoring",
    },
    {
      title: "High Risk",
      value: "2 Systems",
      color: "#dc3545",
      icon: "🔴",
      desc: "Immediate action required",
    },
    {
      title: "Open Findings",
      value: "9 Findings",
      color: "#0d6efd",
      icon: "📋",
      desc: "Pending audit observations",
    },
  ];

  return (
    <>
      <h3 className="text-white mt-5 mb-4">
        🚨 Risk Summary
      </h3>

      <div className="row">

        {risks.map((risk, index) => (

          <div className="col-lg-3 col-md-6 mb-4" key={index}>

            <div
              className="dashboard-card text-center"
              style={{
                borderTop: `5px solid ${risk.color}`,
              }}
            >

              <div
                style={{
                  fontSize: "2.8rem",
                  marginBottom: "15px",
                }}
              >
                {risk.icon}
              </div>

              <h5 className="fw-bold">
                {risk.title}
              </h5>

              <h2
                className="fw-bold"
                style={{
                  color: risk.color,
                }}
              >
                {risk.value}
              </h2>

              <small className="text-light">
                {risk.desc}
              </small>

            </div>

          </div>

        ))}

      </div>
    </>
  );
}

export default RiskSummary;