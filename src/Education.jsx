function Education() {
  return (
    <section id="education" className="education-section">
      <p className="section-subtitle">My Academic Journey</p>

      <h2>Education</h2>

      <div className="education-timeline">

        {/* B.Tech */}
        <div className="education-card">
          <div className="education-icon">🎓</div>

          <div className="education-content">
            <span className="education-level">2024 – Present</span>

            <h3>B.Tech – Computer Science Engineering</h3>

            <h4>Gandhi Institute of Excellence Technocrats (GIET)</h4>

            <p>
              Currently pursuing B.Tech in Computer Science Engineering,
              with interests in Software Development, Artificial
              Intelligence, Machine Learning, Data Science, and
              Full-Stack Web Development.
            </p>

            <div className="education-highlights">
              <span>Computer Science</span>
              <span>AI & ML</span>
              <span>Web Development</span>
              <span>Data Science</span>
            </div>
          </div>
        </div>


        {/* Higher Secondary */}
        <div className="education-card">
          <div className="education-icon">🏫</div>

          <div className="education-content">
            <span className="education-level">
              Higher Secondary Education
            </span>

            <h3>Higher Secondary Education</h3>

            <h4>
              Swadhin Residential Higher Secondary School, Nimapara
            </h4>

            <p>
              Completed higher secondary education with a focus on
              building a strong academic foundation for higher studies
              in Computer Science and Engineering.
            </p>
          </div>
        </div>


        {/* Schooling */}
        <div className="education-card">
          <div className="education-icon">📚</div>

          <div className="education-content">
            <span className="education-level">
              School Education
            </span>

            <h3>Schooling</h3>

            <h4>
              Saraswati Shishu Vidya Mandir, Astarang
            </h4>

            <p>
              Completed school education and developed a strong
              foundation in academics, learning, and personal development.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Education;