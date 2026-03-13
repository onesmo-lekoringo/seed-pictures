import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import PillNav from "@/components/PillNav";
import SiteFooter from "@/components/SiteFooter";

const inquirySchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  details: z.string().trim().min(1, "Project details are required").max(2000),
});

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", details: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = inquirySchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitting(true);

    // 1. Save to Supabase database
    const { error } = await supabase.from("contact_submissions").insert({
      name: result.data.name,
      email: result.data.email,
      details: result.data.details,
    });

    if (error) {
      setSubmitting(false);
      toast.error("Failed to send inquiry. Please try again.");
      return;
    }

    // 2. Send email notification via Resend (API server)
    try {
      const emailRes = await fetch("http://localhost:3001/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: result.data.name,
          email: result.data.email,
          details: result.data.details,
        }),
      });

      if (!emailRes.ok) {
        console.warn("Email notification failed:", await emailRes.text());
      }
    } catch (emailErr) {
      console.warn("Email notification failed:", emailErr);
    }

    setSubmitting(false);
    toast.success("Inquiry sent successfully!");
    setForm({ name: "", email: "", details: "" });
  };

  return (
    <main className="min-h-screen bg-background">
      <PillNav />

      {/* Hero Banner */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1920&q=80"
          alt="Contact hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/60" />

        {/* Top nav */}
        <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 md:px-12 py-6">
          <Link to="/" className="font-display text-lg font-bold text-primary tracking-wide">
            Seed Pictures
          </Link>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 font-display text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-primary tracking-tight uppercase px-4 text-center"
        >
          Just a Click Away
        </motion.h1>
      </section>

      {/* Let's Connect */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl md:text-5xl font-bold text-muted-foreground uppercase tracking-wide"
          >
            Let's Connect
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-8"
          >
            <a
              href="mailto:info@seedpictures.com"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-lg"
            >
              <Mail className="w-4 h-4" />
              info@seedpictures.com
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-lg"
            >
              <Phone className="w-4 h-4" />
              (123) 456 7890
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 flex items-center justify-center gap-6"
          >
            {["Twitter", "Instagram", "Facebook"].map((platform) => (
              <a
                key={platform}
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {platform}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Inquiry Form */}
      <section className="section-padding pt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h3 className="font-display text-2xl font-bold text-primary text-center mb-10">
            Project Inquiry
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-transparent border-b border-border py-4 text-primary placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-transparent border-b border-border py-4 text-primary placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <textarea
                placeholder="Project Details"
                rows={4}
                value={form.details}
                onChange={(e) => setForm({ ...form, details: e.target.value })}
                className="w-full bg-transparent border-b border-border py-4 text-primary placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              />
              {errors.details && <p className="text-destructive text-sm mt-1">{errors.details}</p>}
            </div>
            <div className="text-center pt-4">
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center px-10 py-4 rounded-full bg-primary text-primary-foreground font-medium text-sm tracking-wide hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {submitting ? "Sending…" : "Send Inquiry"}
              </button>
            </div>
          </form>
        </motion.div>
      </section>

      <SiteFooter />
    </main>
  );
};

export default Contact;
