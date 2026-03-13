import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Events from "@/components/Events";
import SiteFooter from "@/components/SiteFooter";
import PillNav from "@/components/PillNav";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <PillNav />
      <Hero />
      <Portfolio />
      <Process />
      <Events />
      <SiteFooter />
    </main>
  );
};

export default Index;
