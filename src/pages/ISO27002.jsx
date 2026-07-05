import "../styles/iso.css";

function ISO27002() {
  const controls = [
    {
      title: "Organizational Controls",
      desc: "Policies, governance, asset management, supplier relationships and information security responsibilities."
    },
    {
      title: "People Controls",
      desc: "Security awareness, background verification, training, disciplinary process and remote working."
    },
    {
      title: "Physical Controls",
      desc: "Secure areas, physical access control, equipment security and environmental protection."
    },
    {
      title: "Technological Controls",
      desc: "Access control, cryptography, malware protection, logging, backup and network security."
    }
  ];

  return (
    <div className="container py-5">

      <h1 className="fw-bold text-white mb-3">
        ISO 27002
      </h1>

      <p className="lead text-light mb-5">
        ISO 27002 provides guidance for implementing information security
        controls based on ISO 27001 requirements.
      </p>

      <div className="row">

        {controls.map((item, index) => (

          <div className="col-md-6 mb-4" key={index}>

            <div className="card h-100 shadow iso-card">

              <div className="card-body">

                <h4 className="text-info">
                  {item.title}
                </h4>

                <p className="mt-3">
                  {item.desc}
                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

      <div className="card shadow mt-5 iso-table">

        <div className="card-body">

          <h3 className="mb-4">
            Control Domains
          </h3>

          <table className="table table-dark table-hover">

            <thead>

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

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default ISO27002;