import React, { useState } from "react";

const Input = ({ id, className, onChange, required, ...props }) => {
    const [value, setValue] = useState("");

    return (
        <div>
            {props.label && (
                <label htmlFor={id} className="text-sm  relative font-medium">
                    {props.label}
                    {required && (
                        <span className="font-medium absolute -right-1 -top-1 translate-x-full text-xl">
                            *
                        </span>
                    )}
                </label>
            )}

            <input
                required={required}
                value={value}
                id={id}
                onChange={(e) => {
                    setValue(e.target.value);
                    onChange && onChange(e);
                }}
                type="text"
                className={`w-full border border-gray-150 rounded-md placeholder:text-gray-400 font-medium py-2 px-3 bg-gray-50  outline-none ${className}`}
                {...props}
            />
        </div>
    );
};

export default Input;
