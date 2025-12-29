export default function About() {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <h2 className="fw-bold display-5 mb-3">About Me</h2>
            <p className="text-secondary fs-5">
              I am a Full Stack Developer specializing in building scalable MERN stack applications,
              React Native mobile apps, and backend systems. I focus on performance, maintainable
              architecture, and seamless user experiences.
            </p>
            <p className="text-secondary fs-5">
              Passionate about clean code, modern web standards, and continuous learning.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img 
              src="https://www.svgrepo.com/show/220462/profile-portfolio.svg"
              alt="About illustration"
              className="img-fluid rounded shadow-sm"
              style={{ maxHeight: "300px", objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
