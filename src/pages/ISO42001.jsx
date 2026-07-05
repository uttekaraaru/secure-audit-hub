function ISO42001() {
  const principles = [
    {
      title: "AI Governance",
      desc: "Establish policies, roles and responsibilities for Artificial Intelligence management."
    },
    {
      title: "Risk Management",
      desc: "Identify, assess and mitigate risks associated with AI systems."
    },
    {
      title: "Transparency",
      desc: "Ensure AI decisions are explainable, documented and understandable."
    },
    {
      title: "Continuous Improvement",
      desc: "Monitor AI performance and continuously improve security and compliance."
    }
  ];

  return (
    <div className="container py-5">

      <h1 className="fw-bold mb-3">
        ISO 42001
      </h1>

      <p className="lead text-secondary mb-5">
        ISO/IEC 42001 is the international standard for Artificial Intelligence
        Management Systems (AIMS). It helps organizations manage AI responsibly,
        securely and ethically.
      </p>

      <div className="row">

        {principles.map((item, index) => (

          <div className="col-md-6 mb-4" key={index}>

            <div
              className="card h-100 shadow border-0"
              style={{ borderRadius: "15px" }}
            >

              <div className="card-body">

                <h4 className="text-primary">
                  {item.title}
                </h4>

                <p className="mt-3 text-muted">
                  {item.desc}
                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

      <div className="card shadow border-0 mt-5">

        <div className="card-body">

          <h3 className="mb-4">
            AI Management Lifecycle
          </h3>

          <table className="table table-hover">

            <thead className="table-dark">
              <tr>
                <th>Phase</th>
                <th>Description</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>Plan</td>
                <td>Define AI objectives and governance.</td>
              </tr>

              <tr>
                <td>Develop</td>
                <td>Build AI models securely and ethically.</td>
              </tr>

              <tr>
                <td>Deploy</td>
                <td>Implement AI with monitoring and documentation.</td>
              </tr>

              <tr>
                <td>Monitor</td>
                <td>Track performance, bias and compliance.</td>
              </tr>

              <tr>
                <td>Improve</td>
                <td>Continuously enhance AI systems.</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default ISO42001;