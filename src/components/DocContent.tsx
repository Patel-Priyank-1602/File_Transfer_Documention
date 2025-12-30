import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { documentation, navigation } from "@/data/documentation";
import { ChevronRight, ArrowRight, Copy, Check, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const DocContent = () => {
  const { section = "introduction" } = useParams();
  const doc = documentation[section];
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [section]);

  if (!doc) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
        <p className="text-muted-foreground mb-6">The requested documentation page does not exist.</p>
        <Button asChild>
          <Link to="/docs/introduction">Go to Introduction</Link>
        </Button>
      </div>
    );
  }

  // Find next and previous pages
  const allItems = navigation.flatMap((cat) => cat.items);
  const currentIndex = allItems.findIndex((item) => item.id === section);
  const prevPage = currentIndex > 0 ? allItems[currentIndex - 1] : null;
  const nextPage = currentIndex < allItems.length - 1 ? allItems[currentIndex + 1] : null;

  // Find current category
  const currentCategory = navigation.find((cat) =>
    cat.items.some((item) => item.id === section)
  )?.category;

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  // Generate slug from title
  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  // Parse content and render
  const renderContent = (content: string) => {
    const lines = content.trim().split("\n");
    const elements: JSX.Element[] = [];
    let i = 0;
    let inCodeBlock = false;
    let codeContent = "";
    let codeLanguage = "";

    while (i < lines.length) {
      const line = lines[i];

      // Code blocks
      if (line.startsWith("```")) {
        if (!inCodeBlock) {
          inCodeBlock = true;
          codeLanguage = line.slice(3);
          codeContent = "";
        } else {
          inCodeBlock = false;
          const code = codeContent.trim();
          elements.push(
            <div key={`code-${i}`} className="relative group my-6">
              <div className="bg-[hsl(var(--code-bg))] border border-[hsl(var(--code-border))] rounded-lg overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 border-b border-[hsl(var(--code-border))] bg-secondary/50">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Terminal className="h-4 w-4" />
                    <span>Terminal</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-7 px-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => copyCode(code)}
                  >
                    {copiedCode === code ? (
                      <Check className="h-3 w-3 text-primary" />
                    ) : (
                      <Copy className="h-3 w-3" />
                    )}
                  </Button>
                </div>
                <pre className="p-4 overflow-x-auto text-sm">
                  <code className="text-foreground">{code}</code>
                </pre>
              </div>
            </div>
          );
        }
        i++;
        continue;
      }

      if (inCodeBlock) {
        codeContent += line + "\n";
        i++;
        continue;
      }

      // Headers with ID anchors
      if (line.startsWith("# ")) {
        const text = line.slice(2);
        elements.push(
          <h1 key={`h1-${i}`} className="text-3xl md:text-4xl font-bold mb-4 mt-2 text-foreground">
            {text}
          </h1>
        );
        i++;
        continue;
      }

      if (line.startsWith("## ")) {
        const text = line.slice(3);
        const id = generateSlug(text);
        elements.push(
          <h2 
            key={`h2-${i}`} 
            id={id}
            className="text-xl font-semibold mb-3 mt-8 pt-6 border-t border-border text-foreground scroll-mt-20"
          >
            {text}
          </h2>
        );
        i++;
        continue;
      }

      if (line.startsWith("### ")) {
        const text = line.slice(4);
        const id = generateSlug(text);
        elements.push(
          <h3 
            key={`h3-${i}`} 
            id={id}
            className="text-lg font-semibold mb-2 mt-6 text-foreground scroll-mt-20"
          >
            {text}
          </h3>
        );
        i++;
        continue;
      }

      // Tables
      if (line.includes("|") && lines[i + 1]?.includes("---")) {
        const headers = line.split("|").filter(Boolean).map((h) => h.trim());
        const rows: string[][] = [];
        let j = i + 2;
        while (j < lines.length && lines[j].includes("|")) {
          rows.push(lines[j].split("|").filter(Boolean).map((c) => c.trim()));
          j++;
        }
        elements.push(
          <div key={`table-${i}`} className="table-container my-6">
            <table className="doc-table">
              <thead>
                <tr>
                  {headers.map((header, idx) => (
                    <th key={idx}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, rowIdx) => (
                  <tr key={rowIdx}>
                    {row.map((cell, cellIdx) => (
                      <td key={cellIdx}>
                        {cell.startsWith("/") ? (
                          <code className="code-inline">{cell}</code>
                        ) : (
                          cell
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        i = j;
        continue;
      }

      // Numbered lists
      const numberedMatch = line.match(/^(\d+)\.\s+(.+)/);
      if (numberedMatch) {
        const listItems: { num: string; text: string }[] = [];
        while (i < lines.length) {
          const match = lines[i].match(/^(\d+)\.\s+(.+)/);
          if (!match) break;
          listItems.push({ num: match[1], text: match[2] });
          i++;
        }
        elements.push(
          <ol key={`ol-${i}`} className="space-y-3 my-4">
            {listItems.map((item, idx) => {
              const parsed = item.text.split(/(\*\*.*?\*\*|`.*?`)/g).map((part, pIdx) => {
                if (part.startsWith("**") && part.endsWith("**")) {
                  return <strong key={pIdx} className="text-foreground">{part.slice(2, -2)}</strong>;
                }
                if (part.startsWith("`") && part.endsWith("`")) {
                  return <code key={pIdx} className="code-inline">{part.slice(1, -1)}</code>;
                }
                return part;
              });
              return (
                <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                  <span className="flex items-center justify-center h-6 w-6 rounded-full bg-secondary text-foreground text-sm font-medium shrink-0">
                    {item.num}
                  </span>
                  <span className="pt-0.5">{parsed}</span>
                </li>
              );
            })}
          </ol>
        );
        continue;
      }

      // Unordered lists
      if (line.startsWith("- ") && !line.startsWith("- [")) {
        const listItems: string[] = [];
        while (i < lines.length && lines[i].startsWith("- ") && !lines[i].startsWith("- [")) {
          listItems.push(lines[i].slice(2));
          i++;
        }
        elements.push(
          <ul key={`ul-${i}`} className="list-none space-y-2 my-4">
            {listItems.map((item, idx) => {
              const parsed = item.split(/(\*\*.*?\*\*|`.*?`)/g).map((part, pIdx) => {
                if (part.startsWith("**") && part.endsWith("**")) {
                  return <strong key={pIdx} className="text-foreground">{part.slice(2, -2)}</strong>;
                }
                if (part.startsWith("`") && part.endsWith("`")) {
                  return <code key={pIdx} className="code-inline">{part.slice(1, -1)}</code>;
                }
                return part;
              });
              return (
                <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-primary mt-1.5">•</span>
                  <span>{parsed}</span>
                </li>
              );
            })}
          </ul>
        );
        continue;
      }

      // Checkboxes
      if (line.startsWith("- [ ]") || line.startsWith("- [x]")) {
        const checkItems: { checked: boolean; text: string }[] = [];
        while (i < lines.length && (lines[i].startsWith("- [ ]") || lines[i].startsWith("- [x]"))) {
          checkItems.push({
            checked: lines[i].startsWith("- [x]"),
            text: lines[i].slice(6),
          });
          i++;
        }
        elements.push(
          <ul key={`check-${i}`} className="list-none space-y-2 my-4">
            {checkItems.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                <span className={cn("h-4 w-4 rounded border flex items-center justify-center", item.checked ? "bg-primary border-primary" : "border-border")}>
                  {item.checked && <Check className="h-3 w-3 text-primary-foreground" />}
                </span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        );
        continue;
      }

      // Q&A format
      if (line.startsWith("**Q:")) {
        elements.push(
          <div key={`qa-${i}`} className="my-4">
            <p className="font-semibold text-foreground mb-2">{line.replace(/\*\*/g, "")}</p>
          </div>
        );
        i++;
        continue;
      }

      // Empty lines
      if (line.trim() === "") {
        i++;
        continue;
      }

      // Regular paragraphs
      const parsedLine = line.split(/(\*\*.*?\*\*|`.*?`)/g).map((part, pIdx) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={pIdx} className="text-foreground">{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith("`") && part.endsWith("`")) {
          return <code key={pIdx} className="code-inline">{part.slice(1, -1)}</code>;
        }
        return part;
      });
      elements.push(
        <p key={`p-${i}`} className="text-muted-foreground leading-relaxed mb-4">
          {parsedLine}
        </p>
      );
      i++;
    }

    return elements;
  };

  return (
    <article className="animate-fade-in">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1 text-sm text-muted-foreground mb-6">
        {currentCategory && (
          <>
            <span className="text-primary">{currentCategory}</span>
            <ChevronRight className="h-4 w-4" />
          </>
        )}
      </nav>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">{doc.title}</h1>
      
      {/* Description if available */}
      <p className="text-muted-foreground text-lg mb-8">
        {doc.content.split('\n').find(line => line.trim() && !line.startsWith('#'))?.trim()}
      </p>

      <div className="border-t border-border pt-8">
        {/* Content */}
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          {renderContent(doc.content)}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 mt-12 pt-8 border-t border-border">
        {prevPage ? (
          <Link
            to={`/docs/${prevPage.id}`}
            className="group flex-1 p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
          >
            <span className="text-sm text-muted-foreground">Previous</span>
            <span className="block text-foreground font-medium group-hover:text-primary transition-colors">
              {prevPage.title}
            </span>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
        {nextPage && (
          <Link
            to={`/docs/${nextPage.id}`}
            className="group flex-1 p-4 rounded-lg border border-border hover:border-primary/50 transition-colors text-right"
          >
            <span className="text-sm text-muted-foreground">Next</span>
            <span className="flex items-center justify-end gap-2 text-foreground font-medium group-hover:text-primary transition-colors">
              {nextPage.title}
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        )}
      </div>
    </article>
  );
};

export default DocContent;