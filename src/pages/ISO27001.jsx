import "../styles/iso27001.css";

function ISO27001() {
  return (
    <div className="iso-page">

      <div className="container py-5">

        <h1 className="display-4 fw-bold mb-3">
          ISO 27001
        </h1>

        <p className="lead mb-5">
          Information Security Management System (ISMS)
        </p>

        {/* Overview */}

        <div className="content-card">

          <h3>📖 Overview</h3>

          <p>
            ISO 27001 is an international standard for establishing,
            implementing, maintaining and continually improving an
            Information Security Management System (ISMS).
          </p>

        </div>

        {/* Clauses */}

        <div className="content-card">

          <h3>📑 Main Clauses</h3>

          <ul>

            <li>Clause 4 - Context of the Organization</li>

            <li>Clause 5 - Leadership</li>

            <li>Clause 6 - Planning</li>

            <li>Clause 7 - Support</li>

            <li>Clause 8 - Operation</li>

            <li>Clause 9 - Performance Evaluation</li>

            <li>Clause 10 - Improvement</li>

          </ul>

        </div>

        {/* Controls */}

        <div className="content-card">

          <h3>🛡 Annex A Controls</h3>

          <p>
            ISO 27001 contains Annex A controls used to protect
            organizational information assets through security controls.
          </p>

          <button className="btn btn-primary mt-3">
            View Controls
          </button>

        </div>

      </div>

    </div>
  );
}

export default ISO27001;