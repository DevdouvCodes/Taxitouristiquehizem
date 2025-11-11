import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const testimonials = [
  {
    name: 'Marie Laurent',
    location: 'Paris, France',
    rating: 5,
    text: {
      fr: 'Service exceptionnel ! Notre chauffeur était ponctuel, professionnel et très sympathique. La Toyota SR5 est incroyablement confortable. Je recommande vivement Taxi Hizem pour découvrir la Tunisie.',
      en: 'Exceptional service! Our driver was punctual, professional and very friendly. The Toyota SR5 is incredibly comfortable. I highly recommend Taxi Hizem to discover Tunisia.',
      ar: 'خدمة استثنائية! كان سائقنا دقيقًا ومحترفًا وودودًا للغاية. تويوتا SR5 مريحة بشكل لا يصدق. أوصي بشدة بـ Taxi Hizem لاكتشاف تونس.',
    },
  },
  {
    name: 'Ahmed Ben Salem',
    location: 'Dubai, UAE',
    rating: 5,
    text: {
      fr: 'Parfait du début à la fin. Transfert aéroport impeccable et excursions personnalisées fantastiques. Le chauffeur connaît tous les bons endroits !',
      en: 'Perfect from start to finish. Impeccable airport transfer and fantastic personalized excursions. The driver knows all the best spots!',
      ar: 'مثالي من البداية إلى النهاية. نقل مطار لا تشوبه شائبة ورحلات مخصصة رائعة. السائق يعرف جميع الأماكن الجيدة!',
    },
  },
  {
    name: 'Sophie Anderson',
    location: 'London, UK',
    rating: 5,
    text: {
      fr: "Une expérience inoubliable ! Nous avons visité Sidi Bou Saïd, Carthage et le Sahara. Le service était luxueux et abordable. C'est la meilleure façon de voyager en Tunisie.",
      en: 'An unforgettable experience! We visited Sidi Bou Said, Carthage and the Sahara. The service was luxurious and affordable. This is the best way to travel in Tunisia.',
      ar: 'تجربة لا تُنسى! زرنا سيدي بو سعيد وقرطاج والصحراء. كانت الخدمة فاخرة وبأسعار معقولة. هذه أفضل طريقة للسفر في تونس.',
    },
  },
];

export const Testimonials = () => {
  const { t, language } = useLanguage();

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('testimonials.title')}</h2>
          <p className="text-xl text-muted-foreground">{t('testimonials.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="card-hover bg-card border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">{testimonial.text[language]}</p>
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
