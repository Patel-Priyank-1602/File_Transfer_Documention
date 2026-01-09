import DocHeader from "./DocHeader";
import DocSidebar from "./DocSidebar";
import DocContent from "./DocContent";
import TableOfContents from "./TableOfContents";
import { useTheme } from "@/components/ThemeProvider";

const DocLayout = () => {
  const { theme } = useTheme();
  return (
    <div className="min-h-screen bg-background">
      <DocHeader />

      <div className="flex">
        {/* Sidebar - Desktop */}
        <aside className="hidden lg:block w-64 shrink-0 border-r border-border bg-sidebar sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto">
          <div className="px-2">
            <DocSidebar />
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <div className="max-w-4xl mx-auto px-4 py-8 lg:px-8">
            <DocContent />
          </div>
        </main>

        {/* Table of Contents - Desktop */}
        <aside className="hidden xl:block w-56 shrink-0 sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto py-8 pr-4">
          <TableOfContents />
        </aside>
      </div>

      {/* Enhanced Footer */}
      {/* Enhanced Footer */}
      <footer className={`border-t backdrop-blur-sm ${theme === 'dark' ? 'border-zinc-800 bg-[#18181B]' : 'border-gray-200 bg-white/95'}`}>
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img src="/logo.webp" alt="FileTransfer Logo" className="h-10 w-10 rounded-lg" />
                <span className="font-bold text-xl">FileTransfer</span>
              </div>
              <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Lightning-fast file sharing across your local network. Simple, secure, and efficient.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Patel-Priyank-1602"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 rounded-lg flex items-center justify-center border transition-all ${theme === 'dark' ? 'border-zinc-700 hover:border-[#12D393] hover:bg-[#12D393]/10' : 'border-gray-300 hover:border-[#12D393] hover:bg-[#12D393]/10'}`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/patel-priyank-945131288/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 rounded-lg flex items-center justify-center border transition-all ${theme === 'dark' ? 'border-zinc-700 hover:border-[#12D393] hover:bg-[#12D393]/10' : 'border-gray-300 hover:border-[#12D393] hover:bg-[#12D393]/10'}`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://priyank.pages.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 rounded-lg flex items-center justify-center border transition-all ${theme === 'dark' ? 'border-zinc-700 hover:border-[#12D393] hover:bg-[#12D393]/10' : 'border-gray-300 hover:border-[#12D393] hover:bg-[#12D393]/10'}`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/" className={`text-sm transition-colors flex items-center gap-2 group ${theme === 'dark' ? 'text-gray-400 hover:text-[#12D393]' : 'text-gray-600 hover:text-[#12D393]'}`}>
                    <span className="w-1 h-1 rounded-full bg-[#12D393] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Home
                  </a>
                </li>
                <li>
                  <a href="/setup" className={`text-sm transition-colors flex items-center gap-2 group ${theme === 'dark' ? 'text-gray-400 hover:text-[#12D393]' : 'text-gray-600 hover:text-[#12D393]'}`}>
                    <span className="w-1 h-1 rounded-full bg-[#12D393] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Setup Guide
                  </a>
                </li>
                <li>
                  <a href="/docs/features" className={`text-sm transition-colors flex items-center gap-2 group ${theme === 'dark' ? 'text-gray-400 hover:text-[#12D393]' : 'text-gray-600 hover:text-[#12D393]'}`}>
                    <span className="w-1 h-1 rounded-full bg-[#12D393] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Features
                  </a>
                </li>
                <li>
                  <a href="/#contact" className={`text-sm transition-colors flex items-center gap-2 group ${theme === 'dark' ? 'text-gray-400 hover:text-[#12D393]' : 'text-gray-600 hover:text-[#12D393]'}`}>
                    <span className="w-1 h-1 rounded-full bg-[#12D393] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://github.com/Patel-Priyank-1602/File_Transfer.git" target="_blank" rel="noopener noreferrer" className={`text-sm transition-colors flex items-center gap-2 group ${theme === 'dark' ? 'text-gray-400 hover:text-[#12D393]' : 'text-gray-600 hover:text-[#12D393]'}`}>
                    <span className="w-1 h-1 rounded-full bg-[#12D393] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    GitHub Repository
                  </a>
                </li>
                <li>
                  <a href="/docs/performance" className={`text-sm transition-colors flex items-center gap-2 group ${theme === 'dark' ? 'text-gray-400 hover:text-[#12D393]' : 'text-gray-600 hover:text-[#12D393]'}`}>
                    <span className="w-1 h-1 rounded-full bg-[#12D393] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Performance
                  </a>
                </li>
                <li>
                  <a href="/docs/api" className={`text-sm transition-colors flex items-center gap-2 group ${theme === 'dark' ? 'text-gray-400 hover:text-[#12D393]' : 'text-gray-600 hover:text-[#12D393]'}`}>
                    <span className="w-1 h-1 rounded-full bg-[#12D393] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    API Reference
                  </a>
                </li>
                <li>
                  <a href="/docs/faq" className={`text-sm transition-colors flex items-center gap-2 group ${theme === 'dark' ? 'text-gray-400 hover:text-[#12D393]' : 'text-gray-600 hover:text-[#12D393]'}`}>
                    <span className="w-1 h-1 rounded-full bg-[#12D393] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact & Actions */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Get Started</h3>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Ready to transfer files at lightning speed?
              </p>
              <div className="space-y-2">
                <a
                  href="/setup"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#12D393] text-black rounded-lg font-semibold hover:bg-[#10B87E] transition-all text-sm shadow-lg hover:shadow-[#12D393]/30"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Setup Now
                </a>
                <a
                  href="/aboutme"
                  className={`w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 border rounded-lg font-semibold transition-all text-sm ${theme === 'dark' ? 'border-zinc-700 hover:border-[#12D393] hover:bg-[#12D393]/10' : 'border-gray-300 hover:border-[#12D393] hover:bg-[#12D393]/10'}`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  About Us
                </a>
              </div>
              <div className="pt-2">
                <a
                  href="mailto:patelpriyank2626@gmail.com"
                  className={`text-sm flex items-center gap-2 ${theme === 'dark' ? 'text-gray-400 hover:text-[#12D393]' : 'text-gray-600 hover:text-[#12D393]'} transition-colors`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  patelpriyank2626@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className={`border-t ${theme === 'dark' ? 'border-zinc-800' : 'border-gray-200'} my-8`}></div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              © {new Date().getFullYear()} <span className="font-semibold">Priyank Patel</span>. All rights reserved.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium transition-all ${theme === 'dark' ? 'border-zinc-700 hover:border-[#12D393] hover:bg-[#12D393]/10' : 'border-gray-300 hover:border-[#12D393] hover:bg-[#12D393]/10'}`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              Back to Top
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DocLayout;
