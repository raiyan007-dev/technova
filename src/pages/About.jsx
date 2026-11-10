
import { Target, Eye, Rocket, CheckCircle } from "lucide-react";

function About() {
  return (
    <section className="about-page">
      <div className="about-heading">
        <span className="tag">GET TO KNOW US</span>
        <h1>We Build Technology for a <span>Better Future.</span></h1>
        <p>
          TechNova is an AI-powered software development agency
          creating innovative digital solutions for modern businesses.
        </p>
      </div>

      <div className="about-content">
        <div className="about-card">
          <Rocket size={35} />
          <h2>Who We Are</h2>
          <p>
            We are a team of creative thinkers, designers and developers
            who turn ideas into meaningful digital experiences.
          </p>
        </div>

        <div className="about-card">
          <Target size={35} />
          <h2>Our Mission</h2>
          <p>
            Our mission is to make technology accessible and useful
            through quality software and intelligent AI solutions.
          </p>
        </div>

        <div className="about-card">
          <Eye size={35} />
          <h2>Our Vision</h2>
          <p>
            We aim to create a smarter digital world through
            innovation, creativity and modern technology.
          </p>
        </div>
      </div>

      <div className="about-values">
        <h2>Why Choose TechNova?</h2>
        <p><CheckCircle /> Modern Technology</p>
        <p><CheckCircle /> Creative Ideas</p>
        <p><CheckCircle /> User-Friendly Solutions</p>
        <p><CheckCircle /> Quality Development</p>
      </div>
    </section>
  );
}

export default About;
