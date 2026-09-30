function Hero() {
  return (
    <section id="home" className="hero-section">

      <div className="hero-container">

        <p className="hero-label">
          COMPUTER SCIENCE ENGINEERING STUDENT
        </p>

        <h1>
          Bismita Das
        </h1>

        <h2>
          AI & ML <span>•</span> Python <span>•</span> MERN Stack
        </h2>

        <p className="hero-text">
          I am a Computer Science Engineering student passionate about
          software development, Artificial Intelligence, Machine Learning,
          and full-stack web development. I enjoy building practical
          technology solutions to real-world problems.
        </p>

        <div className="hero-actions">

          <a
            href="#projects"
            className="hero-primary"
          >
            Explore My Projects →
          </a>

          <a
            href="#contact"
            className="hero-secondary"
          >
            Let's Connect
          </a>

        </div>

        <div className="hero-socials">

          <a
            href="https://github.com/bismita01"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/bismita-das-501467325/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:bismitadas57@gmail.com">
            Email
          </a>

        </div>

      </div>

    </section>
  );
}

export default Hero;