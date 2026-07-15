import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomePage from "@/routes/index";
import AboutPage from "@/routes/about";
import ContactPage from "@/routes/contact";
import PrivacyPage from "@/routes/privacy";
import TermsPage from "@/routes/terms";

type Page = "home" | "about" | "contact" | "privacy" | "terms";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      <main id="main-content" className="flex-1 pt-20" tabIndex={-1}>
        {currentPage === "home" && <HomePage onNavigate={handleNavigate} />}
        {currentPage === "about" && <AboutPage onNavigate={handleNavigate} />}
        {currentPage === "contact" && <ContactPage onNavigate={handleNavigate} />}
        {currentPage === "privacy" && <PrivacyPage onNavigate={handleNavigate} />}
        {currentPage === "terms" && <TermsPage onNavigate={handleNavigate} />}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
