import { GraduationCap, Mail, MapPin, Phone } from "lucide-react";
import type { Page } from "@/types/nav";

export default function Footer({ onNavigate }: { onNavigate: (page: Page) => void }) {
  return (
    <footer className="relative mt-24 border-t border-border bg-gradient-soft" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <button
              onClick={() => onNavigate("home")}
              aria-label="Edvanz home"
              className="flex items-center gap-2"
            >
              <div
                className="h-9 w-9 rounded-xl bg-gradient-brand flex items-center justify-center"
                aria-hidden="true"
              >
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gradient">Edvanz</span>
            </button>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              A modern learning management platform where anyone can learn, teach and grow across
              every educational field — from web development to AI.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h4 className="font-semibold mb-3 text-sm">Explore</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button
                  onClick={() => onNavigate("home")}
                  className="hover:text-primary focus-visible:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("about")}
                  className="hover:text-primary focus-visible:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("contact")}
                  className="hover:text-primary focus-visible:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                >
                  Contact
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("privacy")}
                  className="hover:text-primary focus-visible:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("terms")}
                  className="hover:text-primary focus-visible:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                >
                  Terms & Conditions
                </button>
              </li>
            </ul>
          </nav>

          <address className="not-italic">
            <h4 className="font-semibold mb-3 text-sm">Reach Us</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
                <a
                  href="mailto:edvanz.com"
                  className="hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                >
                  www.edvanz.co
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                <a
                  href="tel:+91 9515726447"
                  className="hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                >
                  +91 9999999999
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
                <span>Global</span>
              </li>
            </ul>
          </address>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Edvanz LMS. All rights reserved.</p>
          <p>Built for the future of learning.</p>
        </div>
      </div>
    </footer>
  );
}
