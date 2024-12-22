'use client';
import GoBackRedirect from '/app/components/goback-Redirect.js';
import Popup from '/app/components/popup.js';

import { useState } from 'react';

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      <div className='flex justify-center items-center h-screen'>
      <div className="p-6">
      <button
        onClick={() => setShowPopup(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Show Popup
      </button>

      <Popup show={showPopup} onClose={() => setShowPopup(false)} />
    </div>
      <GoBackRedirect redirectTo="/admin"/>
      </div>
    </>
  );
}