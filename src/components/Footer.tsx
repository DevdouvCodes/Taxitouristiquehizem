import { useLanguage } from "@/contexts/LanguageContext";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-serif font-bold mb-4 bg-gradient-to-r from-secondary via-accent to-turquoise bg-clip-text text-transparent">
              Taxi Hizem
            </h3>
            <p className="text-white/80 mb-4">{t("footer.tagline")}</p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">{t("nav.services")}</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("services")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-primary transition-colors"
                >
                  {t("nav.services")}
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("vehicle")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-primary transition-colors"
                >
                  {t("nav.vehicle")}
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("destinations")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-primary transition-colors"
                >
                  {t("nav.destinations")}
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("testimonials")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-primary transition-colors"
                >
                  {t("nav.testimonials")}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-4">{t("footer.contact")}</h4>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a
                  href="tel:+21620452570"
                  className="hover:text-primary transition-colors"
                >
                  +216 20 452 570
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a
                  href="mailto:fethihizem@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  fethihizem@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Taxi Hizem. Tous droits réservés.
            / All rights reserved. / جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};
