export default function Experience() {

  const techStacks = [
    "React", "React Native", "Node.js", "Express", "MongoDB", "Firebase", "Next.js",
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
                Contributed to the development of a cross-platform React Native e-commerce application, implementing secure payments and optimizing user flows.
              </li>
              <li>
                Engineered an AI-powered ad generation platform to automate
                creative production and improve campaign efficiency.
              </li>
              <li>
                Designed and integrated RESTful APIs while managing application
                state using scalable and maintainable patterns.
              </li>
              <li>
                Worked closely with product, design, and backend teams to ship
                features from concept to production.
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
