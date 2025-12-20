import { Button } from "../ui/button";
import { Section } from "./Section";
import { ExternalLink, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export const Fun = () => {
  const puzzleTiles = [1, 2, 3, 9, 12, 14, null, 11, 10, 6, 5, 8, 7, 13, 4, 15];

  const PlayNowButton = ({ className }: { className?: string }) => (
    <Button
      size="lg"
      className={`h-14 px-8 rounded-full text-lg gap-2 group w-full sm:w-auto ${className}`}
      onClick={() => window.open("https://fun.mastrovia.com/", "_blank")}
    >
      Play Now{" "}
      <ExternalLink className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
    </Button>
  );

  return (
    <Section id="fun" className="bg-background relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
        <div className="lg:col-span-12 mb-4">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-bold uppercase tracking-widest text-primary flex items-center gap-2 whitespace-nowrap">
              <Sparkles className="h-4 w-4" /> Fun & Curiosity
            </span>
            <div className="h-[1px] flex-1 bg-border" />
          </div>
        </div>

        <div className="lg:col-span-6 space-y-6 md:space-y-8">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight sm:tracking-tighter uppercase leading-[0.9]">
            The <br />
            <span className="text-muted-foreground/20 outline-text">
              15-Puzzle
            </span>
            <br />
            Game
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light max-w-xl">
            Just a little something I built for fun! This is a digital version
            of the classic 15-puzzle. It&apos;s a great way to kill a few
            minutes and keep your brain sharp. Go ahead, give it a try—can you
            beat the clock?
          </p>
          <div className="pt-2 hidden lg:block">
            <PlayNowButton />
          </div>
        </div>

        <div className="lg:col-span-6 relative flex justify-center lg:justify-end mt-8 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-[320px] sm:max-w-[400px] p-4 sm:p-6 rounded-[2rem] sm:rounded-[2.5rem] bg-[#0A0A0A] border border-white/5 shadow-2xl overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

            {/* Header info like screenshot */}
            <div className="flex justify-between items-start mb-4 sm:mb-6 px-1 sm:px-2">
              <div className="flex gap-3 sm:gap-4 bg-neutral-900/50 p-2 sm:p-3 rounded-xl sm:rounded-2xl border border-white/5">
                <div className="flex flex-col">
                  <span className="text-[8px] sm:text-[10px] uppercase font-bold tracking-wider text-neutral-500">
                    Time
                  </span>
                  <span className="text-lg sm:text-xl font-black text-white">
                    33s
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[8px] sm:text-[10px] uppercase font-bold tracking-wider text-neutral-500">
                    Moves
                  </span>
                  <span className="text-lg sm:text-xl font-black text-white">
                    75
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-neutral-900/50 flex items-center justify-center border border-white/5 text-neutral-400">
                  <svg
                    width="16"
                    height="16"
                    className="sm:w-5 sm:h-5"
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
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-neutral-900/50 flex items-center justify-center border border-white/5 text-neutral-400">
                  <svg
                    width="16"
                    height="16"
                    className="sm:w-5 sm:h-5"
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

            <div className="grid grid-cols-4 gap-2 sm:gap-3 bg-neutral-900/30 p-2 sm:p-3 rounded-[1.5rem] sm:rounded-3xl border border-white/5 shadow-inner mb-4 sm:mb-6">
              {puzzleTiles.map((tile, i) => (
                <motion.div
                  key={i}
                  initial={tile === null ? {} : { opacity: 0, y: 10 }}
                  whileInView={tile === null ? {} : { opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                  className={`aspect-square rounded-lg sm:rounded-xl flex items-center justify-center text-base sm:text-xl font-bold shadow-sm ${
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

            <div className="px-1 sm:px-2">
              <div className="w-full h-12 sm:h-14 rounded-xl sm:rounded-2xl bg-neutral-900/50 border border-white/5 flex items-center justify-center text-[10px] sm:text-sm font-bold uppercase tracking-[0.2em] text-neutral-400">
                Restart
              </div>
            </div>
          </motion.div>

          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-32 h-32 sm:w-40 sm:h-40 bg-primary/20 blur-[60px] sm:blur-[80px] rounded-full -z-10" />
          <div className="absolute -bottom-6 -left-6 sm:-bottom-10 sm:-left-10 w-32 h-32 sm:w-40 sm:h-40 bg-secondary/20 blur-[60px] sm:blur-[80px] rounded-full -z-10" />
        </div>

        <div className="lg:col-span-12 mt-6 lg:hidden">
          <PlayNowButton />
        </div>
      </div>
    </Section>
  );
};
