import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import kephasImg from "@/assets/kephas.jpg";
import danielImg from "@/assets/daniel.jpg";

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

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
