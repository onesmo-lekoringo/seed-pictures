import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import PillNav from "@/components/PillNav";
import SiteFooter from "@/components/SiteFooter";
import aboutHeroImg from "@/assets/about-hero-team.png";
import sarahImg from "@/assets/sarah-johnson.jpg";
import marcusImg from "@/assets/marcus-chen.jpg";
import davidImg from "@/assets/david-rodriguez.jpg";

const coreValues = [
  "Authentic storytelling that sparks change",
  "Sustainable & ethical production practices",
  "Cultural sensitivity & community collaboration",
  "Innovation in documentary filmmaking",
  "Transparency & creative integrity",
];

const team = [
  {
    name: "Sarah Johnson",
    role: "Founder & Creative Director",
    bio: "Award-winning filmmaker with 15 years of experience in environmental documentaries. Sarah's vision drives every story we tell.",
    image: sarahImg,
  },
  {
    name: "Marcus Chen",
    role: "Head of Production",
    bio: "Technical visionary who brings stories to life with cutting-edge yet sustainable filmmaking techniques and meticulous craft.",
    image: marcusImg,
  },
  {
    name: "David Rodriguez",
    role: "Community Outreach Director",
    bio: "Passionate advocate connecting films with communities worldwide, ensuring our stories create meaningful, lasting impact.",
    image: davidImg,
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
                Seed Pictures is a creative hub focused on innovative storytelling and sustainable
                production practices that push the boundaries of documentary filmmaking.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Founded with a belief that great stories can change the world, we bring together
                talented filmmakers, writers, and producers who share a passion for impactful cinema.
                Every project we take on is rooted in authenticity, cultural sensitivity, and a deep
                respect for the communities whose stories we help tell.
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
                  src={aboutHeroImg}
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
                    A world where storytelling bridges cultures, inspires action, and drives
                    sustainable change — one film at a time. We envision media as a catalyst for
                    empathy and understanding.
                  </p>
                </div>
              </motion.div>

              {/* Mission */}
              <motion.div
                initial="hidden"
                animate={valuesInView ? "visible" : "hidden"}
                variants={fadeUp}
                custom={1}
                className="flex gap-6"
              >
                <div className="w-1 shrink-0 rounded-full bg-accent" />
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-primary mb-4">
                    Our Mission
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To create thought-provoking documentaries and narrative films that highlight
                    environmental and social issues, fostering a deeper connection between humanity
                    and the natural world.
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
            <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4">Team</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">
              Meet the Team
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
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
