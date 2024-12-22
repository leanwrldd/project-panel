// components/Popup.js
'use client';
import React from "react";

import { useRouter } from "next/navuigation";
import { useState, useEffect } from "react";

const Popup = ({ show, onClose, selectedClass, selectedDayIndex}) => {
  if (!show) return null;
  const router = useRouter();

  const [classesData, setClassesData] = useState([]);
  const [config, setConfig] = useState("");
  useEffect(() => {
    const isAuthorized = localStorage.getItem('isAuthorized');
    if (isAuthorized !== 'true') {
      router.push('/admin'); // Redirect to the login page if not authorized
    } else {  
      loadClassesData();
    }
  }, [router]);

  const loadClassesData = async () => {
    const response = await fetch('/api/classes');
    const data = await response.json();
    setClassesData(data);
  };
  const saveClassesData = async () => {

  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm text-center relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
        ❌
        </button>
        <button
          onClick={onClose}
          className="absolute top-[7px] text-xl right-[50px] text-gray-500 hover:text-black"
        >
        ✔️
        </button>
      </div>
    </div>
  );
};

export default Popup;
