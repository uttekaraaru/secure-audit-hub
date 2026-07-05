import { Link } from "react-router-dom";

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

          {/* About */}
          <div className="col-lg-4 mb-4">

            <h3 className="fw-bold">
              🔐 Secure Audit Hub
            </h3>

            <p className="text-light">
              A modern platform for learning, auditing and managing
              ISO 27001, ISO 27002 and ISO 42001 standards.
            </p>

          </div>

          {/* Quick Links */}
          <div className="col-lg-4 mb-4">

            <h5 className="fw-bold">Quick Links</h5>

            <ul className="list-unstyled">

              <li className="mb-2">
                <Link
                  to="/"
                  className="text-white text-decoration-none"
                >
                  Home
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  to="/dashboard"
                  className="text-white text-decoration-none"
                >
                  Dashboard
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  to="/iso27001"
                  className="text-white text-decoration-none"
                >
                  ISO 27001
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  to="/iso27002"
                  className="text-white text-decoration-none"
                >
                  ISO 27002
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  to="/iso42001"
                  className="text-white text-decoration-none"
                >
                  ISO 42001
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  to="/resources"
                  className="text-white text-decoration-none"
                >
                  Resources
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-white text-decoration-none"
                >
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* Contact */}
          <div className="col-lg-4 mb-4">

            <h5 className="fw-bold">
              Contact
            </h5>

            <p>
              <i className="bi bi-envelope-fill me-2"></i>

              <a
                href="mailto:63aaradhyauttekar@gmail.com"
                className="text-white text-decoration-none"
              >
                63aaradhyauttekar@gmail.com
              </a>
            </p>

            <p>
              <i className="bi bi-shield-lock-fill me-2"></i>
              ISO Compliance Platform
            </p>

            <div className="mt-3">

              {/* GitHub */}
              <a
                href="https://github.com/uttekaraaru"
                target="_blank"
                rel="noreferrer"
                className="text-white me-3"
              >
                <i
                  className="bi bi-github"
                  style={{ fontSize: "1.6rem" }}
                ></i>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/aaradhya-uttekar07028/"
                target="_blank"
                rel="noreferrer"
                className="text-white me-3"
              >
                <i
                  className="bi bi-linkedin"
                  style={{ fontSize: "1.6rem" }}
                ></i>
              </a>

              {/* Live Website */}
              <a
                href="https://secure-audit-hub.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="text-white"
              >
                <i
                  className="bi bi-globe"
                  style={{ fontSize: "1.6rem" }}
                ></i>
              </a>

            </div>

          </div>

        </div>

        <hr className="border-secondary" />

        <div className="text-center">
          © 2026 Secure Audit Hub • Developed by <strong>Aaradhya Uttekar</strong>
        </div>

      </div>
    </footer>
  );
}

export default Footer;