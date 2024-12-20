"use client";

export default function Button({ onClick, placeholder }) {
    // From Uiverse.io by tranphattrien
    return (
        <button className="w-[150px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-color3 before:to-[rgb(61,176,191)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]"
            onClick={onClick}>
            {placeholder}
        </button>
    );
}