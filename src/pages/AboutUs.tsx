import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft, Shield, Eye, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";
import PillNav from "@/components/PillNav";
import TopHeaderNav from "@/components/TopHeaderNav";
import SiteFooter from "@/components/SiteFooter";
import whoWeAreImg from "@/assets/who-we-are.jpg";
import kephasImg from "@/assets/kephas.jpg";
import danielImg from "@/assets/daniel.jpg";



const team = [
  {
    name: "Samwel Kephas",
    role: "Executive Director",
    bio: "Samwel Kephas is a Tanzanian film producer and currently the Executive Director of Seed Pictures, overseeing the company's creative endeavors spanning films, documentaries, as well as its business development. Kephas began his journey in film as a cinematography student at storylab in 2017 and made his first documentary, Coach Happy, in 2019. After graduation, he joined Multichoice Talent Factory, where he worked on his first feature, Deadbeat, in 2024, along with music videos and documentaries. Later that year, he founded Seed Pictures and led the company to produce its first film, NADUPA, in 2026. Kephas' journey extends beyond film production. Through Seed Pictures' film training program, he leads community development by expanding access to alternative career pathways for young men and women in Northern Tanzania.",
    image: kephasImg,
  },
  {
    name: "Daniel Samwel",
    role: "Co-Founder | Entrepreneur",
    bio: "Daniel Samwel is a filmmaker and an entrepreneur from Tanzania. He tells stories through narratives that explore themes of justice, human connection, and societal transformation. He is the director of NADUPA, a narrative short film exploring gender roles, land rights, and widow inheritance in his community. Daniel is the co-founder of Seed Pictures, an independent film production company based in northern Tanzania. Seed Pictures is committed to telling authentic stories that spark social dialogue and impact youth in the Maasai community through film.",
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
    <main className="min-h-screen bg-background relative">
      <TopHeaderNav />
      <PillNav />

      {/* ── Hero: "Who We Are" — two-column layout ── */}
      <section className="pt-28 pb-20 md:pb-28 section-padding" ref={heroRef}>
        <div className="max-w-6xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-[#C5A028] transition-colors mb-12"
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
              <p className="text-sm uppercase tracking-[0.2em] text-[#C5A028] mb-4 font-medium">About Us</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
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
              className="relative h-full flex"
            >
              <div className="rounded-2xl overflow-hidden border-2 border-[#C5A028]/30 shadow-2xl shadow-[#C5A028]/10 w-full h-full min-h-[350px] md:min-h-[480px]">
                <img
                  src={whoWeAreImg}
                  alt="Seed Pictures production crew on set"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Gold glow accent behind the image */}
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-[#C5A028]/5 blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Vision, Mission & Core Values — dark cinematic section ── */}
      <section
        ref={valuesRef}
        className="relative py-28 md:py-36 overflow-hidden border-y border-border/40"
      >
        {/* Background image + overlay */}
        <div className="absolute inset-0">
          <img
            src="/values.jpg"
            alt="Core Values Background"
            className="w-full h-full object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1838]/95 via-[#0B1838]/85 to-[#0B1838]/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1838]/90 via-transparent to-[#0B1838]/90" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left — Vision Statement (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <motion.div
                initial="hidden"
                animate={valuesInView ? "visible" : "hidden"}
                variants={fadeUp}
                custom={0}
              >
                <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-2 mb-6 leading-tight">
                  Our Vision
                </h2>
                
                <div className="relative p-8 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 shadow-2xl overflow-hidden group hover:border-[#C5A028]/30 transition-all duration-300">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#C5A028] to-[#C5A028]/20" />
                  <p className="text-white/90 text-lg md:text-xl font-medium leading-relaxed mb-4">
                    "We envision a world where stories inspire the creation of inclusive and equitable communities."
                  </p>
                  <p className="text-[#C5A028] text-sm font-semibold tracking-wider uppercase">
                    Seed Pictures
                  </p>
                  
                  {/* Subtle decorative glow */}
                  <div className="absolute -right-16 -bottom-16 w-32 h-32 rounded-full bg-[#C5A028]/10 blur-3xl group-hover:bg-[#C5A028]/20 transition-colors duration-300 pointer-events-none" />
                </div>
              </motion.div>
            </div>

            {/* Right — Core Values (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <motion.div
                initial="hidden"
                animate={valuesInView ? "visible" : "hidden"}
                variants={fadeUp}
                custom={1}
                className="mb-2"
              >
                <span className="text-xs uppercase tracking-[0.2em] text-[#C5A028] font-bold">Foundation</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white mt-2 mb-8">
                  Core Values
                </h2>
              </motion.div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    name: "Integrity",
                    desc: "Holding ourselves to the highest ethical and professional standards in all of our storytelling.",
                    icon: Shield,
                  },
                  {
                    name: "Access",
                    desc: "Creating open pathways and opportunities for underrepresented Tanzanian voices.",
                    icon: Eye,
                  },
                  {
                    name: "Community",
                    desc: "Fostering collaboration, localized training, and community-led ownership.",
                    icon: Users,
                  },
                  {
                    name: "Hard Work",
                    desc: "Unwavering commitment to exceptional quality, resilience, and creative excellence.",
                    icon: Award,
                  },
                ].map((value, i) => (
                  <motion.div
                    key={value.name}
                    initial="hidden"
                    animate={valuesInView ? "visible" : "hidden"}
                    variants={fadeUp}
                    custom={2 + i * 0.15}
                    className="p-6 rounded-xl bg-white/[0.02] backdrop-blur-sm border border-white/5 hover:border-[#C5A028]/20 hover:bg-white/[0.04] transition-all duration-300 group shadow-lg"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#C5A028]/10 flex items-center justify-center text-[#C5A028] mb-4 group-hover:bg-[#C5A028] group-hover:text-[#0B1838] transition-all duration-300">
                      <value.icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-[#C5A028] transition-colors duration-300">
                      {value.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
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
            <p className="text-sm uppercase tracking-[0.2em] text-[#C5A028] mb-4 font-medium">Our Team</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
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
                className="bio-card w-full"
              >
                <div className="bio-card-inner">
                  {/* Front Side: Photo, Name Badge, and Role overlay */}
                  <div className="bio-card-front bg-card border border-border flex flex-col justify-between">
                    <div className="relative overflow-hidden flex-1">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1838]/80 via-transparent to-transparent" />
                    </div>
                    
                    {/* Name & Role overlay at bottom */}
                    <div className="bg-[#C5A028] px-6 py-4 flex items-center justify-between">
                      <div>
                        <h3 className="font-display text-lg font-bold text-[#0B1838]">
                          {member.name}
                        </h3>
                        <p className="text-[#0B1838]/70 text-xs font-semibold uppercase tracking-wider">{member.role}</p>
                      </div>
                      <span className="text-xs font-semibold text-[#0B1838] bg-[#0B1838]/10 px-3 py-1 rounded-full uppercase tracking-wider">
                        Flip
                      </span>
                    </div>
                  </div>

                  {/* Back Side: Biography details */}
                  <div className="bio-card-back bg-[#0F2247] border-2 border-[#C5A028]/40 p-8 flex flex-col justify-center items-center text-center">
                    <h3 className="font-display text-2xl font-bold text-white mb-2">
                      {member.name}
                    </h3>
                    <p className="text-[#C5A028] text-sm font-semibold uppercase tracking-widest mb-6">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                      {member.bio}
                    </p>
                  </div>
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
