import React from "react";

const BtnPrimary = ({ children, className, ...props }) => {
    return (
        <button
            {...props}
            className={`bg-neutral-800 text-white p-3 block w-full text-center rounded-md font-medium disabled:bg-neutral-200 disabled:text-neutral-400 ${className}`}>
            {children}
        </button>
    );
};

export default BtnPrimary;
