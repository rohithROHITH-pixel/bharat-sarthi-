'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  }, [router]);
  
  return (
     <div className="flex justify-center items-center h-screen">
         <p className="text-muted-foreground">Redirecting...</p>
     </div>
  );
}
