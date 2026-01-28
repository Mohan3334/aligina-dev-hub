import { GraduationCap, Code2, Award, Zap } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Expertise",
    description: "End-to-end development from frontend to backend",
  },
  {
    icon: Zap,
    title: "Performance Focus",
    description: "Optimized systems for speed and reliability",
  },
  {
    icon: Award,
    title: "Production Ready",
    description: "Enterprise-grade solutions that scale",
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="section-label">About Me</span>
            <h2 className="section-title">
              Building <span className="gradient-text">Solutions</span>,<br />
              Not Just Code
            </h2>
            <p className="section-subtitle mb-6">
              I'm a Full Stack Developer with over 3 years of experience creating scalable, 
              secure, and high-performance web applications. My passion lies in clean architecture, 
              performance optimization, and building systems that scale reliably in production environments.
            </p>
            <p className="text-muted-foreground mb-8">
              From microservices to cloud deployments, I work across the entire stack to deliver 
              production-ready solutions. I thrive in collaborative environments where I can 
              contribute to impactful engineering work and continuously learn new technologies.
            </p>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {highlights.map((item) => (
                <div key={item.title} className="text-center sm:text-left">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-3">
                    <item.icon size={24} />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Download Resume CTA */}
            <a
              href="#contact"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Right Content - Education Card */}
          <div className="flex flex-col gap-6">
            {/* Education Card */}
            <div className="card-base">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={28} className="text-secondary-foreground" />
                </div>
                <div>
                  <span className="badge-secondary text-xs mb-2 inline-block">Education</span>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-1">
                    Master's in Computer Science
                  </h3>
                  <p className="text-primary font-medium mb-2">
                    University of Texas at Arlington
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Expected Graduation: 2025
                  </p>
                </div>
              </div>
            </div>

            {/* Tech I Love */}
            <div className="card-base bg-primary/5 border-primary/20">
              <h4 className="font-heading font-semibold text-lg text-foreground mb-4">
                Tech Stack I Love
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Spring Boot", "React", "AWS", "Kubernetes", "TypeScript", "Docker"].map((tech) => (
                  <span key={tech} className="badge-primary">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-xl bg-muted">
                <p className="font-heading font-bold text-2xl text-primary">3+</p>
                <p className="text-sm text-muted-foreground">Years Exp</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-muted">
                <p className="font-heading font-bold text-2xl text-primary">10+</p>
                <p className="text-sm text-muted-foreground">Projects</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-muted">
                <p className="font-heading font-bold text-2xl text-primary">5+</p>
                <p className="text-sm text-muted-foreground">Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
