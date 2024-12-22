'use client'

import GoBack from '/app/components/goback.js';
import SelectionBox from '/app/components/selectionbox';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Settings() {
  const router = useRouter();
  const [classesData, setClassesData] = useState([]);
  const [selectedClass, setSelectedClass] = useState([]);

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
          <div className='bg-white rounded-lg w-full p-8 mr-8 shadow-lg' >
            <div>
              <p className='text-2xl font-bold text-center'>Class Details {selectedClass.name}</p>
              <table className="min-w-full divide-y mt-6 divide-gray-200">
                <thead className="bg-gray-300">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                       Monday
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                       Tuesday
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                       Wednesday
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                       Thursday
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                       Friday
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {selectedClass.days && selectedClass.days.map((day, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {day.day === 'Monday' && day.classes.map((classItem, i) => (
                          <div key={i}>{classItem.className} - {classItem.teacher}</div>
                        ))}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {day.day === 'Tuesday' && day.classes.map((classItem, i) => (
                          <div key={i}>{classItem.className} - {classItem.teacher}</div>
                        ))}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {day.day === 'Wednesday' && day.classes.map((classItem, i) => (
                          <div key={i}>{classItem.className} - {classItem.teacher}</div>
                        ))}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {day.day === 'Thursday' && day.classes.map((classItem, i) => (
                          <div key={i}>{classItem.className} - {classItem.teacher}</div>
                        ))}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {day.day === 'Friday' && day.classes.map((classItem, i) => (
                          <div key={i}>{classItem.className} - {classItem.teacher}</div>
                        ))}
                      </td>
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