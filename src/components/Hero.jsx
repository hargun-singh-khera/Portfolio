export default function Hero() {
  return (
    <section className="min-vh-100 d-flex align-items-center bg-light">
      <div className="container-fluid px-md-5 p-md-6">
        <div className="row">
          <div className="col-lg-8">
            <span className="badge bg-dark rounded-pill px-3 py-2 mb-3">
              Available for full time roles & freelance projects
            </span>


            <h1 className="fw-bold display-4 display-md-3 lh-1 mb-3">
              Hargun Singh Khera
            </h1>

            <h2 className="fs-4 fw-semibold text-secondary mb-3">
              Full Stack Developer
            </h2>

            <p className="fs-5 text-muted mb-4" style={{ maxWidth: "640px" }}>
              I build scalable web and mobile applications with a strong focus
              on performance, clean architecture, and real-world usability.
            </p>

            <p className="text-muted mb-4">
              MERN Stack • React Native • Node.js • Express • MongoDB
            </p>

            <div className="d-flex flex-wrap gap-3">
              <a href="#contact" className="btn btn-dark btn-lg">
                Contact Me
              </a>
              <a
                href="https://drive.google.com/file/d/10tRHWVbcw7yZMB4I-pj2RFp4BTjvGlnD/view?usp=sharing"
                className="btn btn-outline-dark btn-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
