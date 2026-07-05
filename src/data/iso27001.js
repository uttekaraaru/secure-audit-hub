import SectionTitle from "../components/SectionTitle";
import "../styles/iso27001.css";
import iso27001 from "../data/iso27001";

function ISO27001() {
  return (
    <div className="iso-page">
      <div className="container py-5">

        <SectionTitle
  title={iso27001.title}
  subtitle={iso27001.subtitle}
/>

        {/* Overview */}
        <div className="content-card">
          <h3>📖 Overview</h3>
          <p>{iso27001.overview}</p>
        </div>

        {/* Clauses */}
        <div className="content-card">

          <h3>📑 Main Clauses</h3>

          {iso27001.clauses.map((clause) => (

            <div key={clause.id} className="mb-4">

              <h5>
                Clause {clause.id} - {clause.title}
              </h5>

              <p>
                {clause.description}
              </p>

            </div>

          ))}

        </div>

        {/* Annex A */}

        <div className="content-card">

          <h3>🛡 Annex A Control Categories</h3>

          <ul>

            {iso27001.annexA.map((control,index)=>(

              <li key={index}>
                {control}
              </li>

            ))}

          </ul>

        </div>

      </div>
    </div>
  );
}

export default ISO27001;