import { useRef, useState } from "react";
import "../styles/contact.css";
import { submitContact } from "../services/api";

function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    const formData = new FormData(form.current);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    submitContact(payload)
      .then(() => {
        setLoading(false);
        setMessage("success");
        form.current.reset();
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setMessage("error");
      });
  };

  return (
    <div className="container py-5">

      <div className="row">

        {/* Left Side */}
        <div className="col-lg-5 mb-4">

          <div className="contact-card h-100">

            <h2 className="fw-bold mb-4">
              📩 Contact Information
            </h2>

            <p className="text-light">
              Have questions regarding ISO standards or Secure Audit Hub?
              Feel free to contact us.
            </p>

            <hr />

            <p>
              📧 <strong>Email</strong><br />
              <a
                href="mailto:63aaradhyauttekar@gmail.com"
                className="text-info text-decoration-none"
              >
                63aaradhyauttekar@gmail.com
              </a>
            </p>

            <p>
              💻 <strong>GitHub</strong><br />
              <a
                href="https://github.com/uttekaraaru"
                target="_blank"
                rel="noreferrer"
                className="text-info text-decoration-none"
              >
                github.com/uttekaraaru
              </a>
            </p>

            <p>
              💼 <strong>LinkedIn</strong><br />
              <a
                href="https://www.linkedin.com/in/aaradhya-uttekar07028/"
                target="_blank"
                rel="noreferrer"
                className="text-info text-decoration-none"
              >
                Aaradhya Uttekar
              </a>
            </p>

            <p>
              📍 <strong>Location</strong><br />
              Mumbai, Maharashtra, India
            </p>

          </div>

        </div>

        {/* Right Side */}
        <div className="col-lg-7">

          <div className="contact-card">

            <h2 className="fw-bold mb-4">
              Send Message
            </h2>

            {message === "success" && (
              <div className="alert alert-success">
                ✅ Message sent successfully.
              </div>
            )}

            {message === "error" && (
              <div className="alert alert-danger">
                ❌ Failed to send message. Please make sure the backend server is running.
              </div>
            )}

            <form ref={form} onSubmit={sendEmail}>

              <div className="mb-3">

                <label className="form-label">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  className="form-control contact-input"
                  placeholder="Enter your full name"
                  required
                />

              </div>

              <div className="mb-3">

                <label className="form-label">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  className="form-control contact-input"
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
                  name="subject"
                  className="form-control contact-input"
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
                  name="message"
                  className="form-control contact-input"
                  placeholder="Write your message..."
                  required
                ></textarea>

              </div>

              <button
                className="btn btn-primary btn-lg w-100"
                disabled={loading}
              >
                {loading ? "Sending..." : "🚀 Send Message"}
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Contact;
