import { useState } from "react";
import resources from "../data/resources";
import "../styles/resources.css";

function Resources() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredResources = resources.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || item.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container py-5">

      <h1 className="fw-bold text-white mb-4">
        📂 Resources
      </h1>

      {/* Search Box */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control form-control-lg search-box"
          placeholder="🔍 Search ISO documents..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Filter Buttons */}
      <div className="mb-5">

        <button
          className={`btn me-2 ${
            category === "All"
              ? "btn-primary"
              : "btn-outline-primary"
          }`}
          onClick={() => setCategory("All")}
        >
          All
        </button>

        <button
          className={`btn me-2 ${
            category === "ISO 27001"
              ? "btn-primary"
              : "btn-outline-primary"
          }`}
          onClick={() => setCategory("ISO 27001")}
        >
          ISO 27001
        </button>

        <button
          className={`btn me-2 ${
            category === "ISO 27002"
              ? "btn-primary"
              : "btn-outline-primary"
          }`}
          onClick={() => setCategory("ISO 27002")}
        >
          ISO 27002
        </button>

        <button
          className={`btn ${
            category === "ISO 42001"
              ? "btn-primary"
              : "btn-outline-primary"
          }`}
          onClick={() => setCategory("ISO 42001")}
        >
          ISO 42001
        </button>

      </div>

      {/* Resource Cards */}
      <div className="row">

        {filteredResources.map((item) => (

          <div className="col-lg-4 mb-4" key={item.id}>

            <div className="card h-100 shadow-lg resource-card">

              <div className="card-body">

                <span className="badge bg-primary mb-3">
                  {item.category}
                </span>

                <h4>{item.title}</h4>

                <p className="text-light">
                  {item.description}
                </p>

              </div>

              <div className="card-footer resource-footer border-0 pb-4">

                <a
                  href={item.file}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary me-2"
                >
                  👁 View
                </a>

                <a
                  href={item.file}
                  download
                  className="btn btn-success"
                >
                  ⬇ Download
                </a>

              </div>

            </div>

          </div>

        ))}

        {filteredResources.length === 0 && (
          <div className="col-12 text-center text-white">
            <h4>No document found.</h4>
          </div>
        )}

      </div>

    </div>
  );
}

export default Resources;