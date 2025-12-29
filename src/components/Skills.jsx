export default function Skills() {
  const skills = [
    { name: "C++", src: "https://skillicons.dev/icons?i=cpp" },
    { name: "Java", src: "https://skillicons.dev/icons?i=java" },
    { name: "Python", src: "https://skillicons.dev/icons?i=python" },
    { name: "JavaScript", src: "https://skillicons.dev/icons?i=js" },
    { name: "React", src: "https://skillicons.dev/icons?i=react" },
    { name: "Node.js", src: "https://skillicons.dev/icons?i=nodejs" },
    { name: "Express", src: "https://skillicons.dev/icons?i=express" },
    { name: "MongoDB", src: "https://skillicons.dev/icons?i=mongodb" },
    { name: "Firebase", src: "https://skillicons.dev/icons?i=firebase" },
    { name: "Bootstrap", src: "https://skillicons.dev/icons?i=bootstrap" },
    { name: "React Native", src: "https://skillicons.dev/icons?i=react" },
    { name: "Next.js", src: "https://skillicons.dev/icons?i=nextjs" },
    { name: "SQL", src: "https://skillicons.dev/icons?i=mysql" },
  ];

  return (
    <section id="skills" className="py-5 bg-light">
      <div className="container">
        <h2 className="fw-bold mb-4">Skills</h2>
        <div className="row g-3 justify-content-center">
          {skills.map((skill, index) => (
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
    </section>
  );
}
