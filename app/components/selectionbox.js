'use client'
import React, { useState } from 'react';

export default function SelectionBox({ data, onOptionChange}) {
    const [option, setOption] = useState(data[0] || '');

    const handleOptionChange = (item) => {
        setOption(item);
        if (onOptionChange) {
            onOptionChange(item);
        }
    };
    return (
        <div className="flex flex-col items-start p-2 text-black bg-white w-1/5 rounded-xl shadow-lg">
            <div className="text-left lato-bold m-3 text-2xl">
                <h1>Select class</h1>
            </div>
            <div className="w-full max-h-[600px] overflow-y-auto">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="m-5 font-medium h-14 hover:bg-zinc-100 flex items-center px-3 rounded-lg has-[:checked]:text-blue-500 has-[:checked]:bg-blue-50 has-[:checked]:ring-blue-300 has-[:checked]:ring-1 select-none"
                        onClick={() => handleOptionChange(item)}
                    >
                        <label className="text-xl"> {item.name}</label>
                        <input
                            type="radio"
                            name="status"
                            id={index}
                            checked={option === item}
                            onChange={() => handleOptionChange(item)}
                            className="hidden"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}