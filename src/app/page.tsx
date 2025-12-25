import NewsList from '@/components/news-list';

export default function Home() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold tracking-tight text-center md:text-left font-headline">Latest News</h1>
      <NewsList />
    </div>
  );
}
