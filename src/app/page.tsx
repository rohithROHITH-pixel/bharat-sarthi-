'use client';

import { useState } from 'react';
import HeroSection from '@/components/hero-section';
import NewsList from '@/components/news-list';
import AboutSection from '@/components/about-section';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="space-y-8">
      <HeroSection />
      <div className="container mx-auto px-4">
        {activeSection === 'home' && <NewsList />}
        {activeSection === 'about' && <AboutSection />}
        {activeSection === 'health' && <NewsList category="ಆರೋಗ್ಯ" />}
        {activeSection === 'sports' && <NewsList category="ಕ್ರೀಡೆ" />}
        {activeSection === 'crime' && <NewsList category="ಕ್ರೈಂ ಸುದ್ದಿ" />}
        {activeSection === 'politics' && <NewsList category="ರಾಜಕೀಯ" />}
        {activeSection === 'state' && <NewsList category="ರಾಜ್ಯ ಸುದ್ದಿ" />}
        {activeSection === 'tech' && <NewsList category="ತಂತ್ರಜ್ಞಾನ" />}
        {activeSection === 'business' && <NewsList category="ವ್ಯಾಪಾರ" />}
        {activeSection === 'entertainment' && <NewsList category="ಮನರಂಜನೆ" />}
        
        {/* Pass setActiveSection to a component that needs to change it, like the Header */}
        {/* For now, we assume the Header is already set up to do this. */}
      </div>
    </div>
  );
}
