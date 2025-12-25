'use client';

import { useState } from 'react';
import HeroSection from '@/components/hero-section';
import NewsList from '@/components/news-list';
import AboutSection from '@/components/about-section';
import { newsItems } from '@/lib/news-data'; // Import news data

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  const featuredNews = newsItems[0];
  const otherNews = newsItems.slice(1);

  const getFilteredNews = (category: string) => {
    return newsItems.filter(item => item.category === category);
  }

  return (
    <div className="space-y-8">
      <HeroSection article={featuredNews} />
      <div className="container mx-auto px-4">
        {activeSection === 'home' && <NewsList newsItems={otherNews} />}
        {activeSection === 'about' && <AboutSection />}
        {activeSection === 'health' && <NewsList newsItems={getFilteredNews("ಆರೋಗ್ಯ")} />}
        {activeSection === 'sports' && <NewsList newsItems={getFilteredNews("ಕ್ರೀಡೆ")} />}
        {activeSection === 'crime' && <NewsList newsItems={getFilteredNews("ಕ್ರೈಂ ಸುದ್ದಿ")} />}
        {activeSection === 'politics' && <NewsList newsItems={getFilteredNews("ರಾಜಕೀಯ")} />}
        {activeSection === 'state' && <NewsList newsItems={getFilteredNews("ರಾಜ್ಯ ಸುದ್ದಿ")} />}
        {activeSection === 'tech' && <NewsList newsItems={getFilteredNews("ತಂತ್ರಜ್ಞಾನ")} />}
        {activeSection === 'business' && <NewsList newsItems={getFilteredNews("ವ್ಯಾಪಾರ")} />}
        {activeSection === 'entertainment' && <NewsList newsItems={getFilteredNews("ಮನರಂಜನೆ")} />}
      </div>
    </div>
  );
}
