
import { ExternalLink, Globe, BrainCircuit, ShoppingBag } from "lucide-react";

function Projects() {
  const projects = [
    {
      icon: <Globe size={35} />,
      title: "Business Website",
      category: "Web Development",
      description:
        "A modern and responsive website designed to improve a business's online presence.",
      technologies: ["React", "CSS", "JavaScript"]
    },
    {
      icon: <BrainCircuit size={35} />,
      title: "AI Chat Assistant",
      category: "Artificial Intelligence",
      description:
        "An intelligent chatbot concept that helps users get quick answers and support.",
      technologies: ["React", "AI", "Node.js"]
    },
    {
      icon: <ShoppingBag size={35} />,
      title: "E-Commerce Platform",
      category: "Online Shopping",
      description:
        "A clean online shopping experience with product displays and easy navigation.",
      technologies: ["React", "JavaScript", "CSS"]
    }
  ];

  return (
    <section className="projects-page">
      <div className="projects-heading">
        <span className="tag">OUR PORTFOLIO</span>
        <h1>Ideas Turned Into <span>Digital Reality.</span></h1>
        <p>
          Explore some of the digital solutions and creative
          project concepts from TechNova.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-icon">{project.icon}</div>

            <span className="project-category">{project.category}</span>

            <h2>{project.title}</h2>

            <p>{project.description}</p>

            <div className="project-tags">
              {project.technologies.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>

            <div className="project-link">
              Project Concept <ExternalLink size={16} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
