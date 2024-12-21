'use client'

import GoBack from '/app/components/goback.js';
import SelectionBox from '/app/components/selectionbox';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Settings() {
  const router = useRouter();
  const [classesData, setClassesData] = useState([]);
  const [selectedClass, setSelectedClass] = useState(null);

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

  const handleClassSelect = (classData) => {
    setSelectedClass(classData);
  };

  return (
    <div className="flex flex-col items-center p-2 text-black">
      {/* <GoBack onClick={() => router.push("/")} /> */}
      <SelectionBox data={classesData} onOptionChange={handleClassSelect}/>
      <div className="flex w-full mt-2">

        {/* Classroom Details */}
        <div className="w-2/3 p-2 border border-gray-300 rounded-lg">
          {selectedClass ? (
            <>
              <h2 className="text-lg font-bold mb-2">{selectedClass.name}</h2>
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr>
                    <th className="py-1 px-2 border-b">Day</th>
                    <th className="py-1 px-2 border-b">Class Name</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedClass.days.map((day, dayIndex) =>
                    day.classes.map((classItem, classIndex) => (
                      <tr key={`${dayIndex}-${classIndex}`}>
                        <td className="py-1 px-2 border-b">{day.day}</td>
                        <td className="py-1 px-2 border-b">
                          <div>{classItem.className}</div>
                          <div className="text-sm text-gray-600">{classItem.teacher}</div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </>
          ) : (
            <p>Select a classroom to see the details</p>
          )}
        </div>
        {/* Classroom Details */}
        
      </div>
    </div>
  );
}