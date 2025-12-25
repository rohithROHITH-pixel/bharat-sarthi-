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
          ಸಾರಥಿ
        </h1>
        <p className="text-2xl md:text-3xl font-light tracking-wide">
          ಜ್ಯೋತಿಷ್ಯ ಸೇವೆಗಳು
        </p>
        <p className="max-w-2xl mx-auto text-lg text-gray-200">
          ನಕ್ಷತ್ರಗಳ ಜ್ಞಾನದಿಂದ ನಿಮ್ಮ ಸಾಮರ್ಥ್ಯವನ್ನು ಅನ್ಲಾಕ್ ಮಾಡಿ ಮತ್ತು ಜೀವನದ ಸವಾಲುಗಳನ್ನು ನ್ಯಾವಿಗೇಟ್ ಮಾಡಿ.
        </p>
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full">
          ಅಪಾಯಿಂಟ್ಮೆಂಟ್ ಕಾಯ್ದಿರಿಸಿ
        </Button>
      </div>
    </section>
  );
}
