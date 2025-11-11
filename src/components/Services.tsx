import { Plane, Hotel, MapPin, Route, UserCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const services = [
  { icon: Plane, key: 'airport' },
  { icon: Hotel, key: 'hotel' },
  { icon: MapPin, key: 'tours' },
  { icon: Route, key: 'custom' },
  { icon: UserCheck, key: 'driver' },
];

export const Services = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('services.title')}</h2>
          <p className="text-xl text-muted-foreground">{t('services.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ icon: Icon, key }, index) => (
            <Card
              key={key}
              className="card-hover border-border bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-6">
                  <Icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{t(`services.${key}`)}</h3>
                <p className="text-muted-foreground">{t(`services.${key}.desc`)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
