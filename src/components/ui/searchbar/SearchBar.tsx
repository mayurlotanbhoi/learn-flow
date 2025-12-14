const SearchBar = ({ setSearchTerm, searchTerm }) => {
     

     return (
          <div className="flex items-center bg-light rounded-2xl px-4 py-2 w-full">
               <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
               >
                    <path
                         strokeLinecap="round"
                         strokeLinejoin="round"
                         strokeWidth={2}
                         d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
               </svg>
               <input
                    type="text"
                    placeholder="Search..."
                    onChange={val => setSearchTerm && setSearchTerm(val.target.value)}
                    className="ml-2 bg-light focus:outline-none w-full text-white placeholder-gray-400"
               />
          </div>
     );
};
export default SearchBar;