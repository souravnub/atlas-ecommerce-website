import React, { useRef } from "react";
import useOverlayAnimation from "./hooks/useOverlayAnimation";

const Overlay = ({ onClick, isVisible }) => {
    const overlayRef = useRef();

    useOverlayAnimation(overlayRef, isVisible);

    return (
        <div
            ref={overlayRef}
            onClick={onClick}
            className="fixed inset-0 bg-black bg-opacity-40 opacity-0 z-10"></div>
    );
};

export default Overlay;
