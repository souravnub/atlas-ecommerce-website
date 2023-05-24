import { Field } from "formik";
import React from "react";
import Label from "./Label";
import ErrorText from "./ErrorText";

const Input = ({
    name,
    id,
    label,
    className,
    containerClass,
    required,
    ...rest
}) => {
    return (
        <div className={containerClass}>
            {label && <Label parentId={id} required={required} label={label} />}

            <Field
                type="text"
                name={name}
                className={`w-full border border-gray-150 rounded-md placeholder:text-gray-400 font-medium py-2 px-3 bg-gray-50 outline-none ${className}`}
                {...rest}></Field>

            <ErrorText name={name} />
        </div>
    );
};

export default Input;
