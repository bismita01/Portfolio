function Certificates() {
  const certificates = [
    {
      number: "01",
      title: "Python Internship",
      description: "Completed a Python Internship at CTTC.",
      organization: "CTTC",
      category: "Internship",
    },
    {
      number: "02",
      title: "MERN Stack Internship",
      description:
        "Completed a MERN Stack Internship with practical experience in developing full-stack web applications.",
      organization: "MERN Stack Internship",
      category: "Internship",
    },
    {
      number: "03",
      title: "AI for Students Workshop",
      description:
        "Participated in the AI for Students workshop focused on building a Generative AI model.",
      organization: "NxtWave",
      category: "Workshop",
    },
    {
      number: "04",
      title: "AI for Students — Leadership",
      description:
        "Participated in the AI for Students workshop in a leadership role.",
      organization: "NxtWave",
      category: "Leadership",
    },
    {
      number: "05",
      title: "Paper Presentation",
      description:
        "Presented a paper at the 2nd National Conference on Computing 4.0 — Empowering the Next Generation of Technology.",
      organization: "NCCENGT-2025",
      category: "Conference",
    },
    {
      number: "06",
      title: "Hackathon Participant — 2024",
      description:
        "Participated in a hackathon and gained practical experience in problem-solving and teamwork.",
      organization: "Hackathon 2024",
      category: "Achievement",
    },
    {
      number: "07",
      title: "Hackathon Participant — 2025",
      description:
        "Participated in a hackathon and worked on developing technology-based solutions.",
      organization: "Hackathon 2025",
      category: "Achievement",
    },
    {
      number: "08",
      title: "Introduction to AI",
      description:
        "Completed the Introduction to Artificial Intelligence learning program.",
      organization: "IBM SkillsBuild",
      category: "AI",
    },
    {
      number: "09",
      title: "ICCOSET-2024",
      description:
        "Participated in the 2nd International Conference on Challenges and Opportunities in Science, Engineering and Technology.",
      organization: "ICCOSET-2024",
      category: "Conference",
    },
    {
      number: "10",
      title: "Cyber Security Workshop",
      description:
        "Participated in a 2-day workshop on Cyber Security and learned about cybersecurity concepts and threats.",
      organization: "Threatsys Technologies",
      category: "Workshop",
    },
    {
      number: "11",
      title: "Prototype Exhibition — TECHTRONICS 2026",
      description:
        "Participated in the Prototype Exhibition, Senior Division, as part of TECHTRONICS 2026.",
      organization: "Silicon University",
      category: "Exhibition",
    },
  ];

  return (
    <section
      id="certificates"
      className="certificates-section"
    >
      <div className="certificates-header">

        <div>
          <p className="section-subtitle">
            Certifications & Achievements
          </p>

          <h2>Certificates & Achievements</h2>

          <p className="certificates-intro">
            A collection of my internships, workshops, conferences,
            hackathons, and other achievements.
          </p>
        </div>

        <div className="certificate-scroll-text">
          ← Scroll →
        </div>

      </div>

      <div className="certificates-horizontal">

        {certificates.map((certificate) => (
          <article
            className="certificate-card-new"
            key={certificate.number}
          >

            <div className="certificate-top">

              <span className="certificate-number">
                {certificate.number}
              </span>

              <span className="certificate-category">
                {certificate.category}
              </span>

            </div>

            <div className="certificate-main">

              <div className="certificate-icon">
                🏆
              </div>

              <h3>{certificate.title}</h3>

              <p>
                {certificate.description}
              </p>

            </div>

            <div className="certificate-bottom">

              <span>
                {certificate.organization}
              </span>

              <span className="certificate-arrow">
                ↗
              </span>

            </div>

          </article>
        ))}

      </div>
    </section>
  );
}

export default Certificates;