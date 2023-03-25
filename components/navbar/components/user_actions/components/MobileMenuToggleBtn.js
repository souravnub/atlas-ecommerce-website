import {
    setMobileMenuOpenStateAtom,
    toggleMobileMenuAtom,
} from "@/components/navbar/store";
import { useAtom } from "jotai";
import React, { useEffect } from "react";

const MobileMenuToggleBtn = () => {
    const [mobileMenuState, setMobileMenuOpenState] = useAtom(
        setMobileMenuOpenStateAtom
    );

    useEffect(() => {
        if (mobileMenuState === true) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [mobileMenuState]);

    return (
        <button
            aria-controls="mobile-menu"
            aria-expanded={mobileMenuState === false ? "false" : "true"}
            onClick={() => setMobileMenuOpenState(true)}
            className="relative w-5 py-2 px-0.5 md:hidden">
            <div
                className="origin-center absolute top-1/3 left-0 w-full h-0.5 -translate-y-1/2 pointer-events-none bg-black rounded-full"
                aria-hidden="true"></div>
            <div
                className="origin-center absolute top-2/3 left-0 w-full h-0.5 -translate-y-1/2 pointer-events-none bg-black rounded-full"
                aria-hidden="true"></div>
        </button>
    );
};

export default MobileMenuToggleBtn;
