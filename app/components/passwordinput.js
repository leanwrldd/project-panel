export default function Input() {
  return (
    //  From Uiverse.io by jubayer-10 
    <>
      <div className="text-gray-800 w-64 h-14 relative flex items-center shadow-2xl">
        <input
          className="peer w-full h-full bg-white text-lg font-light placeholder-slate-400 contrast-more:placeholder-slate-500 border border-slate-200 outline-none rounded-lg focus:border-indigo-400 valid:border-indigo-400 focus:ring-indigo-400 valid:ring-indigo-400 focus:ring-1 valid:ring-1 px-3"
          placeholder="Enter password"
          type="password"
        />
      </div>
    </>
  );
}