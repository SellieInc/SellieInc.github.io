import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const CodingShowcase = () => {
  const [activeLanguage, setActiveLanguage] = useState<"angular" | "react" | "typescript">("react");
  const [displayedCode, setDisplayedCode] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const codeExamples = {
    angular: `// Angular Component Pattern
@Component({
  selector: 'app-feature',
  template: \`
    <div class="feature-container">
      <h2>{{ title }}</h2>
      <app-child [data]="items"
                 (action)="handleAction($event)">
      </app-child>
    </div>
  \`
})
export class FeatureComponent implements OnInit {
  title = 'Dynamic Feature';
  items: Item[] = [];

  ngOnInit(): void {
    this.loadItems();
  }

  handleAction(event: ActionEvent): void {
    console.log('Action triggered:', event);
  }
}`,
    react: `// React Component with Hooks
const FeatureComponent = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await api.getItems();
        setItems(data);
      } catch (error) {
        console.error('Failed to load items');
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  const handleAction = useCallback((event) => {
    console.log('Action triggered:', event);
  }, []);

  if (loading) return <Spinner />;

  return (
    <div className="feature-container">
      <h2>Dynamic Feature</h2>
      <ChildComponent 
        data={items}
        onAction={handleAction}
      />
    </div>
  );
};`,
    typescript: `// TypeScript Interface & Type Safety
interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
  preferences?: UserPreferences;
}

type ApiResponse<T> = {
  data: T;
  status: number;
  message: string;
};

class UserService {
  private apiClient: ApiClient;

  async getUser(id: string): Promise<User> {
    const response: ApiResponse<User> = 
      await this.apiClient.get(\`/users/\${id}\`);
    
    if (response.status !== 200) {
      throw new Error(response.message);
    }

    return response.data;
  }

  validateUser(user: User): boolean {
    return user.email.includes('@') 
      && user.name.length > 0;
  }
}`,
  };

  useEffect(() => {
    setIsTyping(true);
    setDisplayedCode("");
    const code = codeExamples[activeLanguage];
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex < code.length) {
        setDisplayedCode(code.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 15);

    return () => clearInterval(typingInterval);
  }, [activeLanguage]);

  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Live <span className="gradient-text">Coding</span> Showcase
        </h2>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Here's a glimpse of the type of code I write daily. Watch it type out in real-time!
        </p>

        {/* Language Switcher */}
        <div className="flex justify-center gap-3 mb-6">
          {(["angular", "react", "typescript"] as const).map((lang) => (
            <Button
              key={lang}
              size="sm"
              variant={activeLanguage === lang ? "default" : "outline"}
              onClick={() => setActiveLanguage(lang)}
              className={`capitalize ${
                activeLanguage === lang
                  ? "bg-gradient-to-r from-accent to-accent-secondary text-accent-foreground"
                  : "hover:border-accent"
              }`}
            >
              {lang}
            </Button>
          ))}
        </div>

        {/* Code Display */}
        <div className="relative bg-gradient-to-br from-slate-900 to-slate-950 border border-accent/20 rounded-2xl p-6 overflow-hidden shadow-2xl">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-accent-secondary/5 to-accent/5 animate-pulse" />
          
          {/* Code Content */}
          <div className="relative">
            <pre className="text-sm text-green-400 font-mono overflow-x-auto">
              <code>
                {displayedCode}
                {isTyping && (
                  <span className="inline-block w-2 h-4 bg-accent animate-pulse ml-1" />
                )}
              </code>
            </pre>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-4 right-4 flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
            <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse" style={{ animationDelay: "0.2s" }} />
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: "0.4s" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingShowcase;
