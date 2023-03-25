import Link from "next/link";
import React, { useRef } from "react";
import useShopMenuAnimation from "../hooks/useShopMenuAnimation";

export const shopMenuOptions = [
    { name: "Mens's clothing", href: "/shop/men" },
    { name: "Summer mart", href: "/shop/summer" },
];

const ShopMenu = ({ isOpen }) => {
    const menuRef = useRef();
    useShopMenuAnimation(menuRef, isOpen);

    return (
        <ul
            ref={menuRef}
            id="shop-menu"
            className={`absolute -bottom-2 left-1/2 -translate-x-1/3 translate-y-full origin-top hidden scale-y-0 flex-col px-2 py-2 bg-gray-50 rounded-sm  space-y-2 `}>
            {shopMenuOptions.map(({ href, name }) => {
                return (
                    <li key={name}>
                        <Link
                            href={href}
                            className="hover:bg-gray-200 duration-300 transition min-w-full font-medium text-xs block w-max px-3 py-1 bg-gray-150 rounded-sm">
                            {name}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default ShopMenu;
