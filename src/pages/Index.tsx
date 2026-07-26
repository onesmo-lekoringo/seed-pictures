import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Events from "@/components/Events";
import SiteFooter from "@/components/SiteFooter";
import PillNav from "@/components/PillNav";
import Loader from "@/components/Loader";

let hasLoadedOnce = false;

const Index = () => {
  const [isLoading, setIsLoading] = useState(!hasLoadedOnce);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (hasLoadedOnce) {
      return;
    }

    const timer = setTimeout(() => {
      handleVideoLoaded();
    }, 7000); // Stay for 7 seconds to let the typewriter and logo animation play out fully

    return () => clearTimeout(timer);
  }, []);

  const handleVideoLoaded = () => {
    setFadeOut(true);
    setTimeout(() => {
      setIsLoading(false);
      hasLoadedOnce = true;
    }, 500); // matches transition-opacity duration-500
  };

  return (
    <>
      {isLoading && <Loader fadeOut={fadeOut} />}
      <main className="min-h-screen bg-background">
        <PillNav />
        <Hero />
        <Portfolio />
        <Events />
        <SiteFooter />
      </main>
    </>
  );
};

export default Index;
