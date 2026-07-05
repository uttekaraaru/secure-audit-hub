import { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container py-5">

      <div className="row justify-content-center">

        <div className="col-lg-8">

          <div
            className="card shadow-lg border-0"
            style={{
              borderRadius: "20px",
              background: "#18324d",
              color: "white",
            }}
          >

            <div className="card-body p-5">

              <h1 className="text-center mb-3">
                📩 Contact Us
              </h1>

              <p className="text-center text-light mb-5">
                Have any questions about ISO standards or Secure Audit Hub?
                We'd love to hear from you.
              </p>

              {submitted && (
                <div className="alert alert-success">
                  ✅ Thank you! Your message has been sent successfully.
                </div>
              )}

              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <label className="form-label">
                    Full Name
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Email Address
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Subject
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label">
                    Message
                  </label>

                  <textarea
                    rows="5"
                    className="form-control"
                    placeholder="Write your message..."
                    required
                  ></textarea>
                </div>

                <button
                  className="btn btn-primary w-100 btn-lg"
                  type="submit"
                >
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Contact;