'use client'

import GoBack from '/app/components/goback.js';
import Buttonv2 from '/app/components/buttonv2.js';
import SelectionBox from '/app/components/selectionbox';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Settings() {
  const router = useRouter();
  const [classesData, setClassesData] = useState([]);
  const [selectedClass, setSelectedClass] = useState([]);

  const HandleClick = () => {

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
      
      <div className='relative w-full h-full flex gap-x-8'>
        <SelectionBox data={classesData} onOptionChange={handleClassSelect}/>
          <div className='bg-white rounded-lg w-full p-8 mr-4 shadow-lg'>
            <div className='flex justify-between -mt-6 pt-4 items-center'>
              <div className='flex-1 text-left'>
                <p className='text-5xl font-bold'>Class Details</p>
              </div>
              <Buttonv2 placeholder='Edit' onClick={HandleClick} className='ml-auto'/>
            </div>

            {/* Display the selected class data */}
            <div>
              <table className="min-w-full divide-y mt-6 divide-gray-200">
                <thead className="bg-gray-300">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-800 uppercase tracking-wider">
                      Monday
                    </th>
                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-800 uppercase tracking-wider">
                      Tuesday
                    </th>
                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-800 uppercase tracking-wider">
                      Wednesday
                    </th>
                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-800 uppercase tracking-wider">
                      Thursday
                    </th>
                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-800 uppercase tracking-wider">
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