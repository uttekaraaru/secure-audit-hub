function Features() {
  const features = [
    {
      icon: "bi-shield-check",
      title: "ISO Compliance",
      text: "Manage ISO 27001, ISO 27002 and ISO 42001 standards."
    },
    {
      icon: "bi-clipboard-check",
      title: "Audit Checklist",
      text: "Track compliance using structured audit checklists."
    },
    {
      icon: "bi-file-earmark-lock",
      title: "Documentation",
      text: "Store policies, procedures and audit evidence securely."
    },
    {
      icon: "bi-bar-chart-line",
      title: "Dashboard",
      text: "Visualize compliance progress using charts and reports."
    }
  ];

  return (
    <section className="container py-5">

      <h2 className="text-center fw-bold text-white mb-5">
        Platform Features
      </h2>

      <div className="row">

        {features.map((feature, index) => (

          <div className="col-md-6 col-lg-3 mb-4" key={index}>

            <div
              className="card h-100 border-0 shadow-lg"
              style={{
                background: "#18324d",
                borderRadius: "18px"
              }}
            >

              <div className="card-body text-center p-4">

                <i
                  className={`bi ${feature.icon}`}
                  style={{
                    fontSize: "3.2rem",
                    color: "#0d6efd"
                  }}
                ></i>

                <h5 className="mt-4 text-white">
                  {feature.title}
                </h5>

                <p className="text-light">
                  {feature.text}
                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Features;