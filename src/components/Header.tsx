import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="text-2xl font-serif font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Taxi Touristique Hizem
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("services")}
            className="text-foreground hover:text-primary transition-colors"
          >
            {t("nav.services")}
          </button>
          <button
            onClick={() => scrollToSection("vehicle")}
            className="text-foreground hover:text-primary transition-colors"
          >
            {t("nav.vehicle")}
          </button>
          <button
            onClick={() => scrollToSection("destinations")}
            className="text-foreground hover:text-primary transition-colors"
          >
            {t("nav.destinations")}
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="text-foreground hover:text-primary transition-colors"
          >
            {t("nav.testimonials")}
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-foreground hover:text-primary transition-colors"
          >
            {t("nav.contact")}
          </button>
        </div>

        {/* Language Switcher & CTA */}
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <button
              onClick={() => setLanguage("fr")}
              className={`px-3 py-1 rounded-md text-sm transition-colors ${
                language === "fr"
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted"
              }`}
            >
              FR
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-1 rounded-md text-sm transition-colors ${
                language === "en"
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("ar")}
              className={`px-3 py-1 rounded-md text-sm transition-colors ${
                language === "ar"
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted"
              }`}
            >
              AR
            </button>
          </div>

          <Button
            onClick={() => window.open("https://wa.me/21620452570", "_blank")}
            className="hidden md:inline-flex bg-primary hover:bg-primary/90 btn-luxury"
          >
            {t("hero.cta")}
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("services")}
              className="text-left py-2 hover:text-primary transition-colors"
            >
              {t("nav.services")}
            </button>
            <button
              onClick={() => scrollToSection("vehicle")}
              className="text-left py-2 hover:text-primary transition-colors"
            >
              {t("nav.vehicle")}
            </button>
            <button
              onClick={() => scrollToSection("destinations")}
              className="text-left py-2 hover:text-primary transition-colors"
            >
              {t("nav.destinations")}
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-left py-2 hover:text-primary transition-colors"
            >
              {t("nav.testimonials")}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left py-2 hover:text-primary transition-colors"
            >
              {t("nav.contact")}
            </button>
            <Button
              onClick={() => window.open("https://wa.me/21620452570", "_blank")}
              className="w-full bg-primary hover:bg-primary/90"
            >
              {t("hero.cta")}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
