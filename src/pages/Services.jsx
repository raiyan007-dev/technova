
import {
  Globe,
  Smartphone,
  BrainCircuit,
  Palette,
  Database,
  ShieldCheck
} from "lucide-react";

function Services() {
  const services = [
    {
      icon: <Globe size={30} />,
      title: "Web Development",
      description: "Modern, responsive and professional websites for businesses."
    },
    {
      icon: <Smartphone size={30} />,
      title: "Mobile App Development",
      description: "User-friendly mobile applications for Android and iOS."
    },
    {
      icon: <BrainCircuit size={30} />,
      title: "AI Solutions",
      description: "Smart artificial intelligence solutions for business growth."
    },
    {
      icon: <Palette size={30} />,
      title: "UI/UX Design",
      description: "Creative and attractive designs with better user experience."
    },
    {
      icon: <Database size={30} />,
      title: "Database Management",
      description: "Secure and organized database solutions for your business."
    },
    {
      icon: <ShieldCheck size={30} />,
      title: "Software Solutions",
      description: "Reliable software systems designed for your business needs."
    }
  ];

  return (
    <section className="services">
      <div className="section-title">
        <span>WHAT WE OFFER</span>
        <h2>Our Services</h2>
        <p>Technology solutions to help your business grow.</p>
      </div>

      <div className="service-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
