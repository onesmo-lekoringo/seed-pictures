import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Play } from "lucide-react";

const films = [
  {
    title: "Voices of the Forest",
    year: "2024",
    description: "Exploring the relationship between ancient forests and traditional practices.",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80",
  },
  {
    title: "Seeds of Tomorrow",
    year: "2023",
    description: "Following young environmental activists and youth leadership.",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&q=80",
  },
  {
    title: "Ocean's Memory",
    year: "2023",
    description: "Environmental drama about coastal communities and rising sea levels.",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=600&q=80",
  },
  {
    title: "Urban Wilderness",
    year: "2022",
    description: "Exploring biodiversity thriving in urban environments.",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80",
  },
];

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
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Portfolio
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">
            Our Films
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {films.map((film, i) => (
            <motion.div
              key={film.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.1 }}
              className="group rounded-2xl bg-card border border-border overflow-hidden glow-border hover:border-muted transition-colors duration-300"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={film.image}
                  alt={film.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-background/40" />
                <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-accent/90 text-accent-foreground text-xs font-medium px-3 py-1 rounded-full">
                  <Award className="w-3 h-3" />
                  Award Winner
                </div>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display text-xl font-semibold text-primary">
                    {film.title}
                  </h3>
                  <span className="text-xs text-muted-foreground">{film.year}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {film.description}
                </p>
                <button className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors">
                  <Play className="w-4 h-4" />
                  Watch Trailer
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
