import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Hero } from "./components/layout/Hero";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Section } from "./components/layout/Section";
import { Button } from "./components/ui/button";
import { Noise } from "./components/ui/noise";
import { Fun } from "./components/layout/Fun";
// import { Projects } from "./components/layout/Projects";

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

            <Fun />

            {/* <Projects /> */}

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
                  <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase whitespace-pre-line leading-[0.9]">
                    {"Building\nWith Purpose."}
                  </h2>
                  <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed max-w-2xl font-light">
                    A self-taught MERN stack developer based in Palakkad,
                    Kerala. Curious to learn more about developing{" "}
                    <span className="text-foreground font-medium underline decoration-primary/30 decoration-4">
                      scalable distributed systems
                    </span>
                    . Loves problem-solving and cares about writing readable and
                    maintainable code.
                  </p>
                  <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed max-w-2xl font-light mt-6">
                    I&apos;m a huge advocate for{" "}
                    <span className="text-foreground font-medium italic">
                      open-source software
                    </span>{" "}
                    and I&apos;m always looking for exciting projects to
                    contribute to. If you have a project that needs an extra
                    pair of hands, I&apos;d love to collaborate!
                  </p>
                </div>

                <div className="lg:col-span-5 flex flex-col gap-6">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      {
                        label: "Experience",
                        value: "5+ Years",
                        desc: "Professional dev",
                      },
                      {
                        label: "Open Source",
                        value: "Active",
                        desc: "Contributor",
                      },
                    ].map((stat, i) => (
                      <div
                        key={i}
                        className="p-6 rounded-3xl bg-background border border-border/50 shadow-sm hover:border-primary/30 transition-colors group"
                      >
                        <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2">
                          {stat.label}
                        </div>
                        <div className="text-2xl font-black tracking-tighter mb-1 transition-transform group-hover:scale-110 origin-left">
                          {stat.value}
                        </div>
                        <div className="text-[10px] text-muted-foreground">
                          {stat.desc}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-8 rounded-3xl bg-primary/[0.02] border border-dashed border-primary/20">
                    <h3 className="text-sm font-bold uppercase tracking-widest mb-6">
                      Technical Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "React",
                        "TypeScript",
                        "Node.js",
                        "Express",
                        "MongoDB",
                        "Docker",
                        "AWS",
                        "Redis",
                        "Next.js",
                        "Tailwind CSS",
                        "Framer Motion",
                      ].map((skill) => (
                        <div
                          key={skill}
                          className="px-3 py-1 rounded-full bg-background border text-xs font-medium hover:border-primary/50 transition-colors cursor-default"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
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
                  <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.85]">
                    Let&apos;s <br />{" "}
                    <span
                      className="text-white/20 outline-text"
                      style={{ WebkitTextStrokeColor: "white" }}
                    >
                      Collaborate
                    </span>
                  </h2>
                </div>

                <p className="text-white/60 text-lg md:text-2xl font-light max-w-2xl leading-relaxed">
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
                    className="h-16 px-12 rounded-full text-xl border-white/20 text-white bg-transparent hover:bg-white hover:text-black transition-all duration-300"
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
