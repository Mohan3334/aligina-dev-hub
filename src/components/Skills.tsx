import { Code, Layout, Server, Cloud, Database, Shield } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Programming Languages",
    skills: ["Java", "C#", "JavaScript", "TypeScript", "Python", "SQL", "HTML5", "CSS3"],
  },
  {
    icon: Layout,
    title: "Frontend",
    skills: ["React.js", "Angular", "Vue.js", "ES6+", "Bootstrap", "Tailwind CSS", "Responsive UI"],
  },
  {
    icon: Server,
    title: "Backend",
    skills: ["Spring Boot", ".NET/ASP.NET", "Node.js", "Express", "Django", "Flask", "REST APIs", "Microservices"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: ["AWS (EC2, S3, Lambda)", "Azure", "Docker", "Kubernetes", "CI/CD", "Jenkins", "GitHub Actions"],
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["Oracle", "SQL Server", "MySQL", "PostgreSQL", "MongoDB", "Snowflake", "Query Optimization"],
  },
  {
    icon: Shield,
    title: "Security & Other",
    skills: ["OAuth 2.0", "JWT", "RBAC", "SSL/TLS", "System Design", "Performance Optimization", "Agile/Scrum"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="section-label">Skills</span>
          <h2 className="section-title">Technical Expertise</h2>
          <p className="section-subtitle mx-auto">
            Core focus: Scalability, Security, and Performance Optimization
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div key={category.title} className="card-base">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <category.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 flex-wrap justify-center">
            <span className="text-muted-foreground">Core strengths:</span>
            {["Scalable Architecture", "Secure Systems", "Performance Optimization"].map((strength) => (
              <span key={strength} className="badge-secondary">
                {strength}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
