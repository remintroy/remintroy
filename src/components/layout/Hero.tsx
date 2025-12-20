import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Github, Linkedin, Instagram } from "lucide-react";
import { useRef } from "react";

export const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="min-h-screen flex items-center pt-20 overflow-hidden relative"
    >
      <div className="container px-4 md:px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            style={{ y: textY }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col gap-8"
          >
            <div className="inline-flex items-center self-start rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
              Building scalable distributed systems
            </div>

            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] uppercase">
                Remin <br />
                <span className="text-muted-foreground/20 outline-text">
                  T Roy
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-[500px] leading-relaxed">
                Full-stack developer architecting the next generation of
                scalable web applications.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="h-14 px-8 rounded-full text-lg gap-2"
              >
                Explore Work <ArrowRight className="h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 rounded-full text-lg"
              >
                Let&apos;s Talk
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-6">
              {[
                { icon: Github, href: "https://github.com/remintroy" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/remin-t-roy/",
                },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/remin_t_roy/",
                },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  whileHover={{ y: -4 }}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <social.icon size={28} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            style={{ y: imageY }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[4/5] rounded-3xl bg-neutral-100 dark:bg-neutral-900 border overflow-hidden group shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.4)_100%)] opacity-50" />
                <span className="text-[20rem] font-black text-primary/5 select-none pointer-events-none">
                  RT
                </span>
              </div>

              {/* Floating elements for "Unique" look */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-10 right-10 p-4 rounded-xl bg-background/80 backdrop-blur-md border border-white/10 shadow-xl z-20"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                    Stack
                  </span>
                  <span className="text-sm font-semibold">MERN / Cloud</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-10 left-10 p-4 rounded-xl bg-background/80 backdrop-blur-md border border-white/10 shadow-xl z-20"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                    Base
                  </span>
                  <span className="text-sm font-semibold">Kerala, India</span>
                </div>
              </motion.div>
            </div>

            {/* Background blobs */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 blur-[100px] rounded-full z-0" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary/20 blur-[100px] rounded-full z-0" />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
};
