import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import ShopMenu from "./ShopMenu";

const ShopButton = ({ toggle, state }) => {
    return (
        <div className="relative">
            <button
                onClick={toggle}
                className="flex items-center"
                aria-expanded={state ? "true" : "false"}
                aria-controls="shop-menu">
                Shop
                <MdKeyboardArrowDown
                    className={`text-xl ${
                        state ? "rotate-180" : "rotate-0"
                    } transition`}
                />
            </button>

            <ShopMenu isOpen={state} />
        </div>
    );
};

export default ShopButton;
