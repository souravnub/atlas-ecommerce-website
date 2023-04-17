import React, { forwardRef, useRef } from "react";
import Select from "react-select";
import { HiOutlineChevronDown } from "react-icons/hi";
import { HiDocumentMagnifyingGlass } from "react-icons/hi2";
import Spinner from "@atlaskit/spinner";
import { Field } from "formik";
import ErrorText from "./ErrorText";
import Label from "./Label";

const FormikSelect = forwardRef(
    (
        { name, required, placeholder, options, label, onChange, ...rest },
        ref
    ) => {
        return (
            <div>
                {label && (
                    <Label
                        parentId={name}
                        label={label}
                        required={required}
                        onClick={() => {
                            ref?.current.focus();
                        }}
                    />
                )}

                <Field name={name}>
                    {({ field, form }) => {
                        return (
                            <Select
                                ref={ref}
                                id={name}
                                instanceId={name}
                                openMenuOnFocus={true}
                                options={options}
                                isSearchable
                                unstyled
                                components={{
                                    LoadingIndicator: () => (
                                        <Spinner size={14} />
                                    ),
                                    DropdownIndicator: () => (
                                        <HiOutlineChevronDown className="text-xl box-content text-gray-600" />
                                    ),
                                    NoOptionsMessage: () => (
                                        <div className="flex items-center gap-1 justify-center py-2">
                                            <HiDocumentMagnifyingGlass className="text-2xl" />
                                            <span className="font-medium text-gray-700">
                                                No option found
                                            </span>
                                        </div>
                                    ),
                                    IndicatorsContainer: ({ children }) => (
                                        <div className="flex items-center gap-1.5">
                                            {children}
                                        </div>
                                    ),
                                }}
                                placeholder={placeholder}
                                aria-label={placeholder}
                                classNames={{
                                    control: ({ isDisabled }) =>
                                        `border rounded-md py-2 px-3 ${
                                            isDisabled && "opacity-50"
                                        }`,
                                    option: ({ isFocused, isSelected }) =>
                                        `pl-2 py-2  active:bg-gray-200 ${
                                            isFocused && "bg-gray-50"
                                        } ${isSelected && "bg-gray-100"}`,
                                    menu: () =>
                                        "mt-2 bg-white  border py-1 rounded-md",
                                    placeholder: () =>
                                        "text-gray-800 font-medium",
                                    singleValue: () => "font-medium",
                                }}
                                onBlur={field.onBlur}
                                value={form.values[name]}
                                {...rest}
                                onChange={(opt) => {
                                    form.setFieldValue(name, opt?.value || "");
                                    onChange && onChange(opt);
                                }}
                            />
                        );
                    }}
                </Field>
                <ErrorText name={name} />
            </div>
        );
    }
);

export default FormikSelect;
