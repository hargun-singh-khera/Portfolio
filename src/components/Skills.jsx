export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      items: [
        { name: "C++", src: "https://skillicons.dev/icons?i=cpp" },
        { name: "JavaScript", src: "https://skillicons.dev/icons?i=js" },
        { name: "TypeScript", src: "https://skillicons.dev/icons?i=ts" },
      ],
    },
    {
      title: "Frontend",
      items: [
        { name: "HTML", src: "https://skillicons.dev/icons?i=html" },
        { name: "CSS", src: "https://skillicons.dev/icons?i=css" },
        { name: "Tailwind CSS", src: "https://skillicons.dev/icons?i=tailwind" },
        { name: "Bootstrap", src: "https://skillicons.dev/icons?i=bootstrap" },
        { name: "React.js", src: "https://skillicons.dev/icons?i=react" },
        { name: "Next.js", src: "https://skillicons.dev/icons?i=nextjs" },
      ],
    },
    {
      title: "Backend",
      items: [
        { name: "Node.js", src: "https://skillicons.dev/icons?i=nodejs" },
        { name: "Express.js", src: "https://skillicons.dev/icons?i=express" },
      ],
    },
    {
      title: "Databases",
      items: [
        { name: "MongoDB", src: "https://skillicons.dev/icons?i=mongodb" },
        { name: "SQL", src: "https://skillicons.dev/icons?i=mysql" },
      ],
    },
    {
      title: "Tools & Platforms",
      items: [
        { name: "Git", src: "https://skillicons.dev/icons?i=git" },
        { name: "GitHub", src: "https://skillicons.dev/icons?i=github" },
        { name: "Postman", src: "https://skillicons.dev/icons?i=postman" },
        { name: "Docker", src: "https://skillicons.dev/icons?i=docker" },
        { name: "AWS", src: "https://skillicons.dev/icons?i=aws" },
        { name: "Cloudinary", src: "https://cloudinary.com/favicon.ico" }, // if you add a custom icon
      ],
    },
  ];

  return (
    <section id="skills" className="py-5 bg-light">
      <div className="container">
        <h2 className="fw-bold mb-4">Skills</h2>

        {skillCategories.map((category, idx) => (
          <div key={idx} className="mb-5">
            <h5 className="fw-semibold text-uppercase small text-muted mb-3">{category.title}</h5>

            <div className="row g-3">
              {category.items.map((skill, index) => (
                <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2">
                  <div className="card text-center shadow-sm h-100 p-3">
                    <img
                      src={skill.src}
                      alt={skill.name}
                      className="img-fluid mb-2"
                      style={{ height: "50px", objectFit: "contain" }}
                    />
                    <h6 className="mb-0">{skill.name}</h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
