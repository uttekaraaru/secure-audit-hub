import hero from "../assets/hero.png";
import CountUp from "react-countup";
import "../styles/home.css";

import Features from "../components/Features";
import ISOStandards from "../components/ISOStandards";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center min-vh-100">

            {/* Left Content */}
            <div
              className="col-lg-6"
              data-aos="fade-right"
            >
              <span className="badge bg-primary mb-3">
                ISO Compliance Platform
              </span>

              <h1 className="display-3 fw-bold">
                Secure Audit Hub
              </h1>

              <p className="lead mt-4">
                A centralized platform to learn, manage and audit
                ISO 27001, ISO 27002 and ISO 42001 standards.
              </p>

              <div className="mt-4">
                <button className="btn btn-primary btn-lg me-3">
                  Explore Standards
                </button>

                <button className="btn btn-outline-light btn-lg">
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div
              className="col-lg-6 text-center"
              data-aos="fade-left"
            >
              <img
                src={hero}
                alt="Cyber Security"
                className="img-fluid hero-image"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Features */}
      <div data-aos="fade-up">
        <Features />
      </div>

      {/* ISO Standards */}
      <div data-aos="fade-up">
        <ISOStandards />
      </div>

      {/* Statistics */}
      <section
        className="stats-section py-5"
        data-aos="zoom-in"
      >
        <div className="container">

          <h2 className="text-center fw-bold mb-5">
            Platform Highlights
          </h2>

          <div className="row text-center">

            <div className="col-md-3 mb-4">
              <div className="stat-box">
                <h2 className="text-primary fw-bold">
  <CountUp end={4} duration={2} />
</h2>
                <CountUp end={93} duration={2} />
                </h2>
                <p className="mb-0">
                  ISO 27001 Controls
                </p>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="stat-box">
                <h2 className="text-primary fw-bold">4</h2>
                <p className="text-dark mb-0">
                  Control Categories
                </p>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="stat-box">
                <h2 className="text-primary fw-bold">
  <CountUp end={3} duration={2} />
</h2>
                <p className="text-dark mb-0">
                  ISO Standards
                </p>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="stat-box">
                <h2 className="text-primary fw-bold">
  <CountUp end={100} duration={2} />%
</h2>
                <p className="text-dark mb-0">
                  Responsive Design
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section
        className="cta-section text-center py-5"
        data-aos="fade-up"
      >
        <div className="container">

          <h2 className="fw-bold">
            Ready to Explore ISO Standards?
          </h2>

          <p className="lead mt-3">
            Learn, audit and understand ISO compliance through a
            modern web platform.
          </p>

          <button className="btn btn-success btn-lg mt-3">
            Get Started
          </button>

        </div>
      </section>
    </>
  );
}

export default Home;  