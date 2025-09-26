import { useState } from "react";

function Search({ setSearchText, handleActiveCategory }) {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        handleActiveCategory(null);
        setSearchText(inputValue);
    };
    return (
        <form
            className="relative w-full md:w-120"
            onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="w-[90%] outline-none py-2 px-4 z-20 text-[16px] md:text-xl text-gray-900 bg-[#edeff0] rounded-s-md
             border-r-[#edeff0] border-r-3 border-3 border-gray-300  dark:bg-gray-700 dark:border-s-gray-700  
             dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="Search..." />
            <button
                type="submit"
                className={`
                    absolute w-15  top-0 end-0 py-2 px-4 font-medium h-full text-white  rounded-e-lg transition-colors duration-350
                    ${inputValue ? "bg-[#051c33] cursor-pinter": "bg-gray-300 cursor-not-allowed"}
                `}
                disabled={!inputValue}

            >
                <svg className="w-7 h-7 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 20">
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                </svg>
                <span className="sr-only">Search</span>
            </button>
        </form>
    );
}

export default Search;