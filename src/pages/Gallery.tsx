import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import PillNav from "@/components/PillNav";
import SiteFooter from "@/components/SiteFooter";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80",
    alt: "Behind the scenes — camera setup",
    category: "Behind the Scenes",
  },
  {
    src: "https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?w=800&q=80",
    alt: "Film production crew on location",
    category: "Production",
  },
  {
    src: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80",
    alt: "Voices of the Forest — still frame",
    category: "Film Stills",
  },
  {
    src: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&q=80",
    alt: "Ocean's Memory — coastal scene",
    category: "Film Stills",
  },
  {
    src: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80",
    alt: "Seeds of Tomorrow — nature close-up",
    category: "Film Stills",
  },
  {
    src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80",
    alt: "Urban Wilderness — city skyline",
    category: "Film Stills",
  },
  {
    src: "https://images.unsplash.com/photo-1505533321630-975218a5f66f?w=800&q=80",
    alt: "Golden hour on set",
    category: "Behind the Scenes",
  },
  {
    src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    alt: "Landscape scouting — open fields",
    category: "Locations",
  },
  {
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
    alt: "Mountain location scouting",
    category: "Locations",
  },
  {
    src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80",
    alt: "Director reviewing footage",
    category: "Behind the Scenes",
  },
  {
    src: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80",
    alt: "Cinema screening premiere",
    category: "Events",
  },
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80",
    alt: "Scenic lake — location scouting",
    category: "Locations",
  },
];

const Gallery = () => {
  return (
    <main className="min-h-screen bg-background">
      <PillNav />

      {/* Header */}
      <section className="pt-24 pb-12 section-padding">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Gallery
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary">
              Behind the Lens
            </h1>
            <p className="mt-4 text-muted-foreground max-w-xl text-lg">
              A visual journey through our productions — from location scouting to the final frame.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="section-padding pt-0">
        <div className="max-w-6xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="break-inside-avoid group relative rounded-2xl overflow-hidden border border-border bg-card"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-xs uppercase tracking-wider text-accent">
                  {image.category}
                </span>
                <p className="text-sm text-primary font-medium mt-1">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
};

export default Gallery;
