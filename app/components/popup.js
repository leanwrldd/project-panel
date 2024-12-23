// components/Popup.js
'use client';
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const Popup = ({ show, onClose, selectedClass, selectedDayIndex }) => {
  const router = useRouter();
  const [classesData, setClassesData] = useState([]);
  const [config, setConfig] = useState(null);

  const loadDayData = () => {
    if (selectedClass && selectedDayIndex !== null) {
      const selectedDay = selectedClass.days[selectedDayIndex];
      console.log("Selected Day:", selectedDay); // Log the selected day data
    }
  };
  useEffect(() => {
    const isAuthorized = localStorage.getItem('isAuthorized');
    if (isAuthorized !== 'true') {
      router.push('/admin'); // Redirect to the login page if not authorized
    } else {  
      loadData();
    }
  }, [router]);

  const loadData = async () => {
      const response_class = await fetch('/api/classes');
      const data_class = await response_class.json();
      const response_config = await fetch('/api/readConfig?request=config');
      const data_config = await response_config.json();
      console.log("Fetching data...");
      console.log('Config Data:', data_config); // Log the fetched data
      setClassesData(data_class);
      setConfig(data_config);
  };
  // okay so gang, we need to display the selected class. selected day data in the popup
  if (!show) return null;

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
          onClick={loadDayData}
          className="absolute top-[7px] text-xl right-[50px] text-gray-500 hover:text-black"
        >
          ✔️
        </button>
      </div>
    </div>
  );
};

export default Popup;
