'use client';

import { useAuth } from '@/context/auth-context';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { FormEvent, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import NewsList from '@/components/news-list';
import { PlusCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Label } from '@/components/ui/label';

export default function AdminPage() {
  const { user, loading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const auth = getAuth();
  const { toast } = useToast();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast({ title: 'Login Successful', description: 'Welcome back!' });
    } catch (err: any) {
      setError('Invalid email or password. Please try again.');
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    toast({ title: 'Logged Out', description: 'You have been successfully logged out.' });
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 flex justify-center items-center min-h-[calc(100vh-20rem)]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading Admin Panel...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-8 flex justify-center items-center min-h-[calc(100vh-20rem)]">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Admin Login</CardTitle>
            <CardDescription>Enter your credentials to access the admin panel.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {error && <p className="text-sm font-medium text-destructive">{error}</p>}
              <Button type="submit" className="w-full">Login</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div className='text-center sm:text-left'>
          <h1 className="text-3xl font-bold">Admin Panel</h1>
          <p className="text-muted-foreground">Welcome back, {user.email}.</p>
        </div>
        <Button onClick={handleLogout} className="w-full sm:w-auto">Logout</Button>
      </div>
      <div className='space-y-8'>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h2 className="text-2xl font-bold text-center sm:text-left w-full sm:w-auto">Manage News</h2>
            <Button className="w-full sm:w-auto">
                <PlusCircle className="mr-2 h-4 w-4" /> Add News
            </Button>
        </div>
        <NewsList isAdmin={true} newsItems={newsItems} />
      </div>
    </div>
  );
}
