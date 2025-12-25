'use client';

import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useAuth } from '@/context/auth-context';
import type { NewsArticle } from '@/types/news';
import NewsForm from './news-form';
import AdminNewsList from './admin-news-list';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { LogOut } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function AdminDashboard() {
  const { user } = useAuth();
  const { toast } = useToast();
  const [editingArticle, setEditingArticle] = useState<NewsArticle | null>(null);
  
  const handleLogout = async () => {
    try {
        await signOut(auth);
        toast({ title: "Logged out successfully."});
    } catch (error) {
        toast({ variant: 'destructive', title: "Logout failed", description: (error as Error).message });
    }
  };

  const handleEdit = (article: NewsArticle) => {
    setEditingArticle(article);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const handleFinishedEditing = () => {
    setEditingArticle(null);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
        <div>
            <h1 className="text-3xl font-bold font-headline">Admin Dashboard</h1>
            <p className="text-muted-foreground">Welcome, {user?.email}!</p>
        </div>
        <Button variant="outline" onClick={handleLogout}>
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>

      <Separator />

      <NewsForm 
        key={editingArticle?.id || 'new'}
        editingArticle={editingArticle} 
        onFinished={handleFinishedEditing}
      />
      
      <Separator />

      <AdminNewsList onEditArticle={handleEdit} />
    </div>
  );
}
