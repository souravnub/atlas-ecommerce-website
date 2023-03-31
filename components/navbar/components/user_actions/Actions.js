import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import MobileMenuToggleBtn from "./components/MobileMenuToggleBtn";
import SearchForm from "../menu/components/SearchForm";
import Link from "next/link";

const Actions = () => {
    const [searchVal, setSearchVal] = useState("");

    return (
        <div className="flex gap-4">
            <div className="hidden md:block">
                <SearchForm
                    value={searchVal}
                    onChange={(e) => setSearchVal(e.target.value)}
                />
            </div>

            <Link
                href="/cart"
                className="flex items-center justify-center text-lg px-1">
                <FiShoppingCart />
            </Link>

            <button className="text-lg px-1 hidden md:inline-block">
                <FaRegUser />
            </button>

            <MobileMenuToggleBtn />
        </div>
    );
};

export default Actions;
