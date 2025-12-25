'use client';

import { useAuth } from '@/context/auth-context';
import LoginForm from '@/components/admin/login-form';
import AdminDashboard from '@/components/admin/admin-dashboard';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent } from '@/components/ui/card';

export default function AdminPage() {
  const { user, loading, isAdmin } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user && !isAdmin) {
      router.push('/');
    }
  }, [user, loading, isAdmin, router]);

  if (loading) {
    return (
        <div className="flex justify-center items-center h-full">
            <Card className="w-full max-w-md">
                <CardContent className="p-8">
                    <Skeleton className="h-8 w-1/2 mb-6" />
                    <Skeleton className="h-10 w-full mb-4" />
                    <Skeleton className="h-10 w-full mb-6" />
                    <Skeleton className="h-10 w-full" />
                </CardContent>
            </Card>
        </div>
    );
  }

  if (!user) {
    return <LoginForm />;
  }

  if (isAdmin) {
    return <AdminDashboard />;
  }
  
  return (
     <div className="flex justify-center items-center h-full">
         <p className="text-muted-foreground">Access denied. Redirecting...</p>
     </div>
  );
}
