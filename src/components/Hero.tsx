import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Projects", href: "#portfolio" },
  { label: "The Academy", href: "/academy" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

interface HeroProps {
  onVideoLoaded?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onVideoLoaded }) => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("/")) {
      navigate(href);
    } else if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <motion.video
        autoPlay
        muted
        loop
        playsInline
        onCanPlayThrough={onVideoLoaded}
        onLoadedData={onVideoLoaded}
        initial={{ filter: "blur(20px)" }}
        animate={{ filter: "blur(0px)" }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="/child.mp4"
          type="video/mp4"
        />
      </motion.video>

      {/* Neutral dark overlay to keep video clear and text legible */}
      <div className="absolute inset-0 bg-black/45 bg-gradient-to-t from-black/70 via-transparent to-black/60" />

      {/* Ambient sapphire blue glow at the far bottom-right corner */}
      <div className="absolute -right-20 -bottom-20 w-[45rem] h-[45rem] rounded-full bg-blue-500/15 blur-[160px] pointer-events-none mix-blend-screen" />

      {/* Top Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 md:px-12 py-6"
      >
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="flex items-center">
          <img src="/Horizontal-Main-Logo.png" alt="Seed Pictures Logo" className="h-10 md:h-12 w-auto object-contain" />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
              className="text-sm font-medium text-white/70 hover:text-[#C5A028] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-[#C5A028]"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-30 bg-[#0B1838]/97 backdrop-blur-md flex flex-col items-center justify-center gap-8"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 p-2 text-[#C5A028]"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                className="font-display text-2xl font-semibold text-white hover:text-[#C5A028] transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">


        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05]"
        >
          Stories at the Heart<br />
          of Community
        </motion.h1>



        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="mt-10 flex items-center justify-center gap-4 flex-wrap"
        >
          <a
            href="/contact"
            onClick={(e) => { e.preventDefault(); handleNav("/contact"); }}
            className="inline-flex items-center px-8 py-4 rounded-full bg-[#C5A028] text-[#0B1838] font-semibold text-sm tracking-wide hover:bg-[#C5A028]/90 transition-all duration-200 shadow-lg shadow-[#C5A028]/20"
          >
            Begin Journey
          </a>
          <a
            href="#portfolio"
            onClick={(e) => { e.preventDefault(); handleNav("#portfolio"); }}
            className="inline-flex items-center px-8 py-4 rounded-full border border-white/30 text-white font-medium text-sm tracking-wide hover:border-[#C5A028] hover:text-[#C5A028] transition-all duration-200"
          >
            View Our Films
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
