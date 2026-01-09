import { Github, ArrowLeft, Terminal, Download, Play, Settings, CheckCircle2, AlertCircle, Copy, ExternalLink, Folder, FileCode, Server, Wifi, Package, MapPin, Sliders, FolderTree, Network, Power, ShieldCheck, LayoutDashboard, QrCode } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/components/ThemeProvider";

const SetupGuide = () => {
    const { theme: currentTheme } = useTheme();
    const theme = currentTheme === "system"
        ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
        : currentTheme;
    const [copiedStep, setCopiedStep] = useState(null);
    const [activeTab, setActiveTab] = useState({}); // Track active tab for each step

    const copyToClipboard = (text, stepIndex) => {
        navigator.clipboard.writeText(text);
        setCopiedStep(stepIndex);
        setTimeout(() => setCopiedStep(null), 2000);
    };

    const setupSteps = [
        {
            icon: Download,
            title: "Clone the Repository",
            description: "First, clone the FileTransfer repository from GitHub to your local machine...",
            command: "git clone https://github.com/Patel-Priyank-1602/File_Transfer.git\ncd File_Transfer",
            image: "/setup/clone.png",
            tips: [
                "Make sure Git is installed on your system",
                "Choose a directory where you want to store the project"
            ]
        },
        {
            icon: Package ,
            title: "Install Dependencies",
            description: "Install all required Python packages...",
            command: "pip install -r requirements.txt",
            image: "/setup/req.png",
            tips: [
                "Python 3.8 or higher is required",
                "Consider using a virtual environment for isolation"
            ]
        },
        {
            icon: MapPin ,
            title: "Find Your IP Address",
            description: "Locate your local network IP address so other devices can connect to your server.",
            command: "ipconfig   // Windows\nifconfig   // macOS / Linux",
            image: "/setup/ip.png",
            tips: [
                "Open Command Prompt (Windows) or Terminal (macOS/Linux)",
                "Run the command and find the **IPv4 Address**",
                "Make sure you're checking the adapter you're actually using (Wi-Fi or Ethernet)",
                "This IP will be used by other devices to access your server"
            ]
        },
        {
            icon: Sliders ,
            title: "Environment Configuration",
            description: "Create a `.env` file in the project root and configure the application settings.",
            command: "# --- Network / Hotspot Settings ---\nHOTSPOT_SSID=YourHotspotName\nHOTSPOT_PASSWORD=YourHotspotPassword\nHOTSPOT_IP=YourHotspotIP\nPORT=8000\n\n# --- Admin Credentials ---\nADMIN_USERNAME=admin\nADMIN_PASSWORD=your_secure_password\n\n# --- Application Settings ---\nSECRET_KEY=change_this_to_a_random_secure_value\nUPLOAD_FOLDER=shared_files",
            image: "/setup/env.png",
            tips: [
                "Never share your `.env` file publicly or commit it to GitHub",
                "Restart the server after modifying the `.env` file",
                "Make sure the `.env` file is placed in the root directory of the project"
            ]
        },
        {
            icon: FolderTree,
            title: "Verify Project Folder Structure",
            description: "Make sure all required project files and folders are present before running the server.",
            image: "/setup/fs.png",
            tips: [
                "Confirm that `app.py`, `requirements.txt`, `.env`, and the `templates` folder exist",
                "Your folder structure should match the project documentation",
                "A correct structure prevents most startup errors"
            ]
        },
        {
            icon: Network ,
            title: "Configure Network Connection",
            description: "Choose your network type and configure the application accordingly.",
            hasOptions: true,
            options: [
                {
                    id: "ethernet",
                    label: "Using Ethernet",
                    icon: Server,
                    tips: [
                        "Turn ON your laptop hotspot (this is required)",
                        "Ethernet provides the most stable and high-speed connection",
                        "Use the IP address of your Ethernet adapter in the `.env` file",
                        "Default port is `8000` — change it only if necessary",
                        "Restart the application after making configuration changes"
                    ]
                },
                {
                    id: "wifi",
                    label: "Using Wi-Fi",
                    icon: Wifi,
                    tips: [
                        "Enter the correct Wi-Fi IP address and password in the `.env` file",
                        "Ensure all devices are connected to the same Wi-Fi network",
                        "Use the IP address of your Wi-Fi adapter",
                        "Wi-Fi may offer slightly lower performance compared to Ethernet",
                        "Restart the application after making configuration changes"
                    ]
                }
            ]
        },
        {
            icon: Power ,
            title: "Start the Server",
            description: "Launch the FileTransfer server and make it accessible on your local network.",
            image: "/setup/rng.png",
            command: "python app.py",
            tips: [
                "Make sure all dependencies are installed before starting the server",
                "Ensure your `.env` file is properly configured",
                "Server Dashboard: open `http://127.0.0.1:8000` in your browser",
                "Client File Access: open `http://YOUR_IP:8000/files` on other devices (e.g. `http://10.30.94.125:8000/files`)",
                "Keep this terminal window open while the server is running"
            ]
        },
        {
            icon: ShieldCheck ,
            title: "Login to the Admin Dashboard",
            description: "Access the admin panel to manage users, files, and system activity.",
            image: "/setup/login.png",
            tips: [
                "Open the server dashboard at `http://127.0.0.1:8000`",
                "Log in using the admin credentials configured in your `.env` file",
                "Enter your display name — this helps identify user activity and chat messages",
                "The admin dashboard gives you full control over users, files, and monitoring"
            ]
        },
        {
            icon: LayoutDashboard ,
            title: "Open Admin Dashboard",
            description: "Use the FileTransfer Admin Dashboard to manage users, files, and monitor system activity.",
            image: "/setup/server.png",
            tips: [
                "Step 1: Connect devices using the **Connect to Hotspot** QR code (skip this if already on the same network)",
                "Step 2: Connect client devices using the **Open File Server** QR code or copy the file server URL shown at the top of the File Management page",
                "The image shown here is only an example to demonstrate how the QR codes and URL will appear in the dashboard",
                "For full control and advanced features, refer to the FileTransfer Server or Dashboard documentation at **lftdocs.netlify.app**"
            ]
        },
        {
            icon: QrCode ,
            title: "Open Client Dashboard using QR Code or URL",
            description: "Access the FileTransfer Client Dashboard to upload, download, and manage shared files.",
            image: "/setup/client.png",
            tips: [
                "Before opening the client dashboard, you will see a login page — enter the credentials from your `.env` file and provide a display name",
                "For complete usage instructions and advanced features, refer to the FileTransfer Client documentation at **lftdocs.netlify.app**"
            ]
        },
    ];

    const requirements = [
        { icon: Terminal, text: "Python 3.8 or higher" },
        { icon: Folder, text: "Git installed" },
        { icon: Wifi, text: "Local network connection" },
        { icon: Server, text: "At least 1GB free disk space" }
    ];

    const troubleshooting = [
        {
            issue: "Port Already in Use",
            solution: "Change the port number in config.py or use: python app.py --port 8080"
        },
        {
            issue: "Module Not Found Error",
            solution: "Reinstall dependencies: pip install -r requirements.txt --force-reinstall"
        },
        {
            issue: "Permission Denied",
            solution: "Run with appropriate permissions or change the upload directory path"
        },
        {
            issue: "Cannot Access from Other Devices",
            solution: "Check firewall settings and ensure all devices are on the same network"
        }
    ];

    // Initialize active tabs for steps with options
    const getActiveOption = (stepIndex) => {
        if (activeTab[stepIndex]) {
            return activeTab[stepIndex];
        }
        return setupSteps[stepIndex].hasOptions ? setupSteps[stepIndex].options[0].id : null;
    };

    const getCurrentStepContent = (step, stepIndex) => {
        if (step.hasOptions) {
            const activeOptionId = getActiveOption(stepIndex);
            return step.options.find(opt => opt.id === activeOptionId) || step.options[0];
        }
        return step;
    };

    return (
        <div className={`min-h-screen ${theme === 'dark' ? 'bg-[#18181B] text-white' : 'bg-white text-black'}`}>
            {/* Header */}
            <header className={`border-b ${theme === 'dark' ? 'border-zinc-800 bg-[#18181B]' : 'border-gray-200 bg-white/95'} backdrop-blur-sm sticky top-0 z-50`}>
                <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <img src="/logo.webp" alt="FileTransfer Logo" className="h-9 w-9 rounded-lg" />
                        <span className="font-semibold text-lg">FileTransfer</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <a href="/docs/introduction" className={`hidden sm:flex items-center gap-2 px-4 py-2 text-sm rounded-lg border ${theme === 'dark' ? 'border-zinc-700 hover:border-zinc-600' : 'border-gray-300 hover:border-gray-400'} transition-colors`}>
                            <ArrowLeft className="h-4 w-4" />
                            Back Home
                        </a>
                        <a href="/docs/introduction" className={`flex sm:hidden items-center justify-center h-9 w-9 rounded-lg border ${theme === 'dark' ? 'border-zinc-700 hover:border-zinc-600' : 'border-gray-300 hover:border-gray-400'} transition-colors`}>
                            <ArrowLeft className="h-4 w-4" />
                        </a>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <div className={`relative overflow-hidden ${theme === 'dark' ? 'bg-[#18181B]' : 'bg-white'}`}>
                <div className={`absolute inset-0 ${theme === 'dark' ? 'opacity-20' : 'opacity-10'}`} style={{
                    backgroundImage: 'linear-gradient(to right, #12D393 1px, transparent 1px), linear-gradient(to bottom, #12D393 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}></div>
                <section className="relative z-10 py-16 md:py-24 px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-black mb-4">
                            Setup Guide
                        </h1>
                        <p className={`text-xl ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-6 max-w-2xl mx-auto`}>
                            Get FileTransfer up and running in minutes. Follow these simple steps to install and configure the application on your system.
                        </p>
                        <a
                            href="https://github.com/Patel-Priyank-1602/File_Transfer.git"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#12D393] text-black rounded-lg font-semibold hover:bg-[#10B87E] transition-all shadow-lg hover:shadow-[#12D393]/30"
                        >
                            <Github className="h-5 w-5" />
                            View on GitHub
                        </a>
                    </div>
                </section>
            </div>

            {/* Requirements Section */}
            <section className={`py-12 px-4 border-y relative overflow-hidden ${theme === 'dark' ? 'bg-[#18181B] border-zinc-800' : 'bg-gray-50 border-gray-200'}`}>
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold mb-3">
                            Before You Begin
                        </h2>
                        <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                            Make sure you have these prerequisites installed
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {requirements.map((req, index) => (
                            <div
                                key={index}
                                className={`flex items-center gap-3 p-4 rounded-lg border ${theme === 'dark' ? 'bg-black/50 border-zinc-800 hover:border-[#12D393]' : 'bg-white border-gray-200 hover:border-[#12D393]'} transition-all`}
                            >
                                <div className="w-10 h-10 rounded-lg bg-[#12D393]/10 flex items-center justify-center flex-shrink-0">
                                    <req.icon className="h-5 w-5 text-[#12D393]" />
                                </div>
                                <span className="font-medium">{req.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Setup Steps */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Installation Steps
                        </h2>
                        <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
                            Follow these steps carefully to set up FileTransfer on your system
                        </p>
                    </div>

                    <div className="space-y-12">
                        {setupSteps.map((step, index) => {
                            const currentContent = getCurrentStepContent(step, index);

                            return (
                                <div key={index} className="relative">
                                    {/* Connection Line */}
                                    {index < setupSteps.length - 1 && (
                                        <div className="absolute left-6 top-20 w-0.5 h-[calc(100%+3rem)] bg-gradient-to-b from-[#12D393] to-transparent md:left-8 hidden sm:block opacity-30" />
                                    )}

                                    <div className="relative flex flex-col sm:flex-row gap-6">
                                        <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-xl bg-[#12D393]/10 border-2 border-[#12D393] flex flex-col items-center justify-center relative z-10">
                                            <span className="text-[10px] md:text-xs font-bold tracking-wide text-[#12D393] leading-none">
                                                STEP {index + 1}
                                            </span>
                                            <step.icon className="h-5 w-5 md:h-7 md:w-7 text-[#12D393] mt-0.5" />
                                        </div>


                                        {/* Content */}
                                        <div className="flex-1">
                                            <div className={`backdrop-blur-sm border rounded-lg overflow-hidden ${theme === 'dark' ? 'bg-zinc-900/50 border-zinc-800 hover:border-[#12D393]' : 'bg-white border-gray-200 hover:border-[#12D393]'} transition-all duration-300 group`}>
                                                {/* Header */}
                                                <div className="p-6 pb-4">
                                                    <h3 className="text-xl md:text-2xl font-bold group-hover:text-[#12D393] transition-colors mb-3">
                                                        {step.title}
                                                    </h3>
                                                    <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
                                                        {step.description}
                                                    </p>
                                                </div>

                                                {/* Tab Toggle (if step has options) */}
                                                {step.hasOptions && (
                                                    <div className="px-6 pb-4">
                                                        <div className={`inline-flex rounded-lg p-1 ${theme === 'dark' ? 'bg-black/50 border border-zinc-800' : 'bg-gray-100 border border-gray-200'}`}>
                                                            {step.options.map((option) => {
                                                                const isActive = getActiveOption(index) === option.id;
                                                                const OptionIcon = option.icon;

                                                                return (
                                                                    <button
                                                                        key={option.id}
                                                                        onClick={() => setActiveTab({ ...activeTab, [index]: option.id })}
                                                                        className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${isActive
                                                                            ? 'bg-[#12D393] text-black shadow-sm'
                                                                            : theme === 'dark'
                                                                                ? 'text-gray-400 hover:text-white'
                                                                                : 'text-gray-600 hover:text-black'
                                                                            }`}
                                                                    >
                                                                        <OptionIcon className="h-4 w-4" />
                                                                        {option.label}
                                                                    </button>
                                                                );
                                                            })}
                                                        </div>
                                                    </div>
                                                )}

                                                {currentContent.image && (
                                                    <div className="px-6 pb-6">
                                                        <div className={`relative w-full aspect-[16/7] rounded-xl overflow-hidden border shadow-xl 
            ${theme === 'dark' ? 'bg-black border-zinc-800' : 'bg-gray-100 border-gray-200'}`}>

                                                            <img
                                                                src={currentContent.image}
                                                                alt={step.title}
                                                                className="w-full h-full object-cover"
                                                                loading="lazy"
                                                            />

                                                            {/* Soft overlay for premium look */}
                                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none" />
                                                        </div>
                                                    </div>
                                                )}


                                                {/* Command Box */}
                                                {currentContent.command && (
                                                    <div className="px-6 pb-4">
                                                        <div className="relative">
                                                            <div className={`rounded-lg p-4 font-mono text-sm border ${theme === 'dark' ? 'bg-black/50 border-zinc-800 text-gray-300' : 'bg-gray-50 border-gray-200 text-gray-800'}`}>
                                                                <pre className="overflow-x-auto whitespace-pre-wrap break-all">
                                                                    {currentContent.command}
                                                                </pre>
                                                            </div>
                                                            <button
                                                                className={`absolute top-2 right-2 h-8 w-8 rounded transition-colors flex items-center justify-center ${theme === 'dark' ? 'hover:bg-zinc-800' : 'hover:bg-gray-200'}`}
                                                                onClick={() => copyToClipboard(currentContent.command, index)}
                                                            >
                                                                {copiedStep === index ? (
                                                                    <CheckCircle2 className="h-4 w-4 text-[#12D393]" />
                                                                ) : (
                                                                    <Copy className="h-4 w-4" />
                                                                )}
                                                            </button>
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Tips */}
                                                {currentContent.tips && currentContent.tips.length > 0 && (
                                                    <div className="px-6 pb-6">
                                                        <div className="bg-[#12D393]/5 rounded-lg p-4 border border-[#12D393]/20">
                                                            <p className="text-sm font-semibold text-[#12D393] mb-2 flex items-center gap-2">
                                                                <AlertCircle className="h-4 w-4" />
                                                                Description
                                                            </p>
                                                            <ul className="space-y-1">
                                                                {currentContent.tips.map((tip, tipIndex) => (
                                                                    <li key={tipIndex} className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} flex items-start gap-2`}>
                                                                        <span className="text-[#12D393] mt-1">•</span>
                                                                        <span>{tip}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Troubleshooting Section */}
            <section className={`py-16 px-4 border-y ${theme === 'dark' ? 'bg-[#18181B] border-zinc-800' : 'bg-gray-50 border-gray-200'}`}>
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold mb-3">
                            Troubleshooting
                        </h2>
                        <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                            Common issues and their solutions
                        </p>
                    </div>
                    <div className="space-y-4">
                        {troubleshooting.map((item, index) => (
                            <div
                                key={index}
                                className={`backdrop-blur-sm border rounded-lg p-6 transition-all ${theme === 'dark' ? 'bg-black/50 border-zinc-800 hover:border-[#12D393]' : 'bg-white border-gray-200 hover:border-[#12D393]'}`}
                            >
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-[#12D393]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <AlertCircle className="h-4 w-4 text-[#12D393]" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold mb-2">
                                            {item.issue}
                                        </h3>
                                        <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                                            {item.solution}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#12D393]/10 border-2 border-[#12D393] mb-6">
                        <CheckCircle2 className="h-8 w-8 text-[#12D393]" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Start Transferring?
                    </h2>
                    <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-8 max-w-2xl mx-auto`}>
                        You're all set! Start sharing files at blazing-fast speeds across your local network.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="https://github.com/Patel-Priyank-1602/File_Transfer.git"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#12D393] text-black rounded-lg font-semibold hover:bg-[#10B87E] transition-all shadow-lg hover:shadow-[#12D393]/30"
                        >
                            <Play className="h-5 w-5" />
                            Go to GitHub
                        </a>
                        <a
                            href="https://lftdocs.netlify.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-2 px-6 py-3 border rounded-lg font-semibold transition-all ${theme === 'dark' ? 'border-zinc-700 hover:border-zinc-600' : 'border-gray-300 hover:border-gray-400'}`}
                        >
                            <ExternalLink className="h-5 w-5" />
                            View Documentation
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className={`border-t backdrop-blur-sm py-8 px-4 ${theme === 'dark' ? 'border-zinc-800 bg-[#18181B]' : 'border-gray-200 bg-white/95'}`}>
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
                    <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                        Copyright © {new Date().getFullYear()} Priyank Patel. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        <a href="https://github.com/Patel-Priyank-1602" className={`transition-colors ${theme === 'dark' ? 'text-gray-400 hover:text-[#12D393]' : 'text-gray-600 hover:text-[#12D393]'}`}>GitHub</a>
                        <a href="https://www.linkedin.com/in/patel-priyank-945131288/" className={`transition-colors ${theme === 'dark' ? 'text-gray-400 hover:text-[#12D393]' : 'text-gray-600 hover:text-[#12D393]'}`}>LinkedIn</a>
                        <a href="mailto:patelpriyank2626@gmail.com" className={`transition-colors ${theme === 'dark' ? 'text-gray-400 hover:text-[#12D393]' : 'text-gray-600 hover:text-[#12D393]'}`}>Email</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default SetupGuide;