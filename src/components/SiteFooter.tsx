import { Instagram, Youtube } from "lucide-react";

const SiteFooter = () => {
  return (
    <footer className="bg-[#C5A028] py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left flex flex-col items-center md:items-start">
          <img src="/Icon-Gold-Navy.png" alt="Seed Pictures Logo" className="h-10 w-auto object-contain" />
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://www.instagram.com/seedpictures.tz/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-[#0B1838]/20 flex items-center justify-center text-[#0B1838]/70 hover:text-[#0B1838] hover:border-[#0B1838] transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href="https://youtube.com/@seedpictures-q4b"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-[#0B1838]/20 flex items-center justify-center text-[#0B1838]/70 hover:text-[#0B1838] hover:border-[#0B1838] transition-colors"
            aria-label="YouTube"
          >
            <Youtube className="w-4 h-4" />
          </a>
        </div>

        <a
          href="mailto:info@seedpictures.co.tz"
          className="text-sm text-[#0B1838]/70 hover:text-[#0B1838] font-medium transition-colors"
        >
          info@seedpictures.co.tz
        </a>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-[#0B1838]/15 text-center">
        <p className="text-xs text-[#0B1838]/50">© {new Date().getFullYear()} Seed Pictures. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default SiteFooter;
