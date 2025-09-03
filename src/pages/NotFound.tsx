import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 bg-gradient-festival bg-clip-text text-transparent">404</h1>
        <p className="text-xl text-muted-foreground mb-4">Oops! This pookalam pattern doesn't exist</p>
        <a 
          href="/" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-festival text-primary-foreground rounded-lg shadow-festival hover:shadow-petal transition-all duration-300 hover:scale-105"
        >
          Return to Pookalam
        </a>
      </div>
    </div>
  );
};

export default NotFound;
