import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeContext";
import { Palette } from "lucide-react";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const themes = [
    { id: "professional" as const, label: "Professional", color: "from-slate-600 to-slate-800" },
    { id: "gamer" as const, label: "Gamer", color: "from-purple-600 to-pink-600" },
    { id: "calm" as const, label: "Calm", color: "from-blue-300 to-teal-300" },
  ];

  return (
    <div className="fixed top-4 right-4 z-50 bg-card/80 backdrop-blur-md border border-border rounded-2xl p-3 shadow-lg">
      <div className="flex items-center gap-2">
        <Palette className="w-5 h-5 text-muted-foreground" />
        <div className="flex gap-2">
          {themes.map((t) => (
            <Button
              key={t.id}
              size="sm"
              variant={theme === t.id ? "default" : "outline"}
              onClick={() => setTheme(t.id)}
              className={`relative overflow-hidden group ${
                theme === t.id
                  ? `bg-gradient-to-r ${t.color} text-white hover:opacity-90`
                  : "hover:border-accent"
              }`}
            >
              <span className="relative z-10 text-xs">{t.label}</span>
              {theme !== t.id && (
                <div className={`absolute inset-0 bg-gradient-to-r ${t.color} opacity-0 group-hover:opacity-20 transition-opacity`} />
              )}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
