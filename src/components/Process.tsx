import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "1",
    label: "Call",
    description: "Research and sustainable pre-production. We immerse ourselves in the subject, building authentic relationships with communities and landscapes.",
  },
  {
    number: "2",
    label: "Awaken",
    description: "High-fidelity filmmaking and authentic capture. Every frame is crafted with intention, using sustainable production methods that respect our subjects.",
  },
  {
    number: "3",
    label: "Embrace",
    description: "Distributing stories that bridge communities and cultures. We ensure each film reaches the audiences who need it most, sparking dialogue and change.",
  },
];

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">Process</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">
            How It Works
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full border border-border bg-card flex items-center justify-center mx-auto mb-6 glow-border">
                <span className="font-display text-2xl font-bold text-accent">{step.number}</span>
              </div>
              <h3 className="font-display text-xl font-semibold text-primary mb-3">
                {step.label}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
