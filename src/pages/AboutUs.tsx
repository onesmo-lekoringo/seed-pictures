import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import PillNav from "@/components/PillNav";
import SiteFooter from "@/components/SiteFooter";
import aboutHeroImg from "@/assets/about-hero-team.png";
import whoWeAreImg from "@/assets/who-we-are.jpg";
import kephasImg from "@/assets/kephas.jpg";
import danielImg from "@/assets/daniel.jpg";

const coreValues = [
  "Integrity",
  "Access",
  "Community",
  "Hard work",
];

const team = [
  {
    name: "Samwel Kephas",
    role: "Founder",
    bio: "Samwel Kephas is a writer, director, producer, and the Founder of Seed Pictures. His work spans documentary and narrative filmmaking, with a distinct focus on stories that explore social change and human experience. Through Seed Pictures, he is building a dynamic creative platform that produces compelling films, empowers emerging talent through film training and mentorship, and contributes to the growth of the Tanzanian film industry.",
    image: kephasImg,
  },
  {
    name: "Daniel Samwel",
    role: "Filmmaker & Entrepreneur",
    bio: "Daniel Samwel is a Tanzanian filmmaker and entrepreneur. He tells stories through narratives that explore themes of justice, human connection, and societal transformation. His work includes NADUPA, a narrative film that confronts women's rights to property ownership and the practice of widow inheritance, reflecting a rare combination of artistic depth and lived experience to shape communities.",
    image: danielImg,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: "easeOut" },
  }),
};

const AboutUs = () => {
  const heroRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-50px" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const teamInView = useInView(teamRef, { once: true, margin: "-100px" });

  return (
    <main className="min-h-screen bg-background">
      <PillNav />

      {/* ── Hero: "Who We Are" — two-column layout ── */}
      <section className="pt-28 pb-20 md:pb-28 section-padding" ref={heroRef}>
        <div className="max-w-6xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left — Text */}
            <motion.div
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              variants={fadeUp}
              custom={0}
            >
              <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4">About Us</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-8">
                Who We Are
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Seed Pictures is a fully integrated production company based in Arusha, Tanzania, 
                which caters to all aspects of film, documentary, and television production.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Driven by a vision to expand opportunities in the film industry, Seed Pictures is 
                committed to telling quality, unique, and creative stories while promoting community 
                ownership and capacity building. Through collaboration, training, and innovative 
                production, we aim to contribute to a more inclusive and decentralized Tanzanian 
                film landscape.
              </p>
            </motion.div>

            {/* Right — Hero image */}
            <motion.div
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              variants={fadeUp}
              custom={1}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden border border-border shadow-2xl shadow-background/60">
                <img
                  src={whoWeAreImg}
                  alt="Seed Pictures production crew on set"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Glow accent behind the image */}
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-accent/5 blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Vision, Mission & Core Values — dark cinematic section ── */}
      <section
        ref={valuesRef}
        className="relative py-24 md:py-32 overflow-hidden"
      >
        {/* Background image + overlay */}
        <div className="absolute inset-0">
          <img
            src={aboutHeroImg}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Left — Vision & Mission */}
            <div className="space-y-12">
              {/* Vision */}
              <motion.div
                initial="hidden"
                animate={valuesInView ? "visible" : "hidden"}
                variants={fadeUp}
                custom={0}
                className="flex gap-6"
              >
                <div className="w-1 shrink-0 rounded-full bg-accent" />
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-primary mb-4">
                    Our Vision
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To build a decentralized Tanzanian film industry by empowering filmmakers and 
                    storytelling communities across the country.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right — Core Values */}
            <motion.div
              initial="hidden"
              animate={valuesInView ? "visible" : "hidden"}
              variants={fadeUp}
              custom={2}
            >
              <h2 className="font-display text-2xl md:text-3xl font-bold text-primary mb-8">
                Core Values
              </h2>
              <ul className="space-y-4">
                {coreValues.map((value, i) => (
                  <motion.li
                    key={value}
                    initial="hidden"
                    animate={valuesInView ? "visible" : "hidden"}
                    variants={fadeUp}
                    custom={2.5 + i * 0.5}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-accent shrink-0" />
                    <span className="leading-relaxed">{value}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Our Team — 3-column grid ── */}
      <section className="section-padding" ref={teamRef}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            animate={teamInView ? "visible" : "hidden"}
            variants={fadeUp}
            custom={0}
            className="text-center mb-16"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4">Our Team</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">
              Biographies
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial="hidden"
                animate={teamInView ? "visible" : "hidden"}
                variants={fadeUp}
                custom={i + 1}
                className="group rounded-2xl bg-card border border-border overflow-hidden glow-border hover:border-muted transition-colors duration-300"
              >
                {/* Member photo — taller, editorial-style */}
                <div className="relative overflow-hidden aspect-[3/4]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                </div>

                {/* Name badge */}
                <div className="bg-accent px-5 py-2">
                  <h3 className="font-display text-base font-semibold text-accent-foreground">
                    {member.name}
                  </h3>
                </div>

                {/* Info */}
                <div className="p-6">
                  <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
};

export default AboutUs;
