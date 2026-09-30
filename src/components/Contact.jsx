import emailjs from "@emailjs/browser";
import { useRef } from "react";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bis01",
        "template_0nqrk7l",
        form.current,
        "R7NRNO5Iq57uJ3Y_p"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact">
      <h2>Let's Connect</h2>

      <p>
        I'm open to opportunities, collaborations, internships,
        and software development roles.
      </p>

      <div>
        <h3>Contact Me</h3>

        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:bismitadas57@gmail.com">
            bismitadas57@gmail.com
          </a>
        </p>

        <p>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/bismita01"
            target="_blank"
            rel="noreferrer"
          >
            github.com/bismita01
          </a>
        </p>

        <p>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/bismita-das-501467325/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn Profile
          </a>
        </p>
      </div>

      <div>
        <h3>Send Me a Message</h3>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;