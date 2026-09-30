function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">

        <p className="hero-greeting">
          Hello, I'm
        </p>

        <h1>
          Bismita Das
        </h1>

        <h2>
          CSE Student | AI & ML | Python | MERN Stack
        </h2>

        <p className="hero-description">
          I am a Computer Science Engineering student interested in
          software development, Artificial Intelligence, Machine Learning,
          and full-stack web development.
        </p>

        <div className="hero-buttons">
          <a
            href="#projects"
            className="primary-btn"
          >
            View My Projects
          </a>

          <a
            href="#contact"
            className="secondary-btn"
          >
            Contact Me
          </a>
        </div>

      </div>
    </section>
  );
}

export default Hero;