import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "fr" | "en" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  fr: {
    // Navigation
    "nav.services": "Services",
    "nav.vehicle": "Notre Voiture",
    "nav.destinations": "Destinations",
    "nav.testimonials": "Avis",
    "nav.contact": "Contact",

    // Hero
    "hero.title": "Découvrez Toute la Tunisie avec Confort et Élégance",
    "hero.subtitle":
      "Transferts Aéroport – Hôtels – Excursions – Circuits Privés",
    "hero.cta": "Réserver sur WhatsApp",

    // Services
    "services.title": "Nos Services",
    "services.subtitle":
      "Excellence et confort pour tous vos déplacements en Tunisie",
    "services.airport": "Transferts Aéroport",
    "services.airport.desc":
      "Service ponctuel depuis/vers tous les aéroports tunisiens",
    "services.hotel": "Navettes Hôtels",
    "services.hotel.desc": "Transferts confortables vers votre hébergement",
    "services.tours": "Excursions Touristiques",
    "services.tours.desc": "Découvrez les trésors cachés de la Tunisie",
    "services.custom": "Circuits Sur Mesure",
    "services.custom.desc": "Itinéraires personnalisés selon vos envies",
    "services.driver": "Chauffeur Privé",
    "services.driver.desc": "À votre disposition pour la durée de votre choix",

    // Vehicle
    "vehicle.title": "Notre Voiture – Toyota SR5 2024",
    "vehicle.subtitle": "Voyagez dans le luxe et le confort absolu",
    "vehicle.passengers": "6 Passagers",
    "vehicle.ac": "Climatisation",
    "vehicle.leather": "Sièges en Cuir",
    "vehicle.wifi": "Wi-Fi à Bord",
    "vehicle.luggage": "Grand Coffre",
    "vehicle.modern": "Toyota Modèle 2024",

    // Video
    "video.title": "Découvrez Nos Services en Vidéo",
    "video.subtitle": "Une expérience unique de voyage à travers la Tunisie",
    "video.description":
      "Regardez comment nous rendons votre voyage inoubliable avec notre service premium de taxi touristique.",

    // Destinations
    "destinations.title": "Découvrez la Tunisie",
    "destinations.subtitle":
      "De la Méditerranée au Sahara, explorez toutes les merveilles",

    // Testimonials
    "testimonials.title": "Avis Clients",
    "testimonials.subtitle": "Ce que nos clients disent de nous",

    // Booking
    "booking.title": "Réservation",
    "booking.subtitle": "Disponible 24h/24 – 7j/7",
    "booking.name": "Votre Nom",
    "booking.phone": "Téléphone",
    "booking.message": "Votre Message",
    "booking.submit": "Envoyer",
    "booking.whatsapp": "Ou réservez directement sur WhatsApp",

    // Footer
    "footer.tagline": "Votre voyage commence ici",
    "footer.about": "À Propos",
    "footer.contact": "Contact",
  },
  en: {
    // Navigation
    "nav.services": "Services",
    "nav.vehicle": "Our Vehicle",
    "nav.destinations": "Destinations",
    "nav.testimonials": "Reviews",
    "nav.contact": "Contact",

    // Hero
    "hero.title": "Discover All of Tunisia with Comfort and Elegance",
    "hero.subtitle": "Airport Transfers – Hotels – Excursions – Private Tours",
    "hero.cta": "Book on WhatsApp",

    // Services
    "services.title": "Our Services",
    "services.subtitle":
      "Excellence and comfort for all your travels in Tunisia",
    "services.airport": "Airport Transfer",
    "services.airport.desc": "Punctual service to/from all Tunisian airports",
    "services.hotel": "Hotel Shuttles",
    "services.hotel.desc": "Comfortable transfers to your accommodation",
    "services.tours": "Tours & Excursions",
    "services.tours.desc": "Discover the hidden treasures of Tunisia",
    "services.custom": "Custom Circuits",
    "services.custom.desc": "Personalized itineraries according to your wishes",
    "services.driver": "Private Driver",
    "services.driver.desc": "At your disposal for your chosen duration",

    // Vehicle
    "vehicle.title": "Our Vehicle – Toyota SR5 2024",
    "vehicle.subtitle": "Travel in absolute luxury and comfort",
    "vehicle.passengers": "6 Passengers",
    "vehicle.ac": "Air Conditioning",
    "vehicle.leather": "Leather Seats",
    "vehicle.wifi": "Wi-Fi Onboard",
    "vehicle.luggage": "Large Trunk",
    "vehicle.modern": "2024 Model",

    // Video
    "video.title": "Discover Our Services on Video",
    "video.subtitle": "A unique travel experience through Tunisia",
    "video.description":
      "Watch how we make your journey unforgettable with our premium tourist taxi service.",

    // Destinations
    "destinations.title": "Discover Tunisia",
    "destinations.subtitle":
      "From the Mediterranean to the Sahara, explore all wonders",

    // Testimonials
    "testimonials.title": "Client Reviews",
    "testimonials.subtitle": "What our clients say about us",

    // Booking
    "booking.title": "Booking",
    "booking.subtitle": "Available 24/7",
    "booking.name": "Your Name",
    "booking.phone": "Phone",
    "booking.message": "Your Message",
    "booking.submit": "Send",
    "booking.whatsapp": "Or book directly on WhatsApp",

    // Footer
    "footer.tagline": "Your journey starts here",
    "footer.about": "About",
    "footer.contact": "Contact",
  },
  ar: {
    // Navigation
    "nav.services": "الخدمات",
    "nav.vehicle": "سيارتنا",
    "nav.destinations": "الوجهات",
    "nav.testimonials": "الآراء",
    "nav.contact": "اتصل بنا",

    // Hero
    "hero.title": "اكتشف تونس بأكملها براحة وأناقة",
    "hero.subtitle": "نقل المطار – الفنادق – الرحلات – الجولات الخاصة",
    "hero.cta": "احجز عبر واتساب",

    // Services
    "services.title": "خدماتنا",
    "services.subtitle": "التميز والراحة لجميع تنقلاتك في تونس",
    "services.airport": "نقل المطار",
    "services.airport.desc": "خدمة دقيقة من/إلى جميع المطارات التونسية",
    "services.hotel": "نقل الفنادق",
    "services.hotel.desc": "نقل مريح إلى مكان إقامتك",
    "services.tours": "الرحلات السياحية",
    "services.tours.desc": "اكتشف كنوز تونس الخفية",
    "services.custom": "جولات مخصصة",
    "services.custom.desc": "برامج مخصصة حسب رغباتك",
    "services.driver": "سائق خاص",
    "services.driver.desc": "تحت تصرفكم للمدة التي تختارونها",

    // Vehicle
    "vehicle.title": "سيارتنا – تويوتا SR5 2024",
    "vehicle.subtitle": "سافر في رفاهية وراحة مطلقة",
    "vehicle.passengers": "5 ركاب",
    "vehicle.ac": "تكييف هواء",
    "vehicle.leather": "مقاعد جلدية",
    "vehicle.wifi": "واي فاي",
    "vehicle.luggage": "صندوق كبير",
    "vehicle.modern": "موديل 2024",

    // Video
    "video.title": "اكتشف خدماتنا بالفيديو",
    "video.subtitle": "تجربة سفر فريدة عبر تونس",
    "video.description":
      "شاهد كيف نجعل رحلتك لا تُنسى مع خدمة سيارات الأجرة السياحية المميزة لدينا.",

    // Destinations
    "destinations.title": "اكتشف تونس",
    "destinations.subtitle": "من المتوسط إلى الصحراء، استكشف كل العجائب",

    // Testimonials
    "testimonials.title": "آراء العملاء",
    "testimonials.subtitle": "ماذا يقول عملاؤنا عنا",

    // Booking
    "booking.title": "الحجز",
    "booking.subtitle": "متاح 24/7",
    "booking.name": "اسمك",
    "booking.phone": "الهاتف",
    "booking.message": "رسالتك",
    "booking.submit": "إرسال",
    "booking.whatsapp": "أو احجز مباشرة عبر واتساب",

    // Footer
    "footer.tagline": "رحلتك تبدأ هنا",
    "footer.about": "من نحن",
    "footer.contact": "اتصل بنا",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("fr");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div
        dir={language === "ar" ? "rtl" : "ltr"}
        className={language === "ar" ? "font-arabic" : ""}
      >
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
