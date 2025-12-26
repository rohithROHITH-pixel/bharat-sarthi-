import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary">About Bharatha Sarathi</h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Bharatha Sarathi is your trusted source for fast, reliable, and unbiased news. In an age of information overload, we are committed to delivering stories that matter, with the clarity and depth you deserve. Our mission is to keep you informed and engaged with the world around you.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Founded on the principles of journalistic integrity, our dedicated team of reporters and editors works around the clock to bring you the latest developments from Karnataka, India, and across the globe. From politics and business to culture and sports, we provide comprehensive coverage that is both timely and insightful. We believe in the power of information to foster understanding and drive progress.
            </p>
            <Button size="lg" asChild>
                <Link href="#contact">Contact Us</Link>
            </Button>
          </div>
          <div className="relative h-80 md:h-96 w-full rounded-lg overflow-hidden shadow-2xl">
             <Image
                src="https://picsum.photos/seed/news-room/800/600"
                alt="Modern news room"
                fill
                className="object-cover"
                data-ai-hint="newsroom journalist"
              />
          </div>
        </div>
      </div>
    </section>
  );
}
