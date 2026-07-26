import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const cards = [
  {
    title: "Our Mission",
    description:
      "To create thought-provoking documentaries and narrative films that highlight environmental and social issues, fostering a deeper connection between humanity and the natural world.",
  },
  {
    title: "Our Vision",
    description:
      "We envision a world where stories inspire the creation of inclusive and equitable communities.",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-[#C5A028] mb-4 font-medium">About Us</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            A Creative Hub for Change
          </h2>
          <div className="mt-4 w-16 h-0.5 bg-[#C5A028] mx-auto mb-6" />
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg">
            Seed Pictures is a creative hub focused on innovative storytelling and sustainable
            production practices that push the boundaries of documentary filmmaking.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
              className="rounded-2xl bg-card border border-border border-l-4 border-l-[#C5A028] p-8 md:p-10 hover:shadow-lg hover:shadow-[#C5A028]/5 transition-all duration-300"
            >
              <h3 className="font-display text-2xl font-semibold text-white mb-4">
                {card.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
