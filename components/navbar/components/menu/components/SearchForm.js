import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchForm = ({ value, onChange }) => {
    return (
        <form className="relative flex w-full">
            <input
                required
                value={value}
                onChange={onChange}
                placeholder="Search"
                type="text"
                className="w-full border-[1.5px] border-gray-150 rounded-md placeholder:text-gray-400 font-medium pl-9 px-1 py-2 bg-gray-100 text-sm outline-none"
            />

            <button
                className={`absolute rounded-l-md text-lg text-gray-400 top-0 bottom-0 px-2 transition focus-visible:bg-gray-150 enabled:hover:bg-gray-150`}>
                <FiSearch
                    className={`transition duration-200 ${
                        value.length !== 0 && "text-black"
                    }`}
                />
            </button>
        </form>
    );
};

export default SearchForm;
