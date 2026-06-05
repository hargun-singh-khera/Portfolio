export default function Experience() {

  const techStacks = [
    "React.js", "Node.js", "Express.js", "MongoDB", "Next.js", "React Native", "JavaScript", "Docker", "AWS", "Git", "Postman",
  ]

  return (
    <section id="experience" className="py-5 bg-light">
      <div className="container">

        <div className="mb-5">
          <h2 className="fw-bold mb-2">Experience</h2>
          <p className="text-muted col-lg-7">
            Hands-on experience building scalable web and mobile applications
            used in real production environments.
          </p>
        </div>


        <div className="border-start border-2 ps-4 position-relative">
          <span
            className="position-absolute top-0 start-0 translate-middle bg-dark rounded-circle"
            style={{ width: "10px", height: "10px" }}
          />

          <div className="mb-4">

            <div className="d-flex flex-wrap align-items-center gap-3 mb-2">
              <span className="badge bg-dark rounded-pill px-3 py-2">
                Sept 2025 – Present
              </span>
              <span className="text-muted fw-medium">
                IXT Minds
              </span>
            </div>


            <h5 className="fw-semibold mb-3">
              Full Stack Developer
            </h5>

            <ul className="text-muted">
              <li>
                Built and maintained a cross-platform React Native e-commerce application,
                integrating Razorpay payments and Shiprocket APIs to streamline order workflows.
              </li>

              <li>
                Developed a React-based AI-powered ad generation platform featuring
                multi-step workflows, JWT authentication, and real-time progress tracking.
              </li>

              <li>
                Architected and integrated 20+ REST APIs using Node.js and Express.js
                for an agri-tech platform, enabling value-chain tracking, activity logging,
                and carbon-emission calculations.
              </li>

              <li>
                Collaborated across frontend and backend systems to deliver scalable,
                production-ready features with clean and maintainable architecture.
              </li>
            </ul>

            {/* Tech Stack */}
            <div className="d-flex flex-wrap gap-2 mt-3">
              {techStacks.map(stack =>
                <span key={stack} className="badge bg-secondary bg-opacity-10 text-dark">
                  {stack}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
