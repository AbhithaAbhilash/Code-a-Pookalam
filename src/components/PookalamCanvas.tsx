import { useState, useRef } from "react";
import { FlowerModal } from "./FlowerModal";

interface FlowerData {
  name: string;
  facts: string[];
  color: string;
}

const flowerData: Record<string, FlowerData> = {
  marigold: {
    name: "Marigold",
    facts: [
      "Native to the Americas and brought to India by Portuguese traders",
      "Used in Day of the Dead celebrations in Mexico",
      "Petals are edible and used in food coloring and traditional dishes"
    ],
    color: "primary"
  },
  rose: {
    name: "Rose",
    facts: [
      "Fossils show roses existed 35 million years ago",
      "The oldest living rose bush is over 1,000 years old in Germany",
      "Official national flower of the United States"
    ],
    color: "secondary"
  },
  chrysanthemum: {
    name: "Chrysanthemum",
    facts: [
      "Cultivated in China since the 15th century BC",
      "November birth flower symbolizing honor and loyalty",
      "Used in traditional teas for health benefits and longevity"
    ],
    color: "chrysanthemum"
  },
  jasmine: {
    name: "Jasmine",
    facts: [
      "Over 200 species exist worldwide",
      "Name means 'gift from God' in Persian",
      "Flowers open at night to release their strongest scent"
    ],
    color: "accent"
  }
};

export const PookalamCanvas = () => {
  const [selectedFlower, setSelectedFlower] = useState<string | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);

  const handleFlowerClick = (flowerType: string) => {
    setSelectedFlower(flowerType);
  };

  const closeModal = () => {
    setSelectedFlower(null);
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  const regeneratePookalam = () => {
    // Add a subtle animation effect to simulate regeneration
    if (svgRef.current) {
      svgRef.current.style.transform = "scale(0.95)";
      setTimeout(() => {
        if (svgRef.current) {
          svgRef.current.style.transform = "scale(1)";
        }
      }, 200);
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 p-4">
      {/* Controls */}
      <div className="flex gap-4 flex-wrap justify-center">
        <button
          onClick={toggleZoom}
          className="px-6 py-3 bg-gradient-festival text-primary-foreground rounded-lg shadow-festival hover:shadow-petal transition-all duration-300 hover:scale-105 font-medium"
        >
          {isZoomed ? "Zoom Out" : "Zoom In"}
        </button>
        <button
          onClick={regeneratePookalam}
          className="px-6 py-3 bg-gradient-leaf text-accent rounded-lg shadow-leaf hover:shadow-petal transition-all duration-300 hover:scale-105 font-medium"
        >
          Regenerate
        </button>
      </div>

      {/* SVG Pookalam */}
      <div 
        className={`relative transition-all duration-500 ${
          isZoomed ? "scale-125" : "scale-100"
        }`}
      >
        <svg
          ref={svgRef}
          viewBox="0 0 600 600"
          className="w-full max-w-2xl h-auto transition-transform duration-300 ease-festival"
          style={{ filter: "drop-shadow(0 0 30px hsl(var(--primary) / 0.3))" }}
        >
          {/* Background with subtle tech pattern */}
          <defs>
            <radialGradient id="backgroundGradient" cx="50%" cy="50%">
              <stop offset="0%" stopColor="hsl(240 15% 12%)" />
              <stop offset="100%" stopColor="hsl(240 20% 4%)" />
            </radialGradient>
            
            {/* Tech pattern */}
            <pattern id="techPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 0 10 L 20 10 M 10 0 L 10 20" stroke="hsl(var(--tech-primary))" strokeWidth="0.5" opacity="0.1" className="tech-shimmer" />
            </pattern>

            {/* Flower gradients */}
            <radialGradient id="marigoldGradient" cx="50%" cy="30%">
              <stop offset="0%" stopColor="hsl(var(--primary-glow))" />
              <stop offset="100%" stopColor="hsl(var(--primary))" />
            </radialGradient>
            
            <radialGradient id="roseGradient" cx="50%" cy="30%">
              <stop offset="0%" stopColor="hsl(var(--secondary-glow))" />
              <stop offset="100%" stopColor="hsl(var(--secondary))" />
            </radialGradient>
            
            <radialGradient id="chrysanthemumGradient" cx="50%" cy="30%">
              <stop offset="0%" stopColor="hsl(var(--accent))" />
              <stop offset="100%" stopColor="hsl(var(--chrysanthemum))" />
            </radialGradient>
            
            <radialGradient id="jasmineGradient" cx="50%" cy="30%">
              <stop offset="0%" stopColor="hsl(var(--accent))" />
              <stop offset="70%" stopColor="hsl(45 90% 95%)" />
            </radialGradient>
            
            <radialGradient id="leafGradient" cx="30%" cy="20%">
              <stop offset="0%" stopColor="hsl(var(--leaf-glow))" />
              <stop offset="100%" stopColor="hsl(var(--leaf))" />
            </radialGradient>
          </defs>

          {/* Background */}
          <rect width="600" height="600" fill="url(#backgroundGradient)" />
          <rect width="600" height="600" fill="url(#techPattern)" />

          {/* Outer ring - Marigolds */}
          <g className="floating" style={{ transformOrigin: "300px 300px" }}>
            {Array.from({ length: 12 }, (_, i) => {
              const angle = (i * 30) * Math.PI / 180;
              const x = 300 + Math.cos(angle) * 220;
              const y = 300 + Math.sin(angle) * 220;
              return (
                <g key={`marigold-${i}`} className="petal-glow cursor-pointer" onClick={() => handleFlowerClick('marigold')}>
                  {/* Petal layers for 3D effect */}
                  {Array.from({ length: 8 }, (_, j) => {
                    const petalAngle = (j * 45) * Math.PI / 180;
                    const px = x + Math.cos(petalAngle) * (15 - j * 1.5);
                    const py = y + Math.sin(petalAngle) * (15 - j * 1.5);
                    return (
                      <ellipse
                        key={j}
                        cx={px}
                        cy={py}
                        rx={12 - j}
                        ry={8 - j * 0.5}
                        fill="url(#marigoldGradient)"
                        opacity={0.9 - j * 0.1}
                        transform={`rotate(${i * 30 + j * 22.5} ${px} ${py})`}
                      />
                    );
                  })}
                  {/* Center */}
                  <circle cx={x} cy={y} r="4" fill="hsl(45 100% 35%)" />
                </g>
              );
            })}
          </g>

          {/* Middle ring - Roses and Chrysanthemums alternating */}
          <g className="floating" style={{ transformOrigin: "300px 300px", animationDelay: "1s" }}>
            {Array.from({ length: 16 }, (_, i) => {
              const angle = (i * 22.5) * Math.PI / 180;
              const x = 300 + Math.cos(angle) * 160;
              const y = 300 + Math.sin(angle) * 160;
              const isRose = i % 2 === 0;
              const flowerType = isRose ? 'rose' : 'chrysanthemum';
              const gradient = isRose ? 'url(#roseGradient)' : 'url(#chrysanthemumGradient)';
              
              return (
                <g key={`middle-${i}`} className="petal-glow cursor-pointer" onClick={() => handleFlowerClick(flowerType)}>
                  {/* Rose petals */}
                  {isRose ? (
                    <>
                      {Array.from({ length: 6 }, (_, j) => {
                        const petalAngle = (j * 60) * Math.PI / 180;
                        const px = x + Math.cos(petalAngle) * 12;
                        const py = y + Math.sin(petalAngle) * 12;
                        return (
                          <path
                            key={j}
                            d={`M ${x} ${y} Q ${px} ${py - 8} ${px + Math.cos(petalAngle + 0.5) * 8} ${py + Math.sin(petalAngle + 0.5) * 8} Q ${x + Math.cos(petalAngle + 1) * 6} ${y + Math.sin(petalAngle + 1) * 6} ${x} ${y}`}
                            fill={gradient}
                            opacity="0.8"
                          />
                        );
                      })}
                      <circle cx={x} cy={y} r="3" fill="hsl(348 100% 30%)" />
                    </>
                  ) : (
                    /* Chrysanthemum petals */
                    <>
                      {Array.from({ length: 12 }, (_, j) => {
                        const petalAngle = (j * 30) * Math.PI / 180;
                        const px = x + Math.cos(petalAngle) * 10;
                        const py = y + Math.sin(petalAngle) * 10;
                        return (
                          <line
                            key={j}
                            x1={x}
                            y1={y}
                            x2={px}
                            y2={py}
                            stroke={gradient}
                            strokeWidth="3"
                            strokeLinecap="round"
                            opacity="0.8"
                          />
                        );
                      })}
                      <circle cx={x} cy={y} r="3" fill="hsl(45 100% 70%)" />
                    </>
                  )}
                </g>
              );
            })}
          </g>

          {/* Inner ring - Jasmine */}
          <g className="floating" style={{ transformOrigin: "300px 300px", animationDelay: "2s" }}>
            {Array.from({ length: 10 }, (_, i) => {
              const angle = (i * 36) * Math.PI / 180;
              const x = 300 + Math.cos(angle) * 100;
              const y = 300 + Math.sin(angle) * 100;
              return (
                <g key={`jasmine-${i}`} className="petal-glow cursor-pointer" onClick={() => handleFlowerClick('jasmine')}>
                  {/* Jasmine petals */}
                  {Array.from({ length: 5 }, (_, j) => {
                    const petalAngle = (j * 72) * Math.PI / 180;
                    const px = x + Math.cos(petalAngle) * 8;
                    const py = y + Math.sin(petalAngle) * 8;
                    return (
                      <ellipse
                        key={j}
                        cx={px}
                        cy={py}
                        rx="6"
                        ry="3"
                        fill="url(#jasmineGradient)"
                        transform={`rotate(${j * 72} ${px} ${py})`}
                        opacity="0.9"
                      />
                    );
                  })}
                  <circle cx={x} cy={y} r="2" fill="hsl(45 100% 85%)" />
                </g>
              );
            })}
          </g>

          {/* Leaves scattered throughout */}
          <g>
            {Array.from({ length: 24 }, (_, i) => {
              const angle = (i * 15) * Math.PI / 180;
              const radius = 80 + (i % 3) * 40;
              const x = 300 + Math.cos(angle) * radius;
              const y = 300 + Math.sin(angle) * radius;
              return (
                <ellipse
                  key={`leaf-${i}`}
                  cx={x}
                  cy={y}
                  rx="8"
                  ry="16"
                  fill="url(#leafGradient)"
                  transform={`rotate(${angle * 180 / Math.PI + 90} ${x} ${y})`}
                  className="leaf-glow"
                  opacity="0.7"
                />
              );
            })}
          </g>

          {/* Central lotus/paisley motif */}
          <g className="floating" style={{ transformOrigin: "300px 300px", animationDelay: "0.5s" }}>
            <circle cx="300" cy="300" r="35" fill="url(#marigoldGradient)" className="pulse-glow" />
            <circle cx="300" cy="300" r="25" fill="url(#roseGradient)" opacity="0.8" />
            <circle cx="300" cy="300" r="15" fill="url(#jasmineGradient)" opacity="0.9" />
            <circle cx="300" cy="300" r="8" fill="hsl(45 100% 85%)" />
            
            {/* Traditional paisley patterns */}
            {Array.from({ length: 8 }, (_, i) => {
              const angle = (i * 45) * Math.PI / 180;
              const x = 300 + Math.cos(angle) * 20;
              const y = 300 + Math.sin(angle) * 20;
              return (
                <path
                  key={`paisley-${i}`}
                  d={`M ${x} ${y} Q ${x + 5} ${y - 8} ${x + 3} ${y - 12} Q ${x - 2} ${y - 8} ${x} ${y}`}
                  fill="hsl(var(--tech-primary))"
                  opacity="0.6"
                  transform={`rotate(${i * 45} ${x} ${y})`}
                />
              );
            })}
          </g>

          {/* Binary code pattern (subtle tech element) */}
          <g opacity="0.1" className="tech-shimmer">
            <text x="50" y="580" fill="hsl(var(--tech-primary))" fontSize="8" fontFamily="monospace">
              01001111 01101110 01100001 01101101
            </text>
          </g>
        </svg>
      </div>

      {/* Instructions */}
      <p className="text-muted-foreground text-center max-w-lg">
        Click on any flower in the pookalam to learn fascinating facts about it. 
        Use the controls above to zoom in or regenerate the design.
      </p>

      {/* Flower Modal */}
      {selectedFlower && (
        <FlowerModal
          flower={flowerData[selectedFlower]}
          onClose={closeModal}
        />
      )}
    </div>
  );
};