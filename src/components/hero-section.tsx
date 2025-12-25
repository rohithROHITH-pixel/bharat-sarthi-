import { Button } from './ui/button';

export default function HeroSection() {
  return (
    <section id="home" className="relative bg-secondary py-12 md:py-20 text-center">
      <div className="relative z-10 text-center space-y-6 px-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-bold uppercase tracking-widest text-primary text-shadow-lg">
          ಭಾರತ ಸಾರಥಿ
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-foreground/80">
          ನಿಮ್ಮ ದೈನಂದಿನ ಸುದ್ದಿಗಳು, ಸ್ವಚ್ಛ ಮತ್ತು ವೇಗವಾಗಿ.
        </p>
      </div>
    </section>
  );
}
