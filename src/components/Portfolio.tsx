import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Play } from "lucide-react";

const film = {
  title: "Nadupa",
  year: "2026",
  description: "A narrative film that confronts women's rights to property ownership and the practice of widow inheritance, reflecting a rare combination of artistic depth and lived experience to shape communities.",
  image: "/Nadupa-film-posta.jpg",
};

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-[#C5A028] mb-4 font-medium">
            Portfolio
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Our Film
          </h2>
          <div className="mt-4 w-16 h-0.5 bg-[#C5A028] mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-4xl mx-auto rounded-2xl bg-card border border-border overflow-hidden hover:border-[#C5A028]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#C5A028]/5"
        >
          <div className="grid md:grid-cols-12 gap-0">
            {/* Image side */}
            <div className="md:col-span-5 relative overflow-hidden">
              <img
                src={film.image}
                alt={film.title}
                className="w-full h-auto md:h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#0B1838]/30" />
            </div>
            
            {/* Content side */}
            <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-center border-t md:border-t-0 md:border-l border-border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-white">
                  {film.title}
                </h3>
                <span className="text-[#C5A028] font-bold text-sm tracking-wider">
                  {film.year}
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {film.description}
              </p>
              <div className="flex flex-col items-start gap-4">
                <a
                  href="https://youtu.be/QtGAURHuo3E"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#C5A028] transition-colors group/btn"
                >
                  <span className="w-7 h-7 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover/btn:bg-[#C5A028]/20 group-hover/btn:border-[#C5A028]/30 transition-colors">
                    <Play className="w-3 h-3 fill-white group-hover/btn:fill-[#C5A028] text-white group-hover/btn:text-[#C5A028]" />
                  </span>
                  Watch Trailer
                </a>
                <a
                  href="https://vimeo.com/1199552317/b2b9df27eb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#C5A028] hover:text-[#C5A028]/80 transition-colors group/btn"
                >
                  <span className="w-7 h-7 rounded-full bg-[#C5A028]/10 border border-[#C5A028]/30 flex items-center justify-center group-hover/btn:bg-[#C5A028]/20 transition-colors">
                    <Play className="w-3 h-3 fill-[#C5A028]" />
                  </span>
                  Watch Behind the Scenes
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
