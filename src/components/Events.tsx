import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Clock } from "lucide-react";

const event = {
  title: "NADUPA Premiere",
  location: "Locarno Film Festival",
  date: "August 11, 2026",
};

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
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-[#C5A028] mb-4 font-medium">
            What's Next
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Upcoming Events
          </h2>
          <div className="mt-4 w-16 h-0.5 bg-[#C5A028] mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-2xl bg-card border border-border p-8 md:p-10 hover:border-[#C5A028]/40 hover:shadow-lg hover:shadow-[#C5A028]/5 transition-all duration-300 relative overflow-hidden group"
        >
          {/* Subtle gold decoration */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#C5A028]/10 to-transparent rounded-bl-full pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="w-16 h-16 rounded-2xl bg-[#C5A028]/10 border border-[#C5A028]/30 flex items-center justify-center shrink-0 shadow-lg group-hover:bg-[#C5A028]/20 transition-colors">
              <Calendar className="w-8 h-8 text-[#C5A028]" />
            </div>
            
            <div className="flex-1 space-y-4">
              <div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-white group-hover:text-[#C5A028] transition-colors duration-300">
                  {event.title}
                </h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-muted-foreground pt-2">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[#C5A028] shrink-0" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#C5A028] shrink-0" />
                  <span>{event.date}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;
