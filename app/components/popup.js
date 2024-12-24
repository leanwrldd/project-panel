'use client';
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const Popup = ({ show, onClose, selectedClass, selectedDayIndex }) => {
  const router = useRouter();
  const [dayData, setDayData] = useState([]);
  const [config, setConfig] = useState(null);

    const loadData = async () => {
      const response_config = await fetch('/api/readConfig?request=config');
      const data_config = await response_config.json();
      setConfig(data_config);
  };
  const loadDayData = () => {
    if (selectedClass && selectedClass.days && selectedDayIndex !== null && selectedDayIndex < selectedClass.days.length) {
      const selectedDay = selectedClass.days[selectedDayIndex];
      setDayData(selectedDay);
      console.log("Selected Day:", selectedDay); // Log the selected day data
    } else {
      console.log("No class selected");
    }
  };

  useEffect(() => {
    const isAuthorized = localStorage.getItem('isAuthorized');
    if (isAuthorized !== 'true') {
      router.push('/admin'); // Redirect to the login page if not authorized
    } else {  
      loadDayData();
      loadData();
    }
  }, [selectedClass, selectedDayIndex]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center  justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-[600px] h-full max-h-[680px] flex relative flex-col">
        <button
          onClick={onClose}
          className="absolute top-[11px] text-2xl right-[60px] text-gray-500 hover:text-black">
        ✔️
        </button>
        <button
          onClick={onClose}
          className="absolute top-[16px] text-xl right-[20px] text-gray-500 hover:text-black">
        ❌
        </button>
        <table className="min-w-full divide-y mt-5 divide-gray-200 border-separate border-spacing-y-4">
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
            {dayData.classes && dayData.classes.map((classData, index) => (<tr key={index}>
              <th className="py-[6px] border-b-2 mt-5 select-none whitespace-nowrap text-md text-gray-900">
                <select>

                  <option>{classData.className}</option>
                  {config && config.classes.map((className, index) => (<option key={index}>{className}</option>))}

                </select>
              </th>
              <th className="py-[6px] border-b-2 mt-5 select-none whitespace-nowrap text-md text-gray-900">
                <select>

                  <option>{classData.teacher}</option>
                  {config && config.teachers.map((teacherName, index) => (<option key={index}>{teacherName}</option>))}

                </select>
              </th>
            </tr>))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Popup;
