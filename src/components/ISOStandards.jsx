function ISOStandards() {

    const standards = [

        {
            title: "ISO 27001",
            subtitle: "Information Security Management",
            desc: "Learn clauses, controls, audit process and implementation."
        },

        {
            title: "ISO 27002",
            subtitle: "Security Controls",
            desc: "Explore organizational, physical and technological controls."
        },

        {
            title: "ISO 42001",
            subtitle: "AI Management System",
            desc: "AI governance, policies, risks and compliance."
        }

    ];

    return (

        <section className="container py-5">

            <h2 className="text-center fw-bold mb-5">
                ISO Standards
            </h2>

            <div className="row">

                {standards.map((item, index) => (

                    <div className="col-lg-4 mb-4" key={index}>

                        <div className="card h-100 bg-dark text-white border-secondary">

                            <div className="card-body">

                                <h3>{item.title}</h3>

                                <h6 className="text-primary">
                                    {item.subtitle}
                                </h6>

                                <p className="mt-3">
                                    {item.desc}
                                </p>

                                <button className="btn btn-outline-primary">
                                    Explore
                                </button>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </section>

    );

}

export default ISOStandards;