'use client'
import { useState } from "react";

export default function SelectionBox({ data }) {
    const [option, setOption] = useState('');

    return (
        <div className="flex flex-col items-start p-2 text-black bg-white w-1/4 rounded-xl">
            <div className="text-left lato-bold m-3 text-2xl">
                <h1>Select option</h1>
            </div>
            <div>
                
            {data.map((item, index) => (
                <div key={index} className="m-5">
                    <label className="text-xl">{item}</label>
                </div>
            ))}
            </div>
        </div>
    );
}