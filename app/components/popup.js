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
      loadDayData();
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
    <div className="fixed inset-0 flex items-center  justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-[600px] h-full max-h-[400px] flex flex-col">
        <table className="min-w-full divide-y divide-gray-200 border-separate border-spacing-y-4">
          <thead className="bg-gray-300">
            <tr>
            <th scope="col" 
            className="select-none px-6 py-3 text-center text-xs font-medium text-gray-800 uppercase tracking-wider">
            Class
            </th>
            <th scope="col" 
            className="select-none px-6 py-3 text-center text-xs font-medium text-gray-800 uppercase tracking-wider">
            Teacher
            </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 ">
            {classesData.map((classData,index) => (<></>))  }
            <tr>
              <th className="py-[6px] border-b-2 mt-5 select-none whitespace-nowrap text-md text-gray-900"><select>

                <option>fuck</option>
                <option>fuck</option>
                <option>fuck</option>
                
                </select></th>
                <th className="py-[6px] border-b-2 mt-5 select-none whitespace-nowrap text-md text-gray-900"><select>

                <option>fuck</option>
                <option>fuck</option>
                <option>fuck</option>
                
                </select></th>
                
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Popup;
