import { Globe, Server, Layout, Cloud, Settings, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Full Stack Web Development",
    description: "End-to-end scalable apps from UI to backend services using modern frameworks and best practices.",
    highlight: false,
  },
  {
    icon: Server,
    title: "Backend & API Development",
    description: "Secure, high-performance REST/SOAP APIs, authentication, and integration with third-party systems.",
    highlight: false,
  },
  {
    icon: Layout,
    title: "Frontend Development",
    description: "Responsive UI, performance optimization, accessibility, and clean design using modern frameworks.",
    highlight: false,
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps Setup",
    description: "AWS/Azure deployment, containers, CI/CD pipelines, and automation for reliable releases.",
    highlight: false,
  },
  {
    icon: Settings,
    title: "System Design & Architecture",
    description: "Scalable, fault-tolerant microservices and cloud-ready architecture planning and implementation.",
    highlight: false,
  },
  {
    icon: ShieldCheck,
    title: "Security & Performance",
    description: "OAuth/JWT/RBAC/SSL implementation with performance monitoring and optimization tuning.",
    highlight: true,
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-muted/50">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="section-label">Services</span>
          <h2 className="section-title">What I Can Deliver</h2>
          <p className="section-subtitle mx-auto">
            Comprehensive engineering services for companies and clients
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className={`card-base ${
                service.highlight
                  ? "bg-primary/5 border-primary/20"
                  : ""
              }`}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                  service.highlight
                    ? "bg-secondary/30"
                    : "bg-primary/10"
                }`}
              >
                <service.icon
                  size={28}
                  className={service.highlight ? "text-secondary-foreground" : "text-primary"}
                />
              </div>

              {/* Content */}
              <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Highlight badge */}
              {service.highlight && (
                <span className="badge-secondary mt-4 inline-block text-xs">
                  Specialty Focus
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
