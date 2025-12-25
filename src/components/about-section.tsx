import Image from 'next/image';
import { Button } from './ui/button';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary">ಸಾರಥಿ ಬಗ್ಗೆ</h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              ಭಾರತ ಸಾರಥಿ ಜ್ಯೋತಿಷ್ಯದ ಪ್ರಾಚೀನ ವಿಜ್ಞಾನದ ಮೂಲಕ ಜೀವನದ ಪಯಣದಲ್ಲಿ ಮಾರ್ಗದರ್ಶನ ನೀಡುತ್ತದೆ. ವರ್ಷಗಳ ಸಮರ್ಪಿತ ಅಭ್ಯಾಸ ಮತ್ತು ಆಳವಾದ ಜ್ಞಾನದೊಂದಿಗೆ, ನಾವು ವೈಯಕ್ತಿಕಗೊಳಿಸಿದ ಜಾತಕ ಓದುವಿಕೆ, ಸಂಖ್ಯಾಶಾಸ್ತ್ರದ ಒಳನೋಟಗಳು, ವಾಸ್ತು ಸಮಾಲೋಚನೆಗಳು ಮತ್ತು ಹಸ್ತಸಾಮುದ್ರಿಕ ವಿಶ್ಲೇಷಣೆಯನ್ನು ಒದಗಿಸುತ್ತೇವೆ.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              ನಮ್ಮ ಧ್ಯೇಯವೆಂದರೆ, ನೀವು ತಿಳುವಳಿಕೆಯುಳ್ಳ ನಿರ್ಧಾರಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳಲು, ಅಡೆತಡೆಗಳನ್ನು ನಿವಾರಿಸಲು ಮತ್ತು ನಿಮ್ಮ ನಿಜವಾದ ಸಾಮರ್ಥ್ಯವನ್ನು ಸಾಧಿಸಲು ಬೇಕಾದ ಸ್ಪಷ್ಟತೆ ಮತ್ತು ದೂರದೃಷ್ಟಿಯನ್ನು ನಿಮಗೆ ನೀಡುವುದಾಗಿದೆ. ಬ್ರಹ್ಮಾಂಡವು ನಮ್ಮ ಜೀವನಕ್ಕೆ ಕನ್ನಡಿಯನ್ನು ಹಿಡಿದಿದೆ ಎಂದು ನಾವು ನಂಬುತ್ತೇವೆ ಮತ್ತು ಅದರ ಭಾಷೆಯನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವ ಮೂಲಕ, ನಾವು ಸಮೃದ್ಧಿ ಮತ್ತು ಶಾಂತಿಯ ಭವಿಷ್ಯವನ್ನು ಅನ್ಲಾಕ್ ಮಾಡಬಹುದು.
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
