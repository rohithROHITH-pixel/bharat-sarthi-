import Image from 'next/image';
import { Button } from './ui/button';

export default function HeroSection() {
  return (
    <section id="home" className="relative h-[80vh] min-h-[500px] w-full flex items-center justify-center text-white">
      <Image
        src="https://picsum.photos/seed/astrology-hero/1800/1200"
        alt="Mystical background"
        fill
        className="object-cover"
        priority
        data-ai-hint="mystical astrology"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 text-center space-y-6 px-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-bold uppercase tracking-widest text-shadow-lg">
          SARATHI
        </h1>
        <p className="text-2xl md:text-3xl font-light tracking-wide">
          Astrology Services
        </p>
        <p className="max-w-2xl mx-auto text-lg text-gray-200">
          Unlock your potential and navigate life's challenges with the wisdom of the stars.
        </p>
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full">
          Book an Appointment
        </Button>
      </div>
    </section>
  );
}
