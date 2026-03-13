import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "#portfolio" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const PillNav = () => {
  const [visible, setVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const doNavigate = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("/")) {
      navigate(href);
      return;
    }
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        if (href === "#") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return;
    }
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClick = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    doNavigate(href);
  };

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.nav
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -60, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed top-6 inset-x-0 mx-auto w-fit z-50"
          >
            {/* Desktop pill */}
            <div className="hidden md:flex items-center gap-1 rounded-full border border-border bg-card/80 backdrop-blur-xl px-2 py-2 shadow-lg shadow-background/50">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={handleClick(link.href)}
                  className="px-5 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-primary hover:bg-secondary transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile floating button */}
            <div className="md:hidden flex justify-center">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="flex items-center gap-2 rounded-full border border-border bg-card/80 backdrop-blur-xl px-4 py-3 shadow-lg shadow-background/50 text-primary"
                aria-label="Toggle menu"
              >
                <Menu className="w-5 h-5" />
                <span className="text-sm font-medium">Menu</span>
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-md flex flex-col items-center justify-center gap-8"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 p-2 text-primary"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={(e) => { e.preventDefault(); doNavigate(link.href); }}
                className="font-display text-2xl font-semibold text-primary hover:text-accent transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PillNav;
