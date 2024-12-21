'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Settings() {
  const router = useRouter();

  useEffect(() => {
    const isAuthorized = localStorage.getItem('isAuthorized');
    if (isAuthorized !== 'true') {
      router.push('/admin'); // Redirect to the login page if not authorized
    }
  }, [router]);

  return (
    <div>
      <h1 className='text-color3'>{localStorage.getItem('isAuthorized')}</h1>
    </div>
  );
}