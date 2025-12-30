import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { 
  ChevronDown, 
  ChevronRight, 
  Home, 
  Download, 
  Settings, 
  Layers, 
  Zap, 
  Upload, 
  Shield, 
  BookOpen, 
  Search, 
  UserCog, 
  Code, 
  Gauge, 
  FileText, 
  RefreshCw, 
  HelpCircle, 
  Map,
  LucideIcon
} from "lucide-react";
import { navigation } from "@/data/documentation";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Home,
  Download,
  Settings,
  Layers,
  Zap,
  Upload,
  Shield,
  BookOpen,
  Search,
  UserCog,
  Code,
  Gauge,
  FileText,
  RefreshCw,
  HelpCircle,
  Map,
};

interface DocSidebarProps {
  onNavigate?: () => void;
}

const DocSidebar = ({ onNavigate }: DocSidebarProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentSection = location.pathname.replace("/docs/", "") || "introduction";
  
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>(() => {
    const expanded: Record<string, boolean> = {};
    navigation.forEach((cat) => {
      expanded[cat.category] = true;
    });
    return expanded;
  });

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleNavigate = (id: string) => {
    navigate(`/docs/${id}`);
    onNavigate?.();
  };

  const getIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent className="h-4 w-4" /> : null;
  };

  return (
    <nav className="space-y-2 py-4">
      {navigation.map((category) => (
        <div key={category.category} className="mb-4">
          <button
            onClick={() => toggleCategory(category.category)}
            className="flex items-center justify-between w-full px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
          >
            <span>{category.category}</span>
            {expandedCategories[category.category] ? (
              <ChevronDown className="h-3 w-3" />
            ) : (
              <ChevronRight className="h-3 w-3" />
            )}
          </button>
          
          {expandedCategories[category.category] && (
            <div className="mt-1 space-y-0.5 animate-fade-in">
              {category.items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={cn(
                    "nav-link w-full text-left",
                    currentSection === item.id && "active"
                  )}
                >
                  {getIcon(item.icon)}
                  <span>{item.title}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default DocSidebar;
