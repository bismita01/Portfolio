function Projects() {
  const projects = [
    {
      title: "College AI Assistant",
      description:
        "An AI-powered college assistant that uses documents and intelligent retrieval to answer student queries with relevant information.",
      technologies:
        "Python, Streamlit, LangChain, LangGraph, FAISS, OpenAI",
      github:
        "https://github.com/bismita01/College-AI-Assistant",
    },

    {
      title: "Doctor Appointment System",
      description:
        "A full-stack web application for managing doctors, patients, appointments, authentication, and appointment booking.",
      technologies:
        "React, Node.js, Express.js, MongoDB, JWT, bcrypt",
      github:
        "https://github.com/bismita01/doctor-appointment-system",
    },

    {
      title: "Medicine",
      description:
        "A medicine-related application developed to provide useful functionality for managing or accessing medicine information.",
      technologies:
        "Java",
      github:
        "https://github.com/bismita01/Medicine",
    },

    {
      title: "Hospital Care",
      description:
        "A hospital management web application designed to organize hospital-related information and services.",
      technologies:
        "HTML, CSS",
      github:
        "https://github.com/bismita01/Hospital-Care",
    },

    {
      title: "Carbon Credit",
      description:
        "A web project based on the concept of carbon credits and blockchain technology, focusing on digital management of carbon-related information.",
      technologies:
        "HTML, CSS, Blockchain Concept",
      github:
        "https://github.com/bismita01/Carbon-Credit",
    },

    {
      title: "Django Face Clone",
      description:
        "A Django-based web application developed using Python and HTML, demonstrating web development and application functionality.",
      technologies:
        "Python, Django, HTML",
      github:
        "https://github.com/bismita01/Django",
    },

    {
      title: "Digital Sanjeevani",
      description:
        "A healthcare-focused project designed to provide digital solutions for healthcare-related needs.",
      technologies:
        "Web Development",
      github:
        "https://github.com/bismita01/legendary-speculoos-af69bd",
    },

    {
      title: "Phishing URL Detection System",
      description:
        "A security-focused application that detects potentially malicious or phishing URLs to help users identify unsafe links.",
      technologies:
        "Python, Machine Learning",
      github:
        "https://github.com/bismita01/Phishing-URL-Detection-System",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <p className="section-subtitle">What I Have Built</p>

      <h2>My Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>

            <div className="project-number">
              0{index + 1}
            </div>

            <h3>{project.title}</h3>

            <p className="project-description">
              {project.description}
            </p>

            <p className="project-tech">
              <strong>Technologies:</strong>{" "}
              {project.technologies}
            </p>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="github-btn"
            >
              View on GitHub →
            </a>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;