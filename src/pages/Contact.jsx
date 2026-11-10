
import { Mail, Phone, MapPin, Send } from "lucide-react";

function Contact() {
  function handleSubmit(event) {
    event.preventDefault();
    alert("Thank you! Your message has been submitted.");
    event.target.reset();
  }

  return (
    <section className="contact-page">
      <div className="contact-heading">
        <span className="tag">GET IN TOUCH</span>
        <h1>Let's Build Something <span>Great Together.</span></h1>
        <p>
          Have a project idea or need a technology solution?
          We'd love to hear from you.
        </p>
      </div>

      <div className="contact-layout">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>Reach out to our team using the details below.</p>

          <div className="contact-item">
            <Mail />
            <div>
              <h3>Email</h3>
              <p>hello@technova.com</p>
            </div>
          </div>

          <div className="contact-item">
            <Phone />
            <div>
              <h3>Phone</h3>
              <p>+880 1234-567890</p>
            </div>
          </div>

          <div className="contact-item">
            <MapPin />
            <div>
              <h3>Location</h3>
              <p>Chattogram, Bangladesh</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send Us a Message</h2>

          <label>Your Name</label>
          <input type="text" placeholder="Enter your name" required />

          <label>Your Email</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Subject</label>
          <input type="text" placeholder="Enter message subject" required />

          <label>Your Message</label>
          <textarea
            rows="5"
            placeholder="Write your message here..."
            required
          ></textarea>

          <button type="submit">
            Send Message <Send size={17} />
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
