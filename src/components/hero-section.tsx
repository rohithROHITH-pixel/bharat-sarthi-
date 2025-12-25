import Image from 'next/image';
import Link from 'next/link';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { NewsArticle } from '@/lib/news-data';

type HeroProps = {
    article?: NewsArticle;
}

export default function HeroSection({ article }: HeroProps) {
  if (!article) {
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
  
  return (
    <section id="home" className="relative w-full min-h-[60vh] md:min-h-[70vh] flex items-center justify-center text-white">
      <div className="absolute inset-0">
        <Image 
          src={article.imageUrl}
          alt={article.title}
          fill
          className="object-cover"
          data-ai-hint={article.imageHint}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center md:text-left md:w-2/3 lg:w-1/2 pt-20">
        <div className="space-y-4">
            <Badge variant="default" className="text-sm">{article.category}</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold text-shadow-lg leading-tight">
                {article.title}
            </h1>
            <p className="text-base md:text-lg text-gray-200 hidden sm:line-clamp-3">
                {article.summary}
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
                <Button asChild size="lg">
                    <Link href="#">Read More</Link>
                </Button>
            </div>
        </div>
      </div>
    </section>
  );
}
