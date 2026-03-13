import { Instagram, Youtube, Twitter } from "lucide-react";

const SiteFooter = () => {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-display text-xl font-bold text-primary tracking-tight">
          Seed Pictures
        </div>

        <div className="flex items-center gap-5">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="YouTube">
            <Youtube className="w-5 h-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
            <Twitter className="w-5 h-5" />
          </a>
        </div>

        <a
          href="mailto:info@seedfilms.com"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          info@seedfilms.com
        </a>
      </div>
    </footer>
  );
};

export default SiteFooter;
