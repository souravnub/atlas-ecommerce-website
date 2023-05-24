import Input from "@/components/form/Input";
import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchForm = ({ value, onChange }) => {
    return (
        <form className="relative flex w-full">
            <Input
                required={true}
                value={value}
                onChange={onChange}
                placeholder="Search"
                className="pl-8 py-2"
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
