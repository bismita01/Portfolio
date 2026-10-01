import { useEffect, useRef } from "react";

function Skills() {
  const skillsRef = useRef(null);

  useEffect(() => {
    const cards = skillsRef.current.querySelectorAll(".skill-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <section id="skills" className="skills-section">
      <div className="skills-page" ref={skillsRef}>

        <p className="section-subtitle">What I Work With</p>

        <h2>My Skills</h2>

        <p className="skills-intro">
          Technologies and tools I use to build software, web applications,
          and AI-powered solutions.
        </p>

        <div className="skills-grid">

          <div className="skill-card">
            <h3>💻 Programming</h3>
            <p>C</p>
            <p>Python</p>
            <p>Java</p>
            <p>JavaScript</p>
          </div>

          <div className="skill-card">
            <h3>🌐 Web Development</h3>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>React</p>
            <p>Node.js</p>
            <p>Express.js</p>
            <p>MongoDB</p>
            <p>MERN Stack</p>
          </div>

          <div className="skill-card">
            <h3>🤖 AI & Machine Learning</h3>
            <p>Artificial Intelligence</p>
            <p>Machine Learning</p>
            <p>Agentic AI</p>
            <p>RAG</p>
            <p>LangChain</p>
            <p>FAISS</p>
          </div>

          <div className="skill-card">
            <h3>🗄️ Database & Backend</h3>
            <p>SQL</p>
            <p>MongoDB</p>
            <p>SQLite</p>
            <p>Flask</p>
            <p>Django</p>
          </div>

          <div className="skill-card">
            <h3>🛠️ Tools & Technologies</h3>
            <p>Git</p>
            <p>GitHub</p>
            <p>VS Code</p>
            <p>Postman</p>
            <p>Streamlit</p>
          </div>

          <div className="skill-card">
            <h3>📊 Data & Other</h3>
            <p>Data Structures</p>
            <p>Data Science</p>
            <p>NumPy</p>
            <p>Pandas</p>
            <p>Matplotlib</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;