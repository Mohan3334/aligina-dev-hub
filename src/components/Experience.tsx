import { Building2, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Software Development Engineer",
    company: "American Airlines",
    location: "Fort Worth, TX",
    period: "May 2025 – Present",
    type: "Enterprise",
    tags: ["Java", "Spring Boot", "Microservices", "AWS", "React"],
    bullets: [
      "Building and maintaining enterprise, high-availability airline systems using Java (Spring Boot), React, Angular, and microservices architecture",
      "Developing and integrating REST/SOAP APIs with AWS and Azure cloud services for seamless system interoperability",
      "Deploying scalable applications using Docker/Kubernetes with CI/CD pipelines for continuous delivery",
      "Improving performance, security, and reliability for mission-critical platforms serving millions of passengers",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Lbits Technologies",
    location: "Hyderabad, India",
    period: "Oct 2021 – Aug 2023",
    type: "Product",
    tags: ["C#", "Python", "React", "Angular", "Django", "ASP.NET"],
    bullets: [
      "Developed end-to-end full stack applications using C#, Java, Python, React, Angular, Django, Flask, and ASP.NET",
      "Built secure backend services implementing OAuth 2.0, JWT authentication, and role-based access control (RBAC)",
      "Created responsive user interfaces with optimized SQL/NoSQL database queries for high-traffic applications",
      "Managed cloud deployments using Docker containers and CI/CD workflows for automated releases",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-muted/50">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="section-label">Experience</span>
          <h2 className="section-title">Professional Journey</h2>
          <p className="section-subtitle mx-auto">
            Building enterprise-grade applications and driving engineering excellence
          </p>
        </div>

        {/* Experience Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="card-base">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Company Icon */}
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Building2 size={32} className="text-primary" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div>
                      <span className="badge-secondary text-xs mb-2 inline-block">{exp.type}</span>
                      <h3 className="font-heading font-bold text-xl text-foreground">
                        {exp.role}
                      </h3>
                      <p className="text-primary font-semibold text-lg">{exp.company}</p>
                    </div>
                    <div className="flex flex-col gap-1 text-sm text-muted-foreground sm:text-right">
                      <span className="flex items-center gap-1 sm:justify-end">
                        <Calendar size={14} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1 sm:justify-end">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="skill-tag text-xs py-1 px-2">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
