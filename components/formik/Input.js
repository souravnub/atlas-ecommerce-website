import { Field } from "formik";
import React from "react";

const Input = ({ id, label, className, required, ...rest }) => {
    return (
        <div>
            {label && (
                <label htmlFor={id} className="text-sm  relative font-medium">
                    {label}
                    {required && (
                        <span className="font-medium absolute -right-1 -top-1 translate-x-full text-xl">
                            *
                        </span>
                    )}
                </label>
            )}

            <Field
                type="text"
                className={`w-full border border-gray-150 rounded-md placeholder:text-gray-400 font-medium p-3 bg-gray-50  outline-none ${className}`}
                {...rest}
            />
        </div>
    );
};

export default Input;
