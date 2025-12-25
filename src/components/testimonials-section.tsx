'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Mumbai, India',
    quote: "The horoscope reading was incredibly accurate and insightful. It gave me the confidence to make a major career change, and I couldn't be happier!",
    image: 'https://picsum.photos/seed/woman1/100/100',
    imageHint: 'indian woman'
  },
  {
    id: 2,
    name: 'Raj Patel',
    location: 'London, UK',
    quote: "Sarathi's Vastu consultation transformed my home. The energy feels so much more positive, and my family has seen a noticeable improvement in well-being.",
    image: 'https://picsum.photos/seed/man1/100/100',
    imageHint: 'indian man'
  },
  {
    id: 3,
    name: 'Anjali Desai',
    location: 'New York, USA',
    quote: "I was skeptical about palmistry, but the reading was so detailed and relevant to my life. It provided much-needed clarity during a difficult time.",
    image: 'https://picsum.photos/seed/woman2/100/100',
    imageHint: 'woman face'
  },
   {
    id: 4,
    name: 'Amit Singh',
    location: 'Toronto, Canada',
    quote: 'The numerology report was fascinating. It explained so much about my personality and life events. Highly recommended for anyone seeking self-discovery.',
    image: 'https://picsum.photos/seed/man2/100/100',
    imageHint: 'man face'
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary text-center mb-12">What Our Clients Say</h2>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2">
                <div className="p-4">
                  <Card className="h-full">
                    <CardContent className="flex flex-col items-center text-center p-8 space-y-4">
                      <Image
                        src={testimonial.image}
                        alt={`Photo of ${testimonial.name}`}
                        width={80}
                        height={80}
                        className="rounded-full"
                        data-ai-hint={testimonial.imageHint}
                      />
                      <p className="text-lg italic text-foreground/80 flex-grow">&ldquo;{testimonial.quote}&rdquo;</p>
                      <div className="font-bold text-lg text-primary">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
