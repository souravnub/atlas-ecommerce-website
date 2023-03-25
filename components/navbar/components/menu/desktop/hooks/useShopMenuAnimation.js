import { useEffect, useRef } from "react";
import { getShopMenuAni } from "../animations";

export default function useShopMenuAnimation(menuRef, isMenuOpen) {
    const menuAniRef = useRef();

    useEffect(() => {
        menuAniRef.current = getShopMenuAni(menuRef.current);
        return () => {
            menuAniRef.current?.revert();
        };
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            menuAniRef.current.play();
        } else {
            menuAniRef.current.reverse();
        }
    }, [isMenuOpen]);
}
