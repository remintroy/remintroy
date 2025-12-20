import { Button } from "../ui/button";
import { Section } from "./Section";
import { ExternalLink, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export const Fun = () => {
  const puzzleTiles = [1, 2, 3, 9, 12, 14, null, 11, 10, 6, 5, 8, 7, 13, 4, 15];

  return (
    <Section id="fun" className="bg-background relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-12 mb-4">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-bold uppercase tracking-widest text-primary flex items-center gap-2">
              <Sparkles className="h-4 w-4" /> Fun & Curiosity
            </span>
            <div className="h-[1px] flex-1 bg-border" />
          </div>
        </div>

        <div className="lg:col-span-6 space-y-8">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
            The <br />
            <span className="text-muted-foreground/20 outline-text">
              15-Puzzle
            </span>
            <br />
            Game
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed font-light max-w-xl">
            A classic mechanical puzzle that challenges your logic and spatial
            thinking. I built this digital version to experiment with complex
            state management and smooth layout animations.
          </p>
          <div className="pt-4">
            <Button
              size="lg"
              className="h-14 px-8 rounded-full text-lg gap-2 group"
              onClick={() =>
                window.open("https://fun.mastrovia.com/", "_blank")
              }
            >
              Play Now{" "}
              <ExternalLink className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>

        <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-[400px] p-6 rounded-[2.5rem] bg-[#0A0A0A] border border-white/5 shadow-2xl overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

            {/* Header info like screenshot */}
            <div className="flex justify-between items-start mb-6 px-2">
              <div className="flex gap-4 bg-neutral-900/50 p-3 rounded-2xl border border-white/5">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-500">
                    Time
                  </span>
                  <span className="text-xl font-black text-white">33s</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-500">
                    Moves
                  </span>
                  <span className="text-xl font-black text-white">75</span>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-10 h-10 rounded-xl bg-neutral-900/50 flex items-center justify-center border border-white/5 text-neutral-400">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="1" y1="1" x2="23" y2="23"></line>
                    <path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path>
                    <path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path>
                    <line x1="12" y1="19" x2="12" y2="23"></line>
                    <line x1="8" y1="23" x2="16" y2="23"></line>
                  </svg>
                </div>
                <div className="w-10 h-10 rounded-xl bg-neutral-900/50 flex items-center justify-center border border-white/5 text-neutral-400">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
                    <line x1="23" y1="9" x2="17" y2="15"></line>
                    <line x1="17" y1="9" x2="23" y2="15"></line>
                  </svg>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-3 bg-neutral-900/30 p-3 rounded-3xl border border-white/5 shadow-inner mb-6">
              {puzzleTiles.map((tile, i) => (
                <motion.div
                  key={i}
                  initial={tile === null ? {} : { opacity: 0, y: 10 }}
                  whileInView={tile === null ? {} : { opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                  className={`aspect-square rounded-xl flex items-center justify-center text-xl font-bold shadow-sm ${
                    tile === null
                      ? "bg-neutral-800/40 border border-white/5"
                      : i < 3
                      ? "bg-[#FCFCEE] text-neutral-900"
                      : "bg-[#DCDCCB] text-neutral-800"
                  }`}
                >
                  {tile}
                </motion.div>
              ))}
            </div>

            <div className="px-2">
              <div className="w-full h-14 rounded-2xl bg-neutral-900/50 border border-white/5 flex items-center justify-center text-sm font-bold uppercase tracking-[0.2em] text-neutral-400">
                Restart
              </div>
            </div>
          </motion.div>

          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 blur-[80px] rounded-full -z-10" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/20 blur-[80px] rounded-full -z-10" />
        </div>
      </div>
    </Section>
  );
};
