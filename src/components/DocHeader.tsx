import { useState } from "react";
import { Menu, Search, Github, Wrench, Mail, IdCard, ImageIcon  } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import DocSidebar from "./DocSidebar";
import SearchDialog from "./SearchDialog";
import { ThemeToggle } from "./ThemeToggle";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";

const DocHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-14 items-center justify-between px-4 lg:px-6">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="shrink-0">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>

              <SheetContent side="left" className="w-72 bg-sidebar p-0">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

                <div className="px-4 py-4 border-b border-sidebar-border">
                  <Link to="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                    <img src="/logo.webp" alt="FileTransfer Logo" className="h-9 w-9 object-contain" />
                    <span className="font-semibold text-foreground">FileTransfer</span>
                  </Link>
                </div>

                <div className="overflow-y-auto h-[calc(100vh-80px)] px-2">
                  <DocSidebar onNavigate={() => setMobileMenuOpen(false)} />

                  {/* Mobile Setup Link */}
                  <Link
                    to="/setup"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-3 mt-3 rounded-lg text-sm font-medium hover:bg-accent"
                  >
                    <Wrench className="h-4 w-4" />
                    Setup Guide
                  </Link>
                </div>
              </SheetContent>
            </Sheet>

            <div className="flex items-center gap-2">
  <Link to="/" className="hidden sm:flex items-center gap-2">
    <img src="/logo.webp" alt="FileTransfer Logo" className="h-9 w-9 object-contain" />
    <span className="font-semibold">FileTransfer</span>
  </Link>

  {/* Architecture Image Button */}
  <Dialog>
    <DialogTrigger asChild>
      <Button
        variant="outline"
        size="sm"
        className="flex items-center gap-2 h-8 px-2 sm:px-3"
      >
        <ImageIcon className="h-4 w-4" />
        <span className="hidden sm:inline">Architecture</span>
      </Button>
    </DialogTrigger>

    <DialogContent className="max-w-[95vw] sm:max-w-4xl max-h-[90vh] overflow-auto">
      <DialogHeader>
        <DialogTitle>FileTransfer Architecture</DialogTitle>
      </DialogHeader>

      <img
        src="/File_Transfer.png"
        alt="FileTransfer Architecture"
        className="w-full h-auto rounded-lg border"
      />
    </DialogContent>
  </Dialog>
</div>

          </div>

          {/* Search */}
          <div className="flex-1 max-w-md mx-4 hidden md:block">
            <button
              onClick={() => setSearchOpen(true)}
              className="w-full flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground bg-secondary border border-border rounded-lg hover:bg-muted transition-colors"
            >
              <Search className="h-4 w-4" />
              <span className="flex-1 text-left">Search...</span>
              <kbd className="pointer-events-none hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-background px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                <span className="text-xs">Ctrl</span>K
              </kbd>
            </button>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1">

            <Button variant="ghost" size="icon" className="md:hidden h-9 w-9" onClick={() => setSearchOpen(true)}>
              <Search className="h-4 w-4" />
            </Button>

            {/* Desktop Setup Button */}
            <Button variant="ghost" size="icon" asChild className="sm:hidden h-9 w-9">
              <Link to="/setup">
                <Wrench className="h-4 w-4" />
              </Link>
            </Button>

            <Button variant="outline" size="sm" asChild className="hidden sm:flex h-9">
              <Link to="/setup" className="flex items-center gap-2">
                <Wrench className="h-4 w-4" />
                Setup
              </Link>
            </Button>

            <Button variant="ghost" size="icon" asChild className="sm:hidden h-9 w-9">
              <Link to="/#contact">
                <Mail className="h-4 w-4" />
              </Link>
            </Button>

            <Button variant="outline" size="sm" asChild className="hidden sm:flex h-9">
              <Link to="/#contact">
                <Mail  className="h-4 w-4" />
                Contact
              </Link>
            </Button> 

            <Button variant="ghost" size="icon" asChild className="h-9 w-9 sm:hidden">
              <Link to="/aboutme">
                <IdCard className="h-4 w-4" />
              </Link>
            </Button>

            <Button variant="outline" size="sm" asChild className="hidden sm:flex h-9">
              <Link to="/aboutme">
              <IdCard className="h-4 w-4" />About Us
              </Link>
            </Button>

            <ThemeToggle />

            <Button variant="ghost" size="icon" asChild className="h-9 w-9">
              <a href="https://github.com/Patel-Priyank-1602/File_Transfer.git" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </header>

      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  );
};

export default DocHeader;
