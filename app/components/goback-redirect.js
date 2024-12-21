'use client'
import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';
export default function GoBack({ redirectTo }) {
  // From Uiverse.io by AKAspidey01
    const router = useRouter(redirectTo);
    return (
    <button
      className="bg-white text-center w-48 rounded-2xl h-14 fixed top-3 left-3 text-black text-xl font-semibold group"
      type="button"
      onClick={() => router.push(redirectTo)}
    >
      <div
        className="bg-color3 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1024 1024"
          height="25px"
          width="25px"
        >
          <path
            d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
            fill="#000000"
          ></path>
          <path
            d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
            fill="#000000"
          ></path>
        </svg>
      </div>
      <p className="translate-x-2">Go Back</p>
    </button>
  );

}
GoBack.PropTypes = {
    redirectTo: PropTypes.string.isRequired
};