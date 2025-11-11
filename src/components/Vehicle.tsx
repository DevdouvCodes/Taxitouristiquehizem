import { Users, Wind, Armchair, Wifi, Luggage, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import toyotaImage from "@/assets/toyota-sr5.jpeg";
import toyotaInterior from "@/assets/toyota-interior.jpg";
import toyotaBeach from "@/assets/toyota-beach.jpeg";
import toyotaTrunk from "@/assets/toyota-trunk.jpeg";
import toyotaMonument from "@/assets/toyota-monument.jpg";
import ribat from "@/assets/ribat_monastir.jpg";

const features = [
  { icon: Users, key: "passengers" },
  { icon: Wind, key: "ac" },
  { icon: Armchair, key: "leather" },
  { icon: Wifi, key: "wifi" },
  { icon: Luggage, key: "luggage" },
  { icon: Star, key: "modern" },
];

const vehicleImages = [
  { src: toyotaImage, alt: "Toyota SR5 2024" },
  { src: toyotaBeach, alt: "Toyota SR5 2024 - Vue plage" },
  { src: toyotaInterior, alt: "Toyota SR5 2024 - Intérieur" },
  { src: toyotaTrunk, alt: "Toyota SR5 2024 - Coffre" },
  { src: toyotaMonument, alt: "Toyota SR5 2025 - Monuments" },
  { src: ribat, alt: "Ribat de Monastir" },
];

export const Vehicle = () => {
  const { t } = useLanguage();

  return (
    <section id="vehicle" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("vehicle.title")}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t("vehicle.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Vehicle Image Carousel */}
          <div className="relative">
            <Carousel className="w-full">
              <CarouselContent>
                {vehicleImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>

          {/* Features */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map(({ icon: Icon, key }, index) => (
              <Card
                key={key}
                className="card-hover bg-card border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="font-semibold text-lg">
                    {t(`vehicle.${key}`)}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
