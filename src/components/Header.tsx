import { Sparkles, Code2 } from "lucide-react";

export const Header = () => {
  return (
    <header className="text-center py-8 px-4">
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="p-3 bg-gradient-festival rounded-full shadow-festival">
          <Sparkles size={24} className="text-primary-foreground" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-festival bg-clip-text text-transparent">
          Code-a-Pookalam
        </h1>
        <div className="p-3 bg-gradient-leaf rounded-full shadow-leaf">
          <Code2 size={24} className="text-accent" />
        </div>
      </div>
      
      <p className="text-xl text-foreground mb-2 max-w-3xl mx-auto leading-relaxed">
        Interactive Digital Onam Pookalam
      </p>
      
      <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
        Experience the vibrant beauty of Kerala's traditional floral rangoli with modern technology. 
        Click on different flowers to discover their fascinating stories and cultural significance 
        in this festive Onam celebration.
      </p>
      
      {/* Decorative elements */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: 5 }, (_, i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-gradient-festival opacity-60"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>
    </header>
  );
};