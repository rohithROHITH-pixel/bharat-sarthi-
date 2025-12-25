import HeroSection from '@/components/hero-section';
import NewsList from '@/components/news-list';

export default function Home() {
  return (
    <div className="space-y-8">
      <HeroSection />
      <div className="container mx-auto px-4">
        <NewsList />
      </div>
    </div>
  );
}
