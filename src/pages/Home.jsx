
import {
  ArrowRight,
  BrainCircuit,
  Code2,
  Globe,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={15} />
            AI POWERED SOFTWARE DEVELOPMENT
          </div>

          <h1>
            We Build Digital
            <span> Experiences </span>
            That Move You Forward.
          </h1>

          <p>
            From innovative websites to intelligent AI solutions,
            TechNova transforms your ideas into powerful digital
            experiences.
          </p>

          <div className="hero-buttons">
            <Link to="/services" className="primary-btn">
              Explore Services <ArrowRight size={18} />
            </Link>

            <Link to="/projects" className="secondary-btn">
              View Our Projects
            </Link>
          </div>

          <div className="hero-trust">
            <ShieldCheck size={18} />
            Innovation · Creativity · Technology
          </div>
        </div>

        <div className="hero-visual">
  <div className="visual-glow"></div>

  <div className="laptop-image-card">
    <img
      src="/laptop-hero.png"
      alt="TechNova laptop and software development workspace"
    />

    <div className="image-caption">
      <span>✦</span>
      Building the Future with Technology
    </div>
  </div>

  <div className="floating-card floating-one">
    <BrainCircuit size={18} />
    <span>AI Innovation</span>
  </div>

  <div className="floating-card floating-two">
    <ShieldCheck size={18} />
    <span>Smart Solutions</span>
  </div>
</div>
      </section>

      <section className="home-stats">
        <div>
          <h2>Modern</h2>
          <p>Technology</p>
        </div>
        <div>
          <h2>Creative</h2>
          <p>Ideas</p>
        </div>
        <div>
          <h2>Smart</h2>
          <p>AI Solutions</p>
        </div>
        <div>
          <h2>Quality</h2>
          <p>Development</p>
        </div>
      </section>
      <section className="home-services">
  <div className="section-heading">
    <span>WHAT WE DO</span>
    <h2>Solutions That Drive Innovation</h2>
    <p>We combine creativity and technology to build smarter digital experiences.</p>
  </div>

  <div className="home-service-grid">
    <div className="home-service-card">
      <Globe size={32} />
      <h3>Web Development</h3>
      <p>Modern, responsive and powerful websites for your business.</p>
    </div>

    <div className="home-service-card">
      <BrainCircuit size={32} />
      <h3>AI Solutions</h3>
      <p>Intelligent AI-powered solutions to simplify your workflow.</p>
    </div>

    <div className="home-service-card">
      <Code2 size={32} />
      <h3>Software Development</h3>
      <p>Custom software designed to solve real-world problems.</p>
    </div>
  </div>
</section>
<section className="why-technova">
  <div className="section-heading">
    <span>WHY CHOOSE US</span>
    <h2>Technology You Can Trust</h2>
    <p>We focus on building digital solutions that make a real difference.</p>
  </div>

  <div className="why-grid">
    <div className="why-card">
      <h3>01. Innovation First</h3>
      <p>We use modern technologies and creative ideas to solve problems.</p>
    </div>

    <div className="why-card">
      <h3>02. Quality Work</h3>
      <p>Every project is built with attention to detail and performance.</p>
    </div>

    <div className="why-card">
      <h3>03. Client Focused</h3>
      <p>Your goals and satisfaction are at the heart of our work.</p>
    </div>
  </div>
</section>
<section className="home-cta">
  <h2>Ready to Build Something Amazing?</h2>
  <p>Let's turn your ideas into powerful digital solutions.</p>

  <Link to="/contact" className="primary-btn">
    Let's Talk <ArrowRight size={18} />
  </Link>
</section>
    </>
  );
}

export default Home;
