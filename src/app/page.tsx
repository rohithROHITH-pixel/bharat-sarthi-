'use client';

import HeroSection from '@/components/hero-section';
import NewsList from '@/components/news-list';
import { newsItems } from '@/lib/news-data';

export default function Home() {
  const featuredNews = newsItems[0];
  const otherNews = newsItems.slice(1);

  return (
    <div className="space-y-8 pb-8">
      <HeroSection article={featuredNews} />
      <div className="container mx-auto px-4">
        <NewsList newsItems={otherNews} />
      </div>
    </div>
  );
}
