import Link from "next/link";
import React from "react";
import useToggle from "../../../hooks/ToggleState";
import ShopButton from "./components/ShopButton";

const Menu = () => {
    const [isOpen, { toggle }] = useToggle();

    return (
        <div className="gap-8 items-center text-sm font-medium hidden md:flex">
            <ShopButton toggle={toggle} state={isOpen} />

            <Link href="/products/popular">Popular</Link>
            <Link href="/products/new">New</Link>
        </div>
    );
};

export default Menu;
