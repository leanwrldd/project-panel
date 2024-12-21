'use client';
import GoBackRedirect from '/app/components/goback-Redirect.js';
import SelectionBox from '/app/components/selectionbox.js';

import { useState } from 'react';

export default function Home() {
  const [selectedClass, setSelectedClass] = useState(null);

  const handleChange = (item) => {
    setSelectedClass(item);
  };

  const data = ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10', 'Class 11'];

  return (
    <>
      <div className='flex justify-center items-center h-screen'>
        <SelectionBox data={data} onOptionChange={handleChange} />
      </div>
    </>
  );
}