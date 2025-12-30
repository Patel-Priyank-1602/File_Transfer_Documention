import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Home,
  Download,
  Settings,
  Layers,
  Zap,
  Upload,
  Shield,
  Book,
  Search,
  Users,
  Code,
  Gauge,
  RefreshCw,
  HelpCircle,
  Map,
} from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { navigation, documentation } from "@/data/documentation";

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// Icon mapping
const iconMap: Record<string, any> = {
  introduction: Home,
  installation: Download,
  configuration: Settings,
  architecture: Layers,
  features: Zap,
  "file-transfer": Upload,
  security: Shield,
  "usage-guide": Book,
  "search-engine": Search,
  administration: Users,
  "api-reference": Code,
  performance: Gauge,
  recovery: RefreshCw,
  faq: HelpCircle,
};

const SearchDialog = ({ open, onOpenChange }: SearchDialogProps) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  // Flatten all items for search
  const allItems = navigation.flatMap((cat) =>
    cat.items.map((item) => ({
      ...item,
      category: cat.category,
      description: documentation[item.id]?.content?.slice(0, 150) || "",
    }))
  );

  const filteredItems = search
    ? allItems.filter(
        (item) =>
          item.title.toLowerCase().includes(search.toLowerCase()) ||
          item.category.toLowerCase().includes(search.toLowerCase()) ||
          item.description.toLowerCase().includes(search.toLowerCase())
      )
    : allItems;

  const handleSelect = (id: string) => {
    navigate(`/docs/${id}`);
    onOpenChange(false);
    setSearch("");
  };

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, onOpenChange]);

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput
        placeholder="Search documentation..."
        value={search}
        onValueChange={setSearch}
      />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        {navigation.map((category) => {
          const categoryItems = filteredItems.filter(
            (item) => item.category === category.category
          );
          if (categoryItems.length === 0) return null;
          return (
            <CommandGroup key={category.category} heading={category.category}>
              {categoryItems.map((item) => {
                const Icon = iconMap[item.id] || Book;
                return (
                  <CommandItem
                    key={item.id}
                    value={`${item.title} ${item.category}`}
                    onSelect={() => handleSelect(item.id)}
                    className="cursor-pointer"
                  >
                    <Icon className="mr-2 h-4 w-4 flex-shrink-0" />
                    <span>{item.title}</span>
                  </CommandItem>
                );
              })}
            </CommandGroup>
          );
        })}
      </CommandList>
    </CommandDialog>
  );
};

export default SearchDialog;