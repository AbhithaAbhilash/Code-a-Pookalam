import { Header } from "@/components/Header";
import { PookalamCanvas } from "@/components/PookalamCanvas";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative">
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-glow opacity-20 pointer-events-none" />
        
        <main className="relative z-10">
          <Header />
          
          <section className="container mx-auto px-4 py-8">
            <PookalamCanvas />
          </section>
          
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Index;
