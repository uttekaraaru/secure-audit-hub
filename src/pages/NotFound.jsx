import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      className="container text-center d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <h1
        className="display-1 fw-bold text-primary"
        style={{ fontSize: "8rem" }}
      >
        404
      </h1>

      <h2 className="fw-bold mb-3">
        Page Not Found
      </h2>

      <p className="text-secondary mb-4">
        The page you are looking for doesn't exist or has been moved.
      </p>

      <Link
        to="/"
        className="btn btn-primary btn-lg"
      >
        ← Back to Home
      </Link>
    </div>
  );
}

export default NotFound;