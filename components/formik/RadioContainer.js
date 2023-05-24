import { Field } from "formik";
import React from "react";

const RadioButton = ({ name, label, value }) => {
    return (
        <label
            htmlFor={name + value}
            className="flex p-3 border rounded-lg  hover:bg-gray-50/60 transition cursor-pointer">
            <Field
                type="radio"
                name={name}
                value={value}
                id={name + value}
                className="mr-3 appearance-none border-black border w-[1.15rem] h-[1.15rem] rounded-full relative before:absolute before:w-[65%] flex items-center justify-center before:aspect-square before:rounded-full checked:before:bg-black"></Field>
            {label && label}
        </label>
    );
};

const RadioContainer = ({ title, options, ...rest }) => {
    return (
        <fieldset>
            {title && (
                <legend className="font-semibold text-gray-700 block mb-4">
                    {title}
                </legend>
            )}

            <div className="space-y-3">
                {options.map((option) => {
                    return (
                        <RadioButton key={option.value} {...rest} {...option} />
                    );
                })}
            </div>
        </fieldset>
    );
};

export default RadioContainer;
