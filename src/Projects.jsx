function Projects() {
  const projects = [
    {
      number: "01",
      title: "College AI Assistant",
      description:
        "An AI-powered college assistant that uses documents and intelligent retrieval to answer student queries with relevant information.",
      technologies: ["Python", "Streamlit", "LangChain", "FAISS", "OpenAI"],
      github: "https://github.com/bismita01/College-AI-Assistant",
      category: "AI & ML",
    },
    {
      number: "02",
      title: "Doctor Appointment System",
      description:
        "A full-stack web application for managing doctors, patients, appointments, authentication, and appointment booking.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
      github: "https://github.com/bismita01/doctor-appointment-system",
      category: "MERN Stack",
    },
    {
      number: "03",
      title: "Medicine",
      description:
        "A medicine-related application developed to provide useful functionality for managing or accessing medicine information.",
      technologies: ["Java"],
      github: "https://github.com/bismita01/Medicine",
      category: "Java",
    },
    {
      number: "04",
      title: "Hospital Care",
      description:
        "A hospital management web application designed to organize hospital-related information and services.",
      technologies: ["HTML", "CSS"],
      github: "https://github.com/bismita01/Hospital-Care",
      category: "Web Development",
    },
    {
      number: "05",
      title: "Carbon Credit",
      description:
        "A web project based on the concept of carbon credits and blockchain technology.",
      technologies: ["HTML", "CSS", "Blockchain"],
      github: "https://github.com/bismita01/Carbon-Credit",
      category: "Blockchain",
    },
    {
      number: "06",
      title: "Django Face Clone",
      description:
        "A Django-based web application developed using Python and HTML.",
      technologies: ["Python", "Django", "HTML"],
      github: "https://github.com/bismita01/Django",
      category: "Django",
    },
    {
      number: "07",
      title: "Digital Sanjeevani",
      description:
        "A healthcare-focused project designed to provide digital solutions for healthcare-related needs.",
      technologies: ["Web Development"],
      github: "https://github.com/bismita01/legendary-speculoos-af69bd",
      category: "Healthcare",
    },
    {
      number: "08",
      title: "Phishing URL Detection System",
      description:
        "A security-focused application that detects potentially malicious or phishing URLs.",
      technologies: ["Python", "Machine Learning"],
      github:
        "https://github.com/bismita01/Phishing-URL-Detection-System",
      category: "Cyber Security",
    },
  ];

  return (
    <section id="projects" className="projects-section">

      <div className="projects-header">

        <div>
          <p className="section-subtitle">What I Have Built</p>

          <h2>My Projects</h2>

          <p className="projects-intro">
            Explore some of the projects I have built while learning
            software development, AI, web technologies, and problem solving.
          </p>
        </div>

        <div className="project-scroll-text">
          ← Scroll →
        </div>

      </div>

      <div className="projects-horizontal">

        {projects.map((project) => (
          <article className="project-card-new" key={project.number}>

            <div className="project-top">

              <span className="project-number-new">
                {project.number}
              </span>

              <span className="project-category">
                {project.category}
              </span>

            </div>

            <div className="project-main">

              <h3>{project.title}</h3>

              <p className="project-description-new">
                {project.description}
              </p>

              <div className="project-technologies">

                {project.technologies.map((technology, index) => (
                  <span key={index}>
                    {technology}
                  </span>
                ))}

              </div>

            </div>

            <div className="project-bottom">

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-github-btn"
              >
                View on GitHub
                <span>↗</span>
              </a>

            </div>

          </article>
        ))}

      </div>

    </section>
  );
}

export default Projects;