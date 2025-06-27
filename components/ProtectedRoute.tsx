// app/components/ProtectedRoute.tsx
'use client';

import { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AppContext from '@/context/AppContext';


export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
 const { isLoggedIn } = useContext(AppContext)!
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/login');
    }
  }, [isLoggedIn, router]);

  // Optionally render nothing or a loading spinner
  if (!isLoggedIn) return null;

  return <>{children}</>;
}
