import Image from 'next/image';
import { Button } from './ui/button';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary">About SARATHI</h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Bharatha Sarathi offers a guiding light in the journey of life through the ancient science of astrology. With years of dedicated practice and profound knowledge, we provide personalized horoscope readings, numerology insights, Vastu consultations, and palmistry analysis.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Our mission is to empower you with the clarity and foresight needed to make informed decisions, overcome obstacles, and achieve your true potential. We believe that the cosmos holds a mirror to our lives, and by understanding its language, we can unlock a future of prosperity and peace.
            </p>
            <Button size="lg">Learn More</Button>
          </div>
          <div className="relative h-80 md:h-96 w-full rounded-lg overflow-hidden shadow-2xl">
             <Image
                src="https://picsum.photos/seed/astrology-about/600/800"
                alt="Portrait of an astrologer"
                fill
                className="object-cover"
                data-ai-hint="astrologer portrait"
              />
          </div>
        </div>
      </div>
    </section>
  );
}
