"use client";

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <>
      <p>hey</p>
      <button onClick={() => router.push('/admin')}>Admin page</button>
    </>
  );
}
