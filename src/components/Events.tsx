import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar } from "lucide-react";

const events = [
  { title: "Nature's Voice Screening", date: "October 15, 2024" },
  { title: "Documentary Workshop", date: "November 20, 2024" },
  { title: "Environmental Film Awards", date: "December 8, 2024" },
];

const Events = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
            What's Next
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">
            Upcoming Events
          </h2>
        </motion.div>

        <div className="space-y-4">
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
              className="flex items-center gap-6 rounded-2xl bg-card border border-border p-6 hover:border-muted transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                <Calendar className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-primary">{event.title}</h3>
                <p className="text-muted-foreground text-sm">{event.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
