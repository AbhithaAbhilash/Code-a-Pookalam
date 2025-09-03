import { X } from "lucide-react";

interface FlowerModalProps {
  flower: {
    name: string;
    facts: string[];
    color: string;
  };
  onClose: () => void;
}

export const FlowerModal = ({ flower, onClose }: FlowerModalProps) => {
  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card border border-border rounded-2xl p-6 max-w-md w-full shadow-festival animate-scale-in relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-muted transition-colors"
        >
          <X size={20} className="text-muted-foreground" />
        </button>

        {/* Header with flower visualization */}
        <div className="flex items-center gap-4 mb-6">
          <div className={`w-16 h-16 rounded-full bg-gradient-${flower.color === 'primary' ? 'petal' : flower.color === 'secondary' ? 'festival' : 'leaf'} shadow-${flower.color === 'primary' ? 'petal' : 'leaf'} flex items-center justify-center`}>
            <FlowerIcon color={flower.color} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-foreground">{flower.name}</h3>
            <p className="text-muted-foreground">Traditional Pookalam Flower</p>
          </div>
        </div>

        {/* Facts */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-foreground mb-3">Fascinating Facts:</h4>
          {flower.facts.map((fact, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 border-l-4"
              style={{
                borderLeftColor: `hsl(var(--${flower.color}))`
              }}
            >
              <span 
                className="w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5"
                style={{
                  backgroundColor: `hsl(var(--${flower.color}))`,
                  color: `hsl(var(--${flower.color}-foreground))`
                }}
              >
                {index + 1}
              </span>
              <p className="text-foreground leading-relaxed">{fact}</p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            Part of Kerala's traditional Onam pookalam celebration
          </p>
        </div>
      </div>
    </div>
  );
};

const FlowerIcon = ({ color }: { color: string }) => {
  const getColorClass = () => {
    switch (color) {
      case 'primary':
        return 'text-primary-foreground';
      case 'secondary':
        return 'text-secondary-foreground';
      case 'chrysanthemum':
        return 'text-chrysanthemum-foreground';
      case 'accent':
        return 'text-accent-foreground';
      default:
        return 'text-primary-foreground';
    }
  };

  return (
    <svg width="32" height="32" viewBox="0 0 32 32" className={getColorClass()}>
      {/* Generic flower icon */}
      <g>
        {Array.from({ length: 6 }, (_, i) => {
          const angle = i * 60;
          return (
            <ellipse
              key={i}
              cx="16"
              cy="8"
              rx="3"
              ry="6"
              fill="currentColor"
              opacity="0.8"
              transform={`rotate(${angle} 16 16)`}
              transformOrigin="16 16"
            />
          );
        })}
        <circle cx="16" cy="16" r="3" fill="currentColor" />
      </g>
    </svg>
  );
};