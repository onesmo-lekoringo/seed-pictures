import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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
          <p className="text-sm uppercase tracking-[0.2em] text-[#C5A028] mb-4 font-medium">Team</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Meet the Team
          </h2>
          <div className="mt-4 w-16 h-0.5 bg-[#C5A028] mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
              className="rounded-2xl bg-card border border-border overflow-hidden hover:border-[#C5A028]/40 hover:shadow-lg hover:shadow-[#C5A028]/5 transition-all duration-300 group"
            >
              <div className="p-8 text-center">
                <div className="relative inline-block mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-28 h-28 rounded-full object-cover border-4 border-[#C5A028] shadow-lg shadow-[#C5A028]/20"
                  />
                  <div className="absolute -inset-1 rounded-full border border-[#C5A028]/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-display text-lg font-semibold text-white">{member.name}</h3>
                <p className="text-[#C5A028] text-sm font-medium mt-1 mb-4">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
