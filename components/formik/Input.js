import { Field } from "formik";
import React from "react";
import Label from "./Label";

const Input = ({ id, label, className, required, ...rest }) => {
    return (
        <div>
            {label && <Label parentId={id} required={required} label={label} />}

            <Field
                type="text"
                className={`w-full border border-gray-150 rounded-md placeholder:text-gray-400 font-medium py-2 px-3 bg-gray-50  outline-none ${className}`}
                {...rest}
            />
        </div>
    );
};

export default Input;
