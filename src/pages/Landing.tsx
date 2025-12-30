import { Link } from "react-router-dom";
import { ArrowRight, Github, Server, Zap, Shield, Upload, Users, Search, Terminal, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { useEffect, useRef, useState } from "react";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mwvkzdnv", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        alert("There was a problem submitting your form. Please try again.");
      }
    } catch (error) {
      alert("There was a problem submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center p-8 bg-primary/10 rounded-lg border border-primary/50">
        <h3 className="text-xl font-semibold text-primary mb-2">Thank you!</h3>
        <p className="text-muted-foreground">We've received your message and will get back to you soon.</p>
        <Button 
          variant="outline" 
          className="mt-4"
          onClick={() => setIsSubmitted(false)}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
          placeholder="Tell us what you're thinking..."
        />
      </div>

      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full"
        size="lg"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

const Landing = () => {
  const { theme, setTheme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });

  // Handle scroll to contact section on page load if hash is present
  useEffect(() => {
    if (window.location.hash === '#contact') {
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const updateCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };

    const draw = () => {
      if (!ctx || !canvas) return;
      
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      ctx.clearRect(0, 0, width, height);

      const gridSize = 50;
      const glowRadius = 150; // Reduced from 200

      // Draw base grid
      ctx.strokeStyle = theme === "dark" ? "rgba(255, 255, 255, 0.03)" : "rgba(0, 0, 0, 0.03)";
      ctx.lineWidth = 1;

      // Vertical lines
      for (let x = 0; x <= width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y <= height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw cursor glow effect
      if (mousePos.x >= 0 && mousePos.y >= 0 && mousePos.x <= width && mousePos.y <= height) {
        // Create radial gradient for glow - reduced opacity
        const gradient = ctx.createRadialGradient(
          mousePos.x, mousePos.y, 0,
          mousePos.x, mousePos.y, glowRadius
        );
        
        gradient.addColorStop(0, "rgba(16, 185, 129, 0.12)"); // Reduced from 0.2
        gradient.addColorStop(0.3, "rgba(16, 185, 129, 0.06)"); // Reduced from 0.1
        gradient.addColorStop(0.6, "rgba(16, 185, 129, 0.02)"); // Reduced from 0.03
        gradient.addColorStop(1, "rgba(16, 185, 129, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mousePos.x, mousePos.y, glowRadius, 0, Math.PI * 2);
        ctx.fill();

        // Highlight nearby grid lines - reduced opacity
        ctx.lineWidth = 1.5;
        
        // Find grid intersections near cursor
        const startX = Math.floor((mousePos.x - glowRadius) / gridSize) * gridSize;
        const endX = Math.ceil((mousePos.x + glowRadius) / gridSize) * gridSize;
        const startY = Math.floor((mousePos.y - glowRadius) / gridSize) * gridSize;
        const endY = Math.ceil((mousePos.y + glowRadius) / gridSize) * gridSize;

        // Draw highlighted vertical lines
        for (let x = startX; x <= endX; x += gridSize) {
          if (x < 0 || x > width) continue;
          const distance = Math.abs(x - mousePos.x);
          const opacity = Math.max(0, 1 - distance / glowRadius) * 0.25; // Reduced from 0.4
          
          ctx.strokeStyle = `rgba(16, 185, 129, ${opacity})`;
          ctx.beginPath();
          ctx.moveTo(x, Math.max(0, startY));
          ctx.lineTo(x, Math.min(height, endY));
          ctx.stroke();
        }

        // Draw highlighted horizontal lines
        for (let y = startY; y <= endY; y += gridSize) {
          if (y < 0 || y > height) continue;
          const distance = Math.abs(y - mousePos.y);
          const opacity = Math.max(0, 1 - distance / glowRadius) * 0.25; // Reduced from 0.4
          
          ctx.strokeStyle = `rgba(16, 185, 129, ${opacity})`;
          ctx.beginPath();
          ctx.moveTo(Math.max(0, startX), y);
          ctx.lineTo(Math.min(width, endX), y);
          ctx.stroke();
        }
      }
    };

    updateCanvasSize();
    draw();

    const handleResize = () => {
      updateCanvasSize();
      draw();
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => {
      setMousePos({ x: -100, y: -100 });
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [theme, mousePos]);

  const features = [
    {
      icon: Upload,
      title: "Parallel File Transfer",
      description: "Chunk-based uploads and multi-stream downloads supporting files over 10GB with real-time progress tracking.",
    },
    {
      icon: Shield,
      title: "Secure & Offline",
      description: "Role-based access control with session authentication. Works completely offline on local networks.",
    },
    {
      icon: Users,
      title: "Real-Time Collaboration",
      description: "Global chat system with presence tracking. See who's online and communicate instantly.",
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Parallel TCP streams, thread pool execution, and streaming responses for maximum throughput.",
    },
    {
      icon: Search,
      title: "Smart Search",
      description: "Search by filename, user, or extension. Sort by name, size, date, or downloads with advanced filtering.",
    },
    {
      icon: Terminal,
      title: "Admin Controls",
      description: "User moderation, file management, activity logging, and comprehensive monitoring tools.",
    },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Grid Background Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 pointer-events-none z-0"
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-border/50 backdrop-blur-sm bg-background/80">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
                <img
                  src="/logo.png"
                  alt="FileTransfer Logo"
                  className="h-9 w-9 object-contain"
                />
              <span className="font-semibold text-lg">FileTransfer</span>
            </Link>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" asChild className="hidden sm:flex h-9">
                <Link to="/docs/introduction">Documentation</Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="h-9 w-9"
              >
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/Patel-Priyank-1602/File_Transfer.git" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="py-20 md:py-32 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/80 backdrop-blur-sm text-sm text-muted-foreground mb-6">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
              Production-Grade Solution
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-foreground">
              Local Network File Transfer
              <span className="text-primary"> Server</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              A high-performance file sharing and collaboration system built with Python and Flask. 
              Secure, reliable, and fully offline.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link to="/docs/introduction">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://github.com/Patel-Priyank-1602/File_Transfer.git" target="_blank" rel="noopener noreferrer" className="gap-2">
                  <Github className="h-4 w-4" />
                  Star on GitHub
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-4 border-t border-border/50 bg-card/30 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Key Features</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Everything you need for enterprise-grade file sharing on local networks.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Code Preview */}
        <section className="py-20 px-4 border-t border-border/50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Quick Setup</h2>
              <p className="text-muted-foreground">Get started in minutes with a simple installation.</p>
            </div>
            
            <div className="bg-secondary/50 backdrop-blur-sm border border-border/50 rounded-lg overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-secondary/80">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <span className="h-3 w-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-sm text-muted-foreground">Terminal</span>
              </div>
              <pre className="p-6 text-sm overflow-x-auto">
                <code className="text-foreground">
                  <span className="text-muted-foreground"># Clone the repository</span>{"\n"}
                  <span className="text-primary">git clone</span> {"https://github.com/Patel-Priyank-1602/File_Transfer.git"}{"\n"}
                  <span className="text-primary">cd</span> File_Transfer{"\n\n"}
                  <span className="text-muted-foreground"># Install dependencies</span>{"\n"}
                  <span className="text-primary">pip install</span> -r requirements.txt{"\n\n"}
                  <span className="text-muted-foreground"># Start the server</span>{"\n"}
                  <span className="text-primary">python</span> app.py
                </code>
              </pre>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="py-20 px-4 border-t border-border/50 bg-card/30 backdrop-blur-sm scroll-mt-20">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Send us a message</h2>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you soon.
              </p>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 md:p-8">
              <ContactForm />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 border-t border-border/50">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-8">
              Explore the documentation to learn how to set up and use the file transfer server.
            </p>
            <Button asChild size="lg" className="gap-2">
              <Link to="/docs/introduction">
                Read the Documentation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border/50 py-8 px-4 backdrop-blur-sm bg-background/80">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>Copyright © {new Date().getFullYear()} Local Network File Transfer Server</p>
            <div className="flex items-center gap-4">
              <a href="https://github.com/Patel-Priyank-1602/File_Transfer.git" className="hover:text-foreground transition-colors">GitHub</a>
              <Link to="/docs/introduction" className="hover:text-foreground transition-colors">Documentation</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Landing;