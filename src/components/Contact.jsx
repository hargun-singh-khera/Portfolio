import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3">Contact</h2>
          <p className="text-secondary fs-5">Let's build something solid together.</p>
        </div>

        <div className="row justify-content-center g-4">
          {/* Email Card */}
          <div className="col-12 col-md-4">
            <div className="card h-100 text-center shadow-sm border-0">
              <div className="card-body">
                <FaEnvelope size={40} className="mb-3 text-dark" />
                <h5 className="card-title">Email</h5>
                <p className="card-text text-secondary">Reach out directly via email</p>
                <a href="mailto:hargunsinghkhera@gmail.com" className="btn btn-dark">
                  Send Email
                </a>

              </div>
            </div>
          </div>

          {/* GitHub Card */}
          <div className="col-12 col-md-4">
            <div className="card h-100 text-center shadow-sm border-0">
              <div className="card-body">
                <FaGithub size={40} className="mb-3 text-dark" />
                <h5 className="card-title">GitHub</h5>
                <p className="card-text text-secondary">Check out my projects and repos</p>
                <a href="https://github.com/hargun-singh-khera" target="_blank" className="btn btn-outline-dark">
                  Visit GitHub
                </a>
              </div>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="col-12 col-md-4">
            <div className="card h-100 text-center shadow-sm border-0">
              <div className="card-body">
                <FaLinkedin size={40} className="mb-3 text-dark" />
                <h5 className="card-title">LinkedIn</h5>
                <p className="card-text text-secondary">Connect professionally</p>
                <a href="https://linkedin.com/in/hargun-singh-khera-78bb541b7" target="_blank" className="btn btn-outline-dark">
                  Connect
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
