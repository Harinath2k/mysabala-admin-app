import { useState } from "react";


export function AddCategory() {
  const [categoryName, setCategoryName] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);

    const handleConfirmClick = () => setShowConfirm(true);
const handleYes = () => {
  // API here
  console.log('Submitted:', categoryName);
};

const handleNo = () => setShowConfirm(false);
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-100">
      <div className="relative w-full max-w-lg bg-white border-2 border-neutral-900 rounded-lg shadow-[6px_6px_0_#171717]">

        {/* Header */}
        <div className="px-7 py-5 bg-neutral-900 rounded-t-[6px]">
          <h2 className="font-extrabold text-base uppercase tracking-widest text-stone-100">
            Add Category
          </h2>
        </div>

        {/* Body — fields go here next */}
        <div className="px-7 py-8">
          <h3 className="text-x1 font-normal text-heading">Category Name<span className='text-red-500'>*</span></h3>
          <input type="text" value={categoryName} required className="w-full px-4 py-3 border-2 border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200" onChange={(e) => setCategoryName(e.target.value)} placeholder="Enter The Category Name" />   
        </div>

        {/*  go here next */}
        <div className="px-7 py-5 border-t-2 border-neutral-200">
        <h3 className="text-x1 font-normal text-heading">Description</h3>
            <textarea className="w-full px-4 py-3 border-2 border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200" placeholder="Enter The Category Description" rows={4} />   
        </div>

        <div className="px-7 py-5 border-t-2 border-neutral-200 flex justify-end">
            <button onClick={handleConfirmClick} disabled={!categoryName.trim()} className={`px-6 py-3 bg-orange-600 text-white text-sm font-semibold rounded-lg shadow-md border border-orange-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2
  ${!categoryName.trim() ? 'opacity-50 cursor-not-allowed' : 'hover:bg-orange-500 cursor-pointer hover:shadow-lg active:scale-95'}`}>
            Confirm
            </button>
        </div>
       {showConfirm && (
  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-5 rounded-lg bg-white/95 backdrop-blur-sm px-8 text-center">
    <p className="text-x1 font-bold uppercase tracking-wide text-neutral-900">
      Add "{categoryName}"?
    </p>
    <p className="text-sm text-neutral-500 max-w-xs">
      Are you sure you want to add this category?
    </p>
    <div className="flex gap-3">
      <button
        onClick={handleYes}
        className="text-xs font-bold uppercase tracking-widest px-6 py-2.5 rounded border-2 border-neutral-900 bg-neutral-900 text-stone-100 hover:bg-neutral-700 transition-colors"
      >
        Yes, Add It
      </button>
      <button
        onClick={handleNo}
        className="text-xs font-bold uppercase tracking-widest px-6 py-2.5 rounded border-2 border-neutral-300 bg-white text-neutral-500 hover:border-neutral-900 hover:text-neutral-900 transition-colors"
      >
        No, Go Back
      </button>
    </div>
  </div>
)} 
  </div>

    </div>
  );
}