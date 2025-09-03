import { Heart, Flower } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="mt-16 py-8 border-t border-border bg-card/50">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Flower size={20} className="text-primary" />
          <p className="text-foreground">
            Celebrating Kerala's rich cultural heritage through digital art
          </p>
          <Flower size={20} className="text-secondary" />
        </div>
        
        <p className="text-muted-foreground text-sm mb-4">
          Traditional pookalam flowers blend with modern technology to create an interactive 
          festival experience that honors Onam traditions.
        </p>
        
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <span>Made with</span>
          <Heart size={16} className="text-secondary fill-current" />
          <span>for the Onam festival celebration</span>
        </div>
        
        {/* Cultural note */}
        <div className="mt-6 p-4 bg-muted/30 rounded-lg border border-border/50 max-w-2xl mx-auto">
          <p className="text-sm text-foreground leading-relaxed">
            <strong>About Pookalam:</strong> Traditional circular floral carpets created during Onam, 
            representing prosperity, harmony, and the welcoming of King Mahabali. Each flower has 
            cultural significance and adds to the festival's vibrant celebration.
          </p>
        </div>
      </div>
    </footer>
  );
};