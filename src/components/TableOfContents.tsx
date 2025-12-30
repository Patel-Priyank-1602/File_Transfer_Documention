import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { documentation } from "@/data/documentation";
import { cn } from "@/lib/utils";

const TableOfContents = () => {
  const { section = "introduction" } = useParams();
  const doc = documentation[section];
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0px -80% 0px" }
    );

    // Observe all headings with IDs
    doc?.subsections?.forEach((sub) => {
      const element = document.getElementById(sub.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [doc, section]);

  if (!doc?.subsections?.length) {
    return null;
  }

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveId(id);
    }
  };

  return (
    <nav className="space-y-1">
      <h4 className="text-sm font-semibold text-foreground mb-3">On this page</h4>
      <div className="border-l border-border">
        {doc.subsections.map((sub) => (
          <button
            key={sub.id}
            onClick={() => handleClick(sub.id)}
            className={cn(
              "toc-link w-full text-left",
              activeId === sub.id && "active"
            )}
          >
            {sub.title}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default TableOfContents;