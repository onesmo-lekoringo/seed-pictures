import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Events from "@/components/Events";
import SiteFooter from "@/components/SiteFooter";
import PillNav from "@/components/PillNav";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <PillNav />
      <Hero />
      <Portfolio />
      <Events />
      <SiteFooter />
    </main>
  );
};

export default Index;
