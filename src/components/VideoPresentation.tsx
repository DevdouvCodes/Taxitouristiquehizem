import { useLanguage } from '@/contexts/LanguageContext';
import { Play } from 'lucide-react';

export const VideoPresentation = () => {
  const { t } = useLanguage();

  return (
    <section id="video" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('video.title')}</h2>
          <p className="text-xl text-muted-foreground">{t('video.subtitle')}</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-card">
            {/* Video Embed - Replace with your YouTube/Vimeo video ID */}
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Taxi Hizem - Découvrez nos services"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            
            {/* Decorative overlay for loading state */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 pointer-events-none opacity-0 transition-opacity" />
          </div>

          {/* Video Description */}
          <div className="mt-8 text-center">
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t('video.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
