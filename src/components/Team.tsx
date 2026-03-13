import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import sarahImg from "@/assets/sarah-johnson.jpg";
import marcusImg from "@/assets/marcus-chen.jpg";
import davidImg from "@/assets/david-rodriguez.jpg";

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

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">Team</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">
            Meet the Team
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
              className="rounded-2xl bg-card border border-border p-8 text-center glow-border hover:border-muted transition-colors duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover mx-auto mb-6 border-2 border-border"
              />
              <h3 className="font-display text-lg font-semibold text-primary">{member.name}</h3>
              <p className="text-accent text-sm mb-4">{member.role}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
