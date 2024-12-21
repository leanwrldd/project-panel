'use client'

import GoBack from '/app/components/goback.js';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Settings() {
  const router = useRouter();
  const [classesData, setClassesData] = useState([]);

  // Check if the user is authorized
  useEffect(() => {
    const isAuthorized = localStorage.getItem('isAuthorized');
    if (isAuthorized !== 'true') {
      router.push('/admin'); // Redirect to the login page if not authorized
    } else {
      loadClassesData();
    }
  },
  [router]);

  const loadClassesData = async () => {
    const response = await fetch('/api/classes');
    const data = await response.json();
    setClassesData(data);
  };

  return (
    <div>
      <GoBack onClick={() => router.push("/")} />
      <div className='text-black'>
        {classesData.map((classData, index) => (
          <div key={index}>
            <h2>{classData.name}</h2>
            {classData.days.map((day, dayIndex) => (
              <div key={dayIndex}>
                <h3>{day.day}</h3>
                <ul>
                  {day.classes.map((classItem, classIndex) => (
                    <li key={classIndex}>
                      {classItem.className} - {classItem.teacher}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}