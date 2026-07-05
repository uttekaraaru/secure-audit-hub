function Footer() {
  return (
    <footer
      className="mt-5"
      style={{
        background: "#071A2D",
        color: "white",
      }}
    >
      <div className="container py-5">

        <div className="row">

          <div className="col-lg-4 mb-4">

            <h3 className="fw-bold">
              🔐 Secure Audit Hub
            </h3>

            <p className="text-light">
              A modern platform for learning, auditing and managing
              ISO 27001, ISO 27002 and ISO 42001 standards.
            </p>

          </div>

          <div className="col-lg-4 mb-4">

            <h5 className="fw-bold">
              Quick Links
            </h5>

            <ul className="list-unstyled">

              <li className="mb-2">
                Home
              </li>

              <li className="mb-2">
                Dashboard
              </li>

              <li className="mb-2">
                Resources
              </li>

              <li>
                Contact
              </li>

            </ul>

          </div>

          <div className="col-lg-4 mb-4">

            <h5 className="fw-bold">
              Contact
            </h5>

            <p>
              <i className="bi bi-envelope-fill me-2"></i>
              support@secureaudithub.com
            </p>

            <p>
              <i className="bi bi-shield-lock-fill me-2"></i>
              ISO Compliance Platform
            </p>

            <div className="mt-3">

              <i
                className="bi bi-github me-3"
                style={{ fontSize: "1.5rem", cursor: "pointer" }}
              ></i>

              <i
                className="bi bi-linkedin me-3"
                style={{ fontSize: "1.5rem", cursor: "pointer" }}
              ></i>

              <i
                className="bi bi-globe"
                style={{ fontSize: "1.5rem", cursor: "pointer" }}
              ></i>

            </div>

          </div>

        </div>

        <hr className="border-secondary" />

        <div className="text-center">

          © 2026 Secure Audit Hub • All Rights Reserved

        </div>

      </div>
    </footer>
  );
}

export default Footer;