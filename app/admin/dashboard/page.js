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
    <div className="flex flex-row items-center w-full p-2 my-28 mx-5 text-black">
      {/* <GoBack onClick={() => router.push("/")} /> */}
      
      <div className='relative w-full h-full flex gap-x-8'>
        <SelectionBox data={classesData} onOptionChange={handleClassSelect}/>
          <div className='bg-white rounded-lg w-full mr-8'>
            <p>test</p>
          </div>
      </div>        
    </div>
  );
}