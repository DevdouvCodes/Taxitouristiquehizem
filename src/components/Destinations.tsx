import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin } from "lucide-react";

const destinations = [
  { name: "Tunis & Carthage", emoji: "🏛️" },
  { name: "Sidi Bou Saïd", emoji: "🩵" },
  { name: "Hammamet", emoji: "🏖️" },
  { name: "Sousse", emoji: "🌊" },
  { name: "Monastir", emoji: "🏛️✈️" },
  { name: "Kairouan", emoji: "🕌" },
  { name: "El Jem", emoji: "🏟️" },
  { name: "Djerba", emoji: "🏝️" },
  { name: "Tozeur", emoji: "🌴" },
  { name: "Sahara Desert", emoji: "🏜️" },
  { name: "Matmata", emoji: "⛰️" },
  { name: "Douz", emoji: "🐫" },
];

export const Destinations = () => {
  const { t } = useLanguage();

  return (
    <section id="destinations" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("destinations.title")}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t("destinations.subtitle")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {destinations.map((dest, index) => (
            <Card
              key={dest.name}
              className="card-hover bg-card border-border"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="text-5xl mb-4">{dest.emoji}</div>
                <div className="flex items-center justify-center gap-2 text-lg font-semibold">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span>{dest.name}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
