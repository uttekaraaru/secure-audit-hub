function ISO27001() {
  const clauses = [
    {
      no: "Clause 4",
      title: "Context of the Organization",
      desc: "Understand internal and external issues affecting the ISMS."
    },
    {
      no: "Clause 5",
      title: "Leadership",
      desc: "Top management commitment, policy and organizational roles."
    },
    {
      no: "Clause 6",
      title: "Planning",
      desc: "Risk assessment, objectives and treatment planning."
    },
    {
      no: "Clause 7",
      title: "Support",
      desc: "Resources, competence, awareness and documented information."
    },
    {
      no: "Clause 8",
      title: "Operation",
      desc: "Operational planning, implementation and risk treatment."
    },
    {
      no: "Clause 9",
      title: "Performance Evaluation",
      desc: "Monitoring, internal audits and management reviews."
    },
    {
      no: "Clause 10",
      title: "Improvement",
      desc: "Corrective actions and continual improvement."
    }
  ];

  return (
    <div className="container py-5">

      <h1 className="fw-bold mb-3">
        ISO 27001
      </h1>

      <p className="lead text-secondary mb-5">
        ISO/IEC 27001 is the international standard for Information Security
        Management Systems (ISMS). It helps organizations protect confidential,
        integral and available information through a structured security framework.
      </p>

      <div className="row">

        {clauses.map((item, index) => (

          <div className="col-md-6 col-lg-4 mb-4" key={index}>

            <div
              className="card h-100 shadow border-0"
              style={{ borderRadius: "15px" }}
            >

              <div className="card-body">

                <span className="badge bg-primary mb-3">
                  {item.no}
                </span>

                <h5>{item.title}</h5>

                <p className="text-muted mt-3">
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
            Annex A Control Summary
          </h3>

          <table className="table table-striped table-hover">

            <thead className="table-dark">

              <tr>
                <th>Category</th>
                <th>Controls</th>
              </tr>

            </thead>

            <tbody>

              <tr>
                <td>Organizational</td>
                <td>37</td>
              </tr>

              <tr>
                <td>People</td>
                <td>8</td>
              </tr>

              <tr>
                <td>Physical</td>
                <td>14</td>
              </tr>

              <tr>
                <td>Technological</td>
                <td>34</td>
              </tr>

              <tr className="table-success fw-bold">
                <td>Total Controls</td>
                <td>93</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default ISO27001;