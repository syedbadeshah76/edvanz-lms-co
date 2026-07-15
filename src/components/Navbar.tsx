import { useEffect, useState } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Page } from "@/types/nav";
import logo from "../assets/logo1.png";
const links = [
  { to: "home", label: "Home" },
  { to: "about", label: "About" },
  { to: "contact", label: "Contact" },
] as const;

export default function Navbar({
  currentPage,
  onNavigate,
}: {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [currentPage]);

  return (
    <header
      role="banner"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || open ? "py-2" : "py-3 sm:py-4"
      }`}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:rounded-sm focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to main content
      </a>
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <nav
          aria-label="Primary"
          className={`flex items-center justify-between rounded-2xl px-3 sm:px-6 py-2.5 sm:py-3 transition-all duration-300 ${
            scrolled || open}`}
        >
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("home");
            }}
            aria-label="Edvanz — Go to home page"
            aria-current={currentPage === "home" ? "page" : undefined}
            className="flex items-center rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <img src={logo} alt="Edvanz logo" className="h-10 w-auto" />
          </a>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => {
              const active = currentPage === l.to;
              return (
                <button
                  key={l.to}
                  onClick={() => onNavigate(l.to as Page)}
                  aria-current={active ? "page" : undefined}
                  className={`relative px-4 py-2 text-sm font-medium rounded-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                    active ? "text-primary" : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {l.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-sm bg-gradient-soft"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            })}
            <button
              onClick={() => onNavigate("contact")}
              className="ml-3 inline-flex items-center rounded-sm bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white btn-glow transition-transform hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30"
            >
              Get in Touch
            </button>
          </div>

          <button
            className="md:hidden p-2 rounded-sm text-foreground hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((s) => !s)}
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="md:hidden mt-2 rounded-2xl p-3 flex flex-col gap-1 bg-white/95 backdrop-blur-md border border-border shadow-lg"
            >
              {links.map((l) => (
                <button
                  key={l.to}
                  onClick={() => onNavigate(l.to as Page)}
                  aria-current={currentPage === l.to ? "page" : undefined}
                  className={`text-left px-4 py-3 rounded-sm text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                    currentPage === l.to
                      ? "bg-gradient-soft text-primary"
                      : "text-foreground/80 hover:bg-secondary"
                  }`}
                >
                  {l.label}
                </button>
              ))}
              <button
                onClick={() => onNavigate("contact")}
                className="mt-2 text-center rounded-sm bg-gradient-brand px-5 py-3 text-sm font-semibold text-white"
              >
                Get in Touch
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
