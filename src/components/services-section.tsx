import { Card, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Star, CircleDollarSign, Home, Hand } from 'lucide-react';

const services = [
  {
    icon: <Star className="w-12 h-12 text-primary" />,
    title: 'Horoscope Reading',
    description: 'In-depth analysis of your birth chart to reveal your destiny, strengths, and challenges.',
  },
  {
    icon: <CircleDollarSign className="w-12 h-12 text-primary" />,
    title: 'Numerology',
    description: 'Discover the hidden meaning of numbers in your life and how they influence your path.',
  },
  {
    icon: <Home className="w-12 h-12 text-primary" />,
    title: 'Vastu',
    description: 'Harmonize your living and work spaces to attract positivity, prosperity, and health.',
  },
  {
    icon: <Hand className="w-12 h-12 text-primary" />,
    title: 'Palmistry',
    description: 'Uncover the secrets of your future and personality hidden in the lines of your hands.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-4">Our Services</h2>
        <p className="text-lg text-foreground/80 max-w-3xl mx-auto mb-12">
          We offer a range of astrological services to provide clarity and guidance on your life's journey.
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
