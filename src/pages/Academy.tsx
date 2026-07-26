import { motion } from "framer-motion";
import { Target, Quote, ArrowRight, Play, CheckCircle2 } from "lucide-react";
import PillNav from "@/components/PillNav";
import TopHeaderNav from "@/components/TopHeaderNav";
import SiteFooter from "@/components/SiteFooter";

const Academy = () => {
  return (
    <div className="min-h-screen bg-[#070E22] text-white flex flex-col font-sans selection:bg-[#C5A028] selection:text-[#0B1838]">
      <PillNav />
      <TopHeaderNav />

      {/* Cinematic Hero Header */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Image & Cinematic Gradient Overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src="/the-academy/1224_Almuksin Abdul_Elina Maliak.jpg"
            alt="Seed Academy Training"
            className="w-full h-full object-cover object-center scale-105 filter brightness-90"
          />
          {/* Multi-layered cinematic vignettes */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#070E22] via-[#070E22]/70 to-[#070E22]/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070E22]/90 via-transparent to-[#070E22]/90" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#070E22]/40 to-[#070E22]" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10 pt-16 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <span className="inline-block px-5 py-2 rounded-full text-xs font-bold tracking-[0.25em] text-[#C5A028] bg-[#070E22]/80 border border-[#C5A028]/40 backdrop-blur-md uppercase shadow-lg shadow-[#C5A028]/10">
              Seed Academy
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-normal md:leading-tight text-white drop-shadow-2xl mb-8"
          >
            Empowering Youth in <span className="text-[#C5A028]">Northern Tanzania</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-md"
          >
            At the academy, we equip youths in Northern Tanzania with practical filmmaking and storytelling skills, helping them <span className="text-[#C5A028] font-semibold">DISCOVER</span> creative careers while documenting the stories, cultures, and perspectives of their own communities.
          </motion.p>
        </div>
      </section>

      {/* Motto Feature Banner */}
      <section className="py-12 border-y border-[#C5A028]/20 bg-[#0B1838]/80 backdrop-blur-md px-6 relative overflow-hidden">
        <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-[#C5A028]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Quote className="w-10 h-10 text-[#C5A028]/40 mx-auto mb-3" />
          <p className="text-xs uppercase tracking-[0.25em] text-[#C5A028] font-bold mb-2">Our Motto</p>
          <h2 className="font-display text-2xl md:text-4xl font-bold text-white tracking-wide italic">
            "You don’t have to leave home to have a future."
          </h2>
        </div>
      </section>

      {/* Featured Academy Film Showcase */}
      <section className="py-16 px-6 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C5A028] mb-2">
            <Play className="w-3.5 h-3.5 fill-[#C5A028]" /> Student Showcase Film
          </span>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-white">
            Intergenerational
          </h3>
          <p className="text-sm text-white/70 mt-3 max-w-2xl mx-auto leading-relaxed">
            A young man faces a dilemma: remain to shield his vulnerable family from relatives seeking to dispossess them, or leave in pursuit of an education that could change their future forever.
          </p>
        </motion.div>

        <div className="relative rounded-2xl overflow-hidden border border-[#C5A028]/30 bg-[#0B1838] shadow-2xl aspect-video w-full">
          <iframe
            src="https://www.youtube-nocookie.com/embed/KqQ1R_zvIXw?autoplay=1&mute=1&loop=1&playlist=KqQ1R_zvIXw&start=0&end=60&rel=0"
            title="Intergenerational - Seed Academy Film Showcase"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>
      </section>

      {/* Editorial Section */}
      <section className="py-20 px-6 max-w-4xl mx-auto flex-grow text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C5A028] bg-[#C5A028]/10 border border-[#C5A028]/20 px-4 py-1.5 rounded-full">
            <Target className="w-4 h-4" />
            <span>Our Mission & Vision</span>
          </div>

          <h2 className="font-display text-3xl md:text-5xl font-bold text-white leading-tight">
            Empowering Youth, Preserving Stories, Building Futures
          </h2>

          <p className="text-white/80 text-lg md:text-xl leading-relaxed font-light max-w-3xl mx-auto">
            Through hands-on training, we inspire low-income youths, students and school dropouts in Northern Tanzania to discover creative careers, preserve local stories, and contribute to a more inclusive creative industry.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <div className="flex items-center gap-2 text-sm text-[#C5A028] bg-[#C5A028]/10 border border-[#C5A028]/20 px-4 py-2 rounded-full font-medium">
              <CheckCircle2 className="w-4 h-4" />
              <span>Hands-on Mentorship</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#C5A028] bg-[#C5A028]/10 border border-[#C5A028]/20 px-4 py-2 rounded-full font-medium">
              <CheckCircle2 className="w-4 h-4" />
              <span>Local Capacity Building</span>
            </div>
          </div>

          <div className="pt-6">
            <a
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#C5A028] text-[#0B1838] font-bold text-base hover:bg-[#d8b335] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-xl shadow-[#C5A028]/20"
            >
              <span>Get Involved / Inquire</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Academy Gallery Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A028] mb-2 block">
            Inside The Academy
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white">
            Life & Training at Seed Academy
          </h2>
          <div className="mt-4 w-16 h-0.5 bg-[#C5A028] mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {[
            {
              src: "/the-academy/1224_Almuksin Abdul_Elina Maliak.jpg",
              title: "Hands-on Equipment Training",
              caption: "Students mastering camera work, framing, and practical cinematography."
            },
            {
              src: "/the-academy/1224_Almuksin Abdul_Storylab_Fil.jpg",
              title: "Storylab & Workshop",
              caption: "Interactive storytelling sessions developing narrative concept and script ideas."
            },
            {
              src: "/the-academy/1224_Elizabeth Daniel_Theresia S.jpg",
              title: "Creative Mentorship",
              caption: "Collaborative learning and guidance from industry professionals."
            },
            {
              src: "/the-academy/1224_Paulina William_Samwel Dani.jpg",
              title: "On-Set Production Practice",
              caption: "Practical film production experience in real community settings."
            }
          ].map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden border border-[#C5A028]/20 bg-[#0B1838] shadow-xl hover:border-[#C5A028]/50 transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#070E22]/90 via-[#070E22]/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              <div className="absolute bottom-0 inset-x-0 p-6 flex flex-col justify-end">
                <h3 className="font-display text-xl font-bold text-white group-hover:text-[#C5A028] transition-colors">
                  {photo.title}
                </h3>
                <p className="text-xs md:text-sm text-white/80 mt-1 leading-relaxed">
                  {photo.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Academy;
