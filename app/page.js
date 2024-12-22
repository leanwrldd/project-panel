'use client';
import GoBackRedirect from '/app/components/goback-Redirect.js';

import { useState } from 'react';

export default function Home() {

  return (
    <>
      <div className='flex justify-center items-center h-screen'>

      <GoBackRedirect redirectTo="/admin"/>
      </div>
    </>
  );
}