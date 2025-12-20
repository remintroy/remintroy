import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Hero } from "./components/layout/Hero";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Section } from "./components/layout/Section";
import { Button } from "./components/ui/button";
import { Noise } from "./components/ui/noise";
import { ProjectCard } from "./components/ui/ProjectCard";

const projects = [
  {
    title: "EcoSphere Dashboard",
    description:
      "A real-time environmental monitoring system built with distributed microservices architecture for massive scale.",
    tags: ["React", "Node.js", "Redis"],
    year: "2024",
  },
  {
    title: "Lumina Analytics",
    description:
      "High-performance data visualization platform processing millions of events per second with TypeScript and GraphQL.",
    tags: ["Next.js", "Go", "InfluxDB"],
    year: "2023",
  },
  {
    title: "Nimbus Cloud Engine",
    description:
      "Cloud-native infrastructure management tool designed for automated scaling and resilient deployments.",
    tags: ["Docker", "Kubernetes", "Express"],
    year: "2023",
  },
];

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground relative overflow-hidden font-sans">
      <Noise />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex flex-col items-center gap-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl font-black tracking-tighter"
              >
                RT<span className="text-primary italic">.</span>
              </motion.div>
              <div className="h-[2px] w-16 bg-muted relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-primary"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Navbar />

            <Hero />

            <Section id="projects" className="relative">
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />

              <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 md:mb-24">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="h-[1px] w-12 bg-primary" />
                    <span className="text-sm font-bold uppercase tracking-widest text-primary">
                      Portfolio
                    </span>
                  </div>
                  <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none">
                    Selected <br />
                    <span className="text-muted-foreground/30 outline-text">
                      Works
                    </span>
                  </h2>
                </div>
                <div className="hidden md:block max-w-sm text-right">
                  <p className="text-muted-foreground text-lg italic">
                    Curated selection of projects showcasing expertise in
                    distributed systems and modern web architecture.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                {projects.map((project, i) => (
                  <ProjectCard key={i} {...project} index={i} />
                ))}
              </div>

              <div className="mt-20 flex justify-center">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-12 h-14 text-lg border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  View All Projects
                </Button>
              </div>
            </Section>

            <Section
              id="about"
              className="bg-muted/30 relative overflow-hidden"
            >
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                <div className="lg:col-span-12 mb-10">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-sm font-bold uppercase tracking-widest text-primary">
                      Expertise
                    </span>
                    <div className="h-[1px] flex-1 bg-border" />
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-12">
                  <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase whitespace-pre-line">
                    {"Building\nWith Purpose."}
                  </h2>
                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl font-light">
                    A self-taught MERN stack developer based in Palakkad,
                    Kerala. Curious to learn more about developing{" "}
                    <span className="text-foreground font-medium underline decoration-primary/30 decoration-4">
                      scalable distributed systems
                    </span>
                    . Loves problem-solving and cares about writing readable and
                    maintainable code.
                  </p>
                </div>

                <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      label: "Experience",
                      value: "5+ Years",
                      desc: "Professional development",
                    },
                    {
                      label: "Completed",
                      value: "50+",
                      desc: "Successful projects",
                    },
                    {
                      label: "Stack",
                      value: "MERN",
                      desc: "Full-stack excellence",
                    },
                    {
                      label: "Location",
                      value: "Kerala",
                      desc: "Operating globally",
                    },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="p-8 rounded-3xl bg-background border border-border/50 shadow-sm hover:border-primary/30 transition-colors group"
                    >
                      <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">
                        {stat.label}
                      </div>
                      <div className="text-4xl font-black tracking-tighter mb-1 transition-transform group-hover:scale-110 origin-left">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Section>

            <Section
              id="contact"
              className="min-h-[80vh] flex items-center bg-black text-white relative"
            >
              <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
              <div className="container relative z-10 flex flex-col items-center text-center gap-12 max-w-4xl mx-auto">
                <div className="space-y-6">
                  <span className="text-sm font-bold uppercase tracking-[0.3em] text-white/40">
                    Contact
                  </span>
                  <h2 className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase">
                    Let&apos;s <br />{" "}
                    <span
                      className="text-white/20 outline-text"
                      style={{ WebkitTextStrokeColor: "white" }}
                    >
                      Collaborate
                    </span>
                  </h2>
                </div>

                <p className="text-white/60 text-xl md:text-2xl font-light max-w-2xl leading-relaxed">
                  I&apos;m currently open to new opportunities and interesting
                  projects. If you have an idea, let&apos;s make it happen.
                </p>

                <div className="flex flex-wrap gap-6 pt-6">
                  <Button
                    size="lg"
                    className="h-16 px-12 rounded-full text-xl bg-white text-black hover:bg-neutral-200"
                  >
                    Email Me
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-16 px-12 rounded-full text-xl border-white/20 text-white hover:bg-white hover:text-black"
                  >
                    LinkedIn
                  </Button>
                </div>
              </div>
            </Section>

            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
