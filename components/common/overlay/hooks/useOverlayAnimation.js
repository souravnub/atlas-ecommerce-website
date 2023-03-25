import { useEffect } from "react";
import { getClosingAni, getOpenAni } from "../animations";

export default function useOverlayAnimation(overlayRef, isVisible) {
    useEffect(() => {
        if (isVisible) {
            getOpenAni(overlayRef.current);
        } else {
            getClosingAni(overlayRef.current);
        }

        return () => {
            getOpenAni(overlayRef.current).revert();
            getClosingAni(overlayRef.current).revert();
        };
    }, [isVisible]);
}
