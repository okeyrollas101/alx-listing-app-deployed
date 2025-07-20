const Searchbar: React.FC = () => { 
  // This component renders a search bar with fields for location, check-in, check-out, and number of people.
  // It includes a submit button with a search icon.
  return (
    <form className="flex items-center justify-between bg-white shadow-lg rounded-full w-full h-[58px] border border-[#F6F6F6] py-2 px-3 max-w-4xl mx-auto">
       <div className="flex flex-col px-3">
         <label htmlFor="location" className="text-[#161117] text-sm mb-1">Location</label>
         <input id="location" type="text" placeholder="Search for destination"  className="bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none"/>
       </div>
       <span className="text-gray-300">|</span>
       <div className="flex flex-col px-3">
         <label htmlFor="checkin" className="text-[#161117] text-sm mb-1">Check in</label>
         <input id="checkin" type="text" placeholder="Add date"  className="bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none"/>
       </div>
       <span className="text-gray-300">|</span>
        <div className="flex flex-col px-3">
         <label htmlFor="checkout" className="text-[#161117] text-sm mb-1">Check out</label>
         <input id="checkout" type="text" placeholder="Add date"  className="bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none"/>
       </div>
       <span className="text-gray-300">|</span>
        <div className="flex flex-col px-3">
         <label htmlFor="people" className="text-[#161117] text-sm mb-1">People</label>
         <input id="people" type="text" placeholder="Add guest"  className="bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none"/>
       </div>
       <button
        type="submit"
        className="ml-3 bg-[#FFA800] text-white rounded-full p-3 flex items-center justify-center mr-4"
        aria-label="Search"
        >
        <svg
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
        >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        </button>
    </form>
  );
}
export default Searchbar;

