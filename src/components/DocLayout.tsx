import DocHeader from "./DocHeader";
import DocSidebar from "./DocSidebar";
import DocContent from "./DocContent";
import TableOfContents from "./TableOfContents";

const DocLayout = () => {
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

      {/* Footer */}
      <footer className="border-t border-border py-6 px-4 text-center text-sm text-muted-foreground">
        <p>Copyright © {new Date().getFullYear()} Local Network File Transfer Server</p>
      </footer>
    </div>
  );
};

export default DocLayout;
