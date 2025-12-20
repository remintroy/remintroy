import { cn } from "@/lib/utils";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialTheme = root.classList.contains("dark") ? "dark" : "light";
    setTheme(initialTheme);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    const root = window.document.documentElement;
    if (newTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  };

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Fun", href: "#fun" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-[60] transition-all duration-300 border-b border-transparent",
          isScrolled || isMobileMenuOpen
            ? "bg-background/80 backdrop-blur-md border-border py-4"
            : "bg-transparent py-6"
        )}
      >
        <div className="container px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tighter">
              REMIN T ROY
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest text-[10px]"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full h-9 w-9"
            >
              {theme === "light" ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </Button>
            <Button
              variant="outline"
              className="hidden md:inline-flex h-9"
              onClick={() =>
                window.open("https://github.com/remintroy", "_blank")
              }
            >
              GitHub
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden h-9 w-9"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-background md:hidden pt-24 px-6 flex flex-col gap-8"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl font-black tracking-tighter uppercase leading-none"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="mt-auto pb-12 space-y-6">
              <div className="h-[1px] w-full bg-border" />
              <Button
                variant="outline"
                className="w-full h-14 text-lg rounded-2xl"
                onClick={() => {
                  window.open("https://github.com/remintroy", "_blank");
                  setIsMobileMenuOpen(false);
                }}
              >
                GitHub Profile
              </Button>
              <div className="flex justify-center gap-8">
                {/* Social links placeholder if needed */}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
