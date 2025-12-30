import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, MapPin, Moon, Sun, ArrowLeft, Lightbulb, Code2, Rocket, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { RetroGrid } from "@/components/ui/retro-grid"

const AboutMe = () => {
    const { theme, setTheme } = useTheme();

    const journeySteps = [
        {
            icon: Lightbulb,
            title: "The Idea Was Born in Class",
            description: "The journey started during a Computer Networks lecture when we were learning TCP socket programming. In a short break, my classmate Panth and I were talking about how slow and frustrating it was to share large files on campus using the internet. Panth casually said, 'Why don’t we build something that works on the same network?' That one sentence became the foundation of this entire project — using local network speed instead of the internet to move files instantly.",
            color: "from-yellow-500/20 to-yellow-500/5",
            iconColor: "text-yellow-500",
            borderColor: "border-yellow-500/30",
        },
        {
            icon: Code2,
            title: "The First Working Version",
            description: "Over the next few weeks, Panth and I turned that idea into reality. Using Python and the socket programming concepts we were learning in class, we built a simple command-line application that could transfer files between two computers on the same network. It wasn’t perfect, but the moment we saw large files moving at incredible speed without the internet, we knew we had something special. Our classmates started using it, and their excitement pushed us to take it seriously.",
            color: "from-blue-500/20 to-blue-500/5",
            iconColor: "text-blue-500",
            borderColor: "border-blue-500/30",
        },
        {
            icon: Zap,
            title: "From Project to Platform",
            description: "After the prototype proved its value, I took full ownership of transforming it into a production-grade system. I redesigned the architecture, introduced a modern web interface using Flask, implemented chunk-based file transfers for handling massive files, added authentication and role-based permissions, and optimized performance with parallel TCP streams and thread pooling. What began as a classroom experiment became a serious engineering project.",
            color: "from-purple-500/20 to-purple-500/5",
            iconColor: "text-purple-500",
            borderColor: "border-purple-500/30",
        },
        {
            icon: Users,
            title: "Solving Real Problems",
            description: "Today, this system supports file transfers larger than 10GB, handles hundreds of concurrent users, and is actively used in real environments where fast, offline file sharing is critical. What started as a simple student conversation has grown into a powerful platform, proving that real-world products are built by identifying real problems and having the discipline to solve them properly.",
            color: "from-green-500/20 to-green-500/5",
            iconColor: "text-green-500",
            borderColor: "border-green-500/30",
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Content */}
            <div className="relative">
                {/* Header */}
                <header className="border-b border-border/50 backdrop-blur-sm bg-background/80">
                    <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                        <Link to="/" className="flex items-center gap-2">
                            <img
                                src="/logo.ico"
                                alt="FileTransfer Logo"
                                className="h-9 w-9 object-contain"
                            />
                            <span className="font-semibold text-lg">FileTransfer</span>
                        </Link>
                        <div className="flex items-center gap-2">
                            {/* Desktop Back Home Button */}
                            <Button variant="outline" size="sm" asChild className="hidden sm:flex h-9">
                                <Link to="/">
                                    <ArrowLeft className="h-4 w-4 mr-2" />
                                    Back Home
                                </Link>
                            </Button>
                            {/* Mobile Back Home Button */}
                            <Button variant="outline" size="icon" asChild className="flex sm:hidden h-9 w-9">
                                <Link to="/">
                                    <ArrowLeft className="h-4 w-4" />
                                    <span className="sr-only">Back Home</span>
                                </Link>
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
                        </div>
                    </div>
                </header>

                {/* Hero with Retro Grid Background */}
                <div className="relative h-[500px] w-full overflow-hidden bg-background">
                    <RetroGrid className="opacity-100" />

                    <section className="relative z-10 py-16 md:py-24 px-4 bg-gradient-to-b from-background/40 to-background/80">
                        <div className="max-w-4xl mx-auto">
                            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
                                {/* Profile Image */}
                                <div className="relative">
                                    <div className="w-40 h-40 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/30 flex items-center justify-center overflow-hidden">
                                        <img
                                            src="/Priyank.jpg"
                                            alt="Priyank Patel"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-primary flex items-center justify-center border-4 border-background">
                                        <Code2 className="h-6 w-6 text-primary-foreground" />
                                    </div>
                                </div>

                                {/* Profile Info */}
                                <div className="flex-1 text-center md:text-left">
                                    <h1 className="text-4xl md:text-5xl font-black mb-3 text-foreground">
                                        Priyank Patel
                                    </h1>
                                    <p className="text-xl text-primary font-semibold mb-4">
                                        Developer & Creator
                                    </p>
                                    <p className="text-muted-foreground mb-6 max-w-2xl">
                                        Building real-world systems with real impact. This File Transfer platform enables fast,
                                        secure, offline sharing of large files across local networks with enterprise-level performance.
                                    </p>

                                    {/* Contact Info */}
                                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-6">
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <MapPin className="h-4 w-4 text-primary" />
                                            <span>Gandhinagar, Gujarat, India</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <Mail className="h-4 w-4 text-primary" />
                                            <a href="mailto:patelpriyank2626@gmail.com" className="hover:text-primary transition-colors">
                                                patelpriyank2626@gmail.com
                                            </a>
                                        </div>
                                    </div>

                                    {/* Social Links */}
                                    <div className="flex items-center justify-center md:justify-start gap-3">
                                        <Button variant="outline" size="sm" asChild>
                                            <a href="https://github.com/Patel-Priyank-1602" target="_blank" rel="noopener noreferrer" className="gap-2">
                                                <Github className="h-4 w-4" />
                                                GitHub
                                            </a>
                                        </Button>
                                        <Button variant="outline" size="sm" asChild>
                                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="gap-2">
                                                <Linkedin className="h-4 w-4" />
                                                LinkedIn
                                            </a>
                                        </Button>
                                        <Button variant="default" size="sm" asChild>
                                            <Link to="/#contact">
                                                <Mail className="h-4 w-4" />
                                                Contact Me
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Origin Story Banner */}
                <section className="py-8 px-4 bg-primary/5 border-y border-primary/20">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-sm font-semibold text-primary mb-2">ORIGIN STORY</p>
                        <p className="text-muted-foreground">
                            <span className="text-foreground font-medium">From a Computer Networks class discussion with Panth</span> to a production-ready platform.
                        </p>
                    </div>
                </section>

                {/* Journey Section */}
                <section className="py-20 px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                                How an Idea Became a Project
                            </h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                The journey from a classroom conversation to building a solution that powers file sharing across organizations.
                            </p>
                        </div>

                        <div className="space-y-8">
                            {journeySteps.map((step, index) => (
                                <div
                                    key={index}
                                    className="relative"
                                >
                                    {/* Connection Line */}
                                    {index < journeySteps.length - 1 && (
                                        <div className="absolute left-6 top-20 w-0.5 h-[calc(100%+2rem)] bg-gradient-to-b from-primary/50 to-transparent md:left-8" />
                                    )}

                                    {/* Step Card */}
                                    <div className="relative flex gap-6">
                                        {/* Icon */}
                                        <div className={`flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${step.color} border-2 ${step.borderColor} flex items-center justify-center relative z-10`}>
                                            <step.icon className={`h-6 w-6 md:h-8 md:w-8 ${step.iconColor}`} />
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 pb-8">
                                            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover:border-primary/50 transition-all duration-300 group">
                                                <div className="flex items-start justify-between mb-3">
                                                    <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                                                        {step.title}
                                                    </h3>
                                                </div>
                                                <p className="text-muted-foreground leading-relaxed">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Acknowledgment Section */}
                <section className="py-16 px-4 bg-card/30 backdrop-blur-sm border-y border-border/50">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">

                            {/* Photo + Info Row */}
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">

                                {/* Photo */}
                                <div className="relative">
                                    <div className="w-24 h-24 rounded-full border-2 border-primary/40 overflow-hidden bg-primary/10">
                                        <img
                                            src="/Panth.jpg"
                                            alt="Panth"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="absolute -bottom-2 -right-2 w-9 h-9 rounded-full bg-primary flex items-center justify-center border-4 border-background">
                                        <Users className="h-4 w-4 text-primary-foreground" />
                                    </div>
                                </div>

                                {/* Name + Buttons */}
                                <div className="text-center sm:text-left">
                                    <p className="text-lg font-semibold text-foreground">Panth</p>
                                    <p className="text-sm text-muted-foreground mb-2">
                                        Idea Catalyst
                                    </p>

                                    <div className="flex items-center justify-center sm:justify-start gap-3">
                                        <a
                                            href="https://github.com/PanthPtl2005"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-3 py-1.5 text-sm rounded-lg border border-border/50 hover:border-primary/50 hover:text-primary transition-all"
                                        >
                                            GitHub
                                        </a>

                                        <a
                                            href="https://www.linkedin.com/in/panth-patel2005/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-3 py-1.5 text-sm rounded-lg border border-border/50 hover:border-primary/50 hover:text-primary transition-all"
                                        >
                                            LinkedIn
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold mb-3 text-foreground">
                                Special Thanks
                            </h3>

                            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
                                This project wouldn't exist without <span className="text-primary font-semibold">Panth</span>, who sparked the initial idea during our Computer Networks class.
                                What began as a simple "why don't we build this?" conversation turned into a journey of learning,
                                building, and creating something meaningful together.
                            </p>

                        </div>
                    </div>
                </section>


                {/* CTA Section */}
                <section className="py-20 px-4 bg-gradient-to-b from-background to-card/30">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                            Let's Build Something Together
                        </h2>
                        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Have an idea or want to collaborate? I'm always interested in working on meaningful projects
                            that solve real problems. Let's connect!
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button asChild size="lg" className="gap-2">
                                <Link to="/#contact">
                                    <Mail className="h-5 w-5" />
                                    Get in Touch
                                </Link>
                            </Button>
                            <Button variant="outline" size="lg" asChild className="gap-2">
                                <a href="https://github.com/Patel-Priyank-1602/File_Transfer.git" target="_blank" rel="noopener noreferrer">
                                    <Github className="h-5 w-5" />
                                    View on GitHub
                                </a>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="border-t border-border/50 py-8 px-4 backdrop-blur-sm bg-background/80">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                        <p>Copyright © {new Date().getFullYear()} Priyank Patel. All rights reserved.</p>
                        <div className="flex items-center gap-4">
                            <a href="https://github.com/Patel-Priyank-1602" className="hover:text-foreground transition-colors">GitHub</a>
                            <a href="https://linkedin.com" className="hover:text-foreground transition-colors">LinkedIn</a>
                            <a href="mailto:patelpriyank2626@gmail.com" className="hover:text-foreground transition-colors">Email</a>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default AboutMe;