'use client'

import GoBack from '/app/components/goback.js';
import Buttonv2 from '/app/components/buttonv2.js';
import Popup from '/app/components/popup.js';
import SelectionBox from '/app/components/selectionbox';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Settings() {
  const router = useRouter();
  const [classesData, setClassesData] = useState([]);
  const [selectedClass, setSelectedClass] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);

  const HandleClick = (day) => {
    setShowPopup(true);
    setSelectedDay(day);

  }
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
    console.log("Fetching data...");
    console.log('Classes Data:', data); // Log the fetched data
    setClassesData(data);
    if (data.length > 0) {
      handleClassSelect(data[0]);
    }
  };

  const handleClassSelect = (classData) => {
    console.log("Selecting class...");
    console.log('Selected Class:', classData); // Log the selected class data
    setSelectedClass(classData);
  };

  return (
    <div className="flex flex-row items-center w-full p-2 my-28 mx-5 text-black">
      {/* <GoBack onClick={() => router.push("/")} /> */}
      <Popup show={showPopup} onClose={() => setShowPopup(false)} selectedClass={selectedClass} selectedDayIndex={selectedDay} />
      <div className='relative w-full h-full flex gap-x-6'>
        <SelectionBox data={classesData} onOptionChange={handleClassSelect}/>
          <div className='bg-white rounded-lg w-full p-8 mr-4 shadow-lg'>
                <p className='text-5xl text-left font-bold'>Class Details</p>
            {/* Display the selected class data */}
            <div>
              <table className="min-w-full divide-y mt-6 divide-gray-200">
                <thead className="bg-gray-300">
                  <tr>
                    <th scope="col" 
                    onClick={() => HandleClick("Monday")} 
                    className="select-none px-6 py-3 text-center text-xs font-medium hover:text-gray-400 cursor-pointer text-gray-800 uppercase tracking-wider">
                      Monday
                    </th>
                    <th scope="col" 
                    onClick={() => HandleClick("Tuesday")} 
                    className="select-none px-6 py-3 text-center text-xs font-medium hover:text-gray-400 cursor-pointer text-gray-800 uppercase tracking-wider">
                      Tuesday
                    </th>
                    <th scope="col" 
                    onClick={() => HandleClick("Wednesday")} 
                    className="select-none px-6 py-3 text-center text-xs font-medium hover:text-gray-400 cursor-pointer text-gray-800 uppercase tracking-wider">
                      Wednesday
                    </th>
                    <th scope="col" 
                    onClick={() => HandleClick("Thursday")} 
                    className="select-none px-6 py-3 text-center text-xs font-medium hover:text-gray-400 cursor-pointer text-gray-800 uppercase tracking-wider">
                      Thursday
                    </th>
                    <th scope="col"
                    onClick={() => HandleClick("Friday")} 
                    className="select-none px-6 py-3 text-center text-xs font-medium hover:text-gray-400 cursor-pointer text-gray-800 uppercase tracking-wider">
                      Friday
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {Array.from({ length: 10 }).map((_, b) => (
                    <tr key={b}>
                      {selectedClass.days && selectedClass.days.map((day, index) => (
                          <th key={index}className="px-6 py-[6px] whitespace-nowrap text-md text-gray-900">{day.classes[b].className} <p className='text-xs lato-thin '>{day.classes[b].teacher}</p></th>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
      </div>        
    </div>
  );
}