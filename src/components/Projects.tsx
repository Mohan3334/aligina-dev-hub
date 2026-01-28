import { ExternalLink, Github, AlertCircle, Cloud } from "lucide-react";

const projects = [
  {
    title: "AI-Powered Accident Detection System",
    description: "Real-time accident detection and alerting system using IoT sensors and LoRa communication. Features ML-based incident detection, Bluetooth-based alerts, improved response time, and reduced latency for emergency situations.",
    techStack: ["IoT", "Arduino", "LoRa", "Machine Learning", "Python"],
    type: "Academic/Demo",
    icon: AlertCircle,
    hasGithub: false,
  },
  {
    title: "Weather Application",
    description: "Full-stack weather application fetching real-time weather data via external APIs. Features responsive UI design, cloud deployment on Heroku, and clean MVC architecture pattern for maintainability.",
    techStack: ["Node.js", "JavaScript", "REST APIs", "MVC", "Heroku"],
    type: "Public/Portfolio",
    icon: Cloud,
    hasGithub: true,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle mx-auto">
            A showcase of my technical work and engineering capabilities
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project) => (
            <div key={project.title} className="card-base group">
              {/* Project Icon/Visual */}
              <div className="w-full h-40 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-6 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300">
                <project.icon size={48} className="text-primary/60" />
              </div>

              {/* Type Badge */}
              <span className="badge-secondary text-xs mb-3 inline-block">
                {project.type}
              </span>

              {/* Title */}
              <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech) => (
                  <span key={tech} className="skill-tag text-xs py-1 px-2">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button className="btn-primary text-sm py-2 px-4 flex items-center gap-2">
                  <ExternalLink size={16} />
                  View Details
                </button>
                {project.hasGithub && (
                  <button className="btn-secondary text-sm py-2 px-4 flex items-center gap-2">
                    <Github size={16} />
                    GitHub
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            More projects coming soon as I continue building and learning
          </p>
          <a href="#contact" className="btn-secondary inline-flex items-center gap-2">
            Let's Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
