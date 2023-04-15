import React, { useRef } from "react";
import Select from "react-select";
import { HiOutlineChevronDown } from "react-icons/hi";
import { HiDocumentMagnifyingGlass } from "react-icons/hi2";
import { Field } from "formik";
import ErrorText from "./ErrorText";

const FormikSelect = ({ name, placeholder, options, label, ...rest }) => {
    const selectRef = useRef();

    return (
        <div>
            {label && (
                <label
                    className="relative block w-max font-medium text-sm mb-1"
                    htmlFor={name}
                    onClick={() => selectRef.current.focus()}>
                    {label}
                </label>
            )}

            <Field name={name} id={name}>
                {({ field, form }) => {
                    return (
                        <Select
                            openMenuOnFocus={true}
                            ref={selectRef}
                            options={options}
                            isSearchable
                            unstyled
                            components={{
                                DropdownIndicator: () => (
                                    <HiOutlineChevronDown className="text-xl box-content" />
                                ),
                                NoOptionsMessage: () => (
                                    <div className="flex items-center gap-1 justify-center py-2">
                                        <HiDocumentMagnifyingGlass className="text-2xl" />
                                        <span className="font-medium text-gray-700">
                                            No option found
                                        </span>
                                    </div>
                                ),
                            }}
                            placeholder={placeholder}
                            aria-label={placeholder}
                            classNames={{
                                control: () => "border rounded-md p-3",
                                option: ({ isFocused, isSelected }) =>
                                    `pl-2 py-2  active:bg-gray-200 ${
                                        isFocused && "bg-gray-50"
                                    } ${isSelected && "bg-gray-100"}`,
                                menu: () =>
                                    "mt-2 bg-white  border py-1 rounded-md",
                                placeholder: () => "text-gray-800 font-medium",
                                singleValue: () => "font-medium",
                            }}
                            {...rest}
                            value={options.find(
                                (opt) => opt.value === form.values[name]
                            )}
                            onBlur={field.onBlur}
                            onChange={(opt) =>
                                form.setFieldValue(name, opt.value)
                            }
                        />
                    );
                }}
            </Field>
            <ErrorText name={name} />
        </div>
    );
};

export default FormikSelect;
