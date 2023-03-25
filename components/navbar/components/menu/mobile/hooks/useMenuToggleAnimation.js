import { useEffect } from "react";
import { closeMobileMenuAni, openMobileMenuAni } from "../animations";

export default function useMenuToggleAnimation(menuRef, isMobileMenuOpen) {
    useEffect(() => {
        if (isMobileMenuOpen) {
            openMobileMenuAni(menuRef.current);
        } else {
            closeMobileMenuAni(menuRef.current);
        }

        return () => {
            openMobileMenuAni(menuRef.current).revert();
            closeMobileMenuAni(menuRef.current).revert();
        };
    }, [isMobileMenuOpen]);
}
