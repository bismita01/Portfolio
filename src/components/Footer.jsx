function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <h3>Bismita Das</h3>

        <p>
          CSE Student | AI & ML | Python | MERN Stack
        </p>

        <div className="footer-links">

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

        <p className="copyright">
          © {new Date().getFullYear()} Bismita Das. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;