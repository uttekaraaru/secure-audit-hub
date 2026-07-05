function RiskSummary() {
  const risks = [
    {
      title: "Low Risk",
      value: "12 Systems",
      color: "#198754",
      icon: "🟢",
    },
    {
      title: "Medium Risk",
      value: "5 Systems",
      color: "#ffc107",
      icon: "🟡",
    },
    {
      title: "High Risk",
      value: "2 Systems",
      color: "#dc3545",
      icon: "🔴",
    },
    {
      title: "Open Findings",
      value: "9 Findings",
      color: "#0d6efd",
      icon: "📋",
    },
  ];

  return (
    <div className="row mt-4">

      {risks.map((risk, index) => (

        <div className="col-md-3 mb-4" key={index}>

          <div
            className="dashboard-card text-center"
            style={{
              borderTop: `4px solid ${risk.color}`,
              transition: "0.3s",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                fontSize: "2.5rem",
                marginBottom: "10px",
              }}
            >
              {risk.icon}
            </div>

            <h5>{risk.title}</h5>

            <h3
              style={{
                color: risk.color,
                fontWeight: "bold",
              }}
            >
              {risk.value}
            </h3>

          </div>

        </div>

      ))}

    </div>
  );
}

export default RiskSummary;