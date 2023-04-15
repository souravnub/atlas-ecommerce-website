import React from "react";

const Label = ({ parentId, label, required, ...rest }) => {
    return (
        <label
            className="relative block font-medium text-sm mb-1 w-max"
            htmlFor={parentId}
            {...rest}>
            {label}
            {required && (
                <span className="absolute text-lg -top-1 -right-2.5 font-medium">
                    *
                </span>
            )}
        </label>
    );
};

export default Label;
