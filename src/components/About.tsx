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
      "A world where storytelling bridges cultures, inspires action, and drives sustainable change — one film at a time. We envision media as a catalyst for empathy and understanding.",
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
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">About Us</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">
            A Creative Hub for Change
          </h2>
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
              className="rounded-2xl bg-card border border-border p-8 md:p-10 glow-border hover:border-muted transition-colors duration-300"
            >
              <h3 className="font-display text-2xl font-semibold text-primary mb-4">
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
