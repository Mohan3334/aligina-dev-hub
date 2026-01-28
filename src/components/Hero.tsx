import { Github, Linkedin, Mail, Play } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const badges = [
  "3+ Years",
  "Microservices",
  "AWS + Azure",
  "Spring Boot",
  "React/Angular",
];

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-hero-from via-hero-via to-hero-to">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large blue blob */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl animate-pulse-soft" />
        
        {/* Yellow accent blob */}
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-secondary/10 blur-3xl animate-pulse-soft" style={{ animationDelay: "1s" }} />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-32 left-[15%] w-16 h-16 border-4 border-primary/20 rounded-2xl rotate-12 animate-float" />
        <div className="absolute top-48 right-[20%] w-8 h-8 bg-secondary/40 rounded-lg rotate-45 animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-32 left-[10%] w-12 h-12 border-4 border-secondary/30 rounded-full animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-[60%] right-[10%] w-6 h-6 bg-primary/30 rounded-full animate-float" style={{ animationDelay: "3s" }} />
        
        {/* Decorative lines */}
        <svg className="absolute top-20 left-[5%] w-32 h-32 text-primary/10" viewBox="0 0 100 100">
          <path d="M20,50 Q50,20 80,50 T140,50" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
        <svg className="absolute bottom-40 right-[5%] w-24 h-24 text-secondary/20" viewBox="0 0 100 100">
          <path d="M10,50 Q40,20 70,50" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        </svg>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent" />

      <div className="section-container relative pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Greeting Badge */}
            <div className="fade-in-up opacity-0 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border shadow-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-indicator opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-indicator"></span>
              </span>
              <span className="text-sm font-medium text-foreground">Available for opportunities</span>
            </div>

            {/* Main Headline */}
            <h1 className="fade-in-up opacity-0 stagger-1 font-heading text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold text-foreground leading-[1.1] mb-6">
              Hi, I'm{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  Mohana Krishna
                </span>
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-secondary" viewBox="0 0 200 12" preserveAspectRatio="none">
                  <path d="M0,8 Q50,0 100,8 T200,8" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
              <br />
              <span className="text-foreground">Full Stack Developer</span>
            </h1>

            {/* Subheadline */}
            <p className="fade-in-up opacity-0 stagger-2 text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Building <span className="font-semibold text-foreground">scalable</span>, <span className="font-semibold text-foreground">secure</span>, and <span className="font-semibold text-foreground">high-performance</span> web applications with microservices architecture and cloud platforms.
            </p>

            {/* CTA Buttons */}
            <div className="fade-in-up opacity-0 stagger-3 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a 
                href="#contact" 
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-primary-foreground bg-gradient-to-r from-primary to-blue-600 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300"
              >
                Contact Me
                <Mail size={18} className="group-hover:rotate-12 transition-transform" />
              </a>
              <a 
                href="#projects" 
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold border-2 border-border text-foreground bg-card/80 backdrop-blur-sm hover:border-primary hover:text-primary hover:-translate-y-1 transition-all duration-300"
              >
                <Play size={18} className="group-hover:scale-110 transition-transform" />
                View Projects
              </a>
            </div>

            {/* Tech Badges */}
            <div className="fade-in-up opacity-0 stagger-4 flex flex-wrap gap-2 justify-center lg:justify-start mb-8">
              {badges.map((badge, index) => (
                <span 
                  key={badge} 
                  className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-card border border-border shadow-sm hover:shadow-md hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-200"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* Social Links */}
            <div className="fade-in-up opacity-0 stagger-4 flex items-center gap-6 justify-center lg:justify-start">
              <span className="text-sm text-muted-foreground">Find me on</span>
              <div className="flex gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-xl bg-card border border-border shadow-sm hover:shadow-md hover:border-primary hover:-translate-y-1 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a
                  href="https://www.linkedin.com/in/mohana-krishna-aligina-714b15235/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-xl bg-card border border-border shadow-sm hover:shadow-md hover:border-primary hover:-translate-y-1 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a
                  href="mailto:aliginamohan@gmail.com"
                  className="group p-3 rounded-xl bg-card border border-border shadow-sm hover:shadow-md hover:border-primary hover:-translate-y-1 transition-all duration-300"
                  aria-label="Email"
                >
                  <Mail size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image Section */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-6 rounded-full border-2 border-dashed border-primary/20 animate-[spin_20s_linear_infinite]" />
              
              {/* Background blobs */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-[2rem] rotate-6 blur-sm" />
              <div className="absolute -inset-4 bg-gradient-to-tr from-secondary/30 to-primary/10 rounded-[2rem] -rotate-6 blur-sm" />
              
              {/* Main image container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[360px] lg:h-[360px] rounded-[2rem] overflow-hidden border-4 border-card shadow-2xl shadow-primary/10">
                <img
                  src={profilePhoto}
                  alt="Mohana Krishna Aligina"
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
              </div>

              {/* Experience badge */}
              <div className="absolute -bottom-3 -right-3 bg-card rounded-2xl p-4 shadow-xl border border-border animate-float" style={{ animationDelay: "0.5s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center shadow-lg shadow-secondary/30">
                    <span className="font-heading font-bold text-secondary-foreground text-2xl">3+</span>
                  </div>
                  <div>
                    <p className="font-heading font-bold text-foreground text-lg">Years</p>
                    <p className="text-sm text-muted-foreground">Experience</p>
                  </div>
                </div>
              </div>

              {/* Tech stack floating badge */}
              <div className="absolute -top-2 -left-4 bg-card rounded-xl px-4 py-2 shadow-lg border border-border animate-float" style={{ animationDelay: "1.5s" }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">⚡</span>
                  </div>
                  <span className="font-medium text-sm text-foreground">Full Stack</span>
                </div>
              </div>

              {/* Cloud badge */}
              <div className="absolute top-1/2 -left-6 bg-card rounded-xl px-3 py-2 shadow-lg border border-border animate-float hidden lg:flex" style={{ animationDelay: "2s" }}>
                <span className="text-xs font-medium text-muted-foreground">☁️ AWS + Azure</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2">
          <div className="flex flex-col items-center gap-1 text-muted-foreground">
            <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
            <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
              <div className="w-1.5 h-3 rounded-full bg-primary animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
