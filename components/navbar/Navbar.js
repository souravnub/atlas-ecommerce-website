import React, { useEffect, useRef } from "react";
import Actions from "./components/user_actions/Actions";
import Logo from "./components/Logo";
import Menu from "./components/menu/desktop/Menu";
import MobileMenu from "./components/menu/mobile/MobileMenu";

const Navbar = () => {
    const navRef = useRef();

    useEffect(() => {
        document.body.style.paddingTop = navRef.current.offsetHeight + "px";
    }, []);

    return (
        <nav
            className="flex justify-between items-center py-2 px-3 fixed top-0 w-full bg-white bg-opacity-80 backdrop-blur-lg z-10"
            ref={navRef}>
            <Logo />
            <MobileMenu />
            <Menu />
            <Actions />
        </nav>
    );
};

export default Navbar;
