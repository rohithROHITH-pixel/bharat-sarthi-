import { Card, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Star, CircleDollarSign, Home, Hand } from 'lucide-react';

const services = [
  {
    icon: <Star className="w-12 h-12 text-primary" />,
    title: 'ಜಾತಕ ಓದುವಿಕೆ',
    description: 'ನಿಮ್ಮ ಹಣೆಬರಹ, ಸಾಮರ್ಥ್ಯಗಳು ಮತ್ತು ಸವಾಲುಗಳನ್ನು ಬಹಿರಂಗಪಡಿಸಲು ನಿಮ್ಮ ಜನ್ಮ ಕುಂಡಲಿಯ ಆಳವಾದ ವಿಶ್ಲೇಷಣೆ.',
  },
  {
    icon: <CircleDollarSign className="w-12 h-12 text-primary" />,
    title: 'ಸಂಖ್ಯಾಶಾಸ್ತ್ರ',
    description: 'ನಿಮ್ಮ ಜೀವನದಲ್ಲಿ ಸಂಖ್ಯೆಗಳ ಗುಪ್ತ ಅರ್ಥವನ್ನು ಮತ್ತು ಅವು ನಿಮ್ಮ ಹಾದಿಯ ಮೇಲೆ ಹೇಗೆ ಪ್ರಭಾವ ಬೀರುತ್ತವೆ ಎಂಬುದನ್ನು ಅನ್ವೇಷಿಸಿ.',
  },
  {
    icon: <Home className="w-12 h-12 text-primary" />,
    title: 'ವಾಸ್ತು',
    description: 'ಸಕಾರಾತ್ಮಕತೆ, ಸಮೃದ್ಧಿ ಮತ್ತು ಆರೋಗ್ಯವನ್ನು ಆಕರ್ಷಿಸಲು ನಿಮ್ಮ ವಾಸಿಸುವ ಮತ್ತು ಕೆಲಸ ಮಾಡುವ ಸ್ಥಳಗಳನ್ನು ಸಮನ್ವಯಗೊಳಿಸಿ.',
  },
  {
    icon: <Hand className="w-12 h-12 text-primary" />,
    title: 'ಹಸ್ತಸಾಮುದ್ರಿಕ ಶಾಸ್ತ್ರ',
    description: 'ನಿಮ್ಮ ಕೈಗಳ ರೇಖೆಗಳಲ್ಲಿ ಅಡಗಿರುವ ನಿಮ್ಮ ಭವಿಷ್ಯ ಮತ್ತು ವ್ಯಕ್ತಿತ್ವದ ರಹಸ್ಯಗಳನ್ನು ಬಹಿರಂಗಪಡಿಸಿ.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-4">ನಮ್ಮ ಸೇವೆಗಳು</h2>
        <p className="text-lg text-foreground/80 max-w-3xl mx-auto mb-12">
          ನಿಮ್ಮ ಜೀವನ ಪಯಣದಲ್ಲಿ ಸ್ಪಷ್ಟತೆ ಮತ್ತು ಮಾರ್ಗದರ್ಶನ ನೀಡಲು ನಾವು ಜ್ಯೋತಿಷ್ಯ ಸೇವೆಗಳ ಶ್ರೇಣಿಯನ್ನು ಒದಗಿಸುತ್ತೇವೆ.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center p-6 flex flex-col items-center justify-start space-y-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="bg-primary/10 p-4 rounded-full">
                {service.icon}
              </div>
              <CardHeader className="p-0">
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardDescription className="flex-grow">{service.description}</CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
