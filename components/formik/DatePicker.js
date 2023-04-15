import { Field } from "formik";
import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import ErrorText from "./ErrorText";
import ReactDatePicker from "react-datepicker";
import Label from "./Label";

const DatePicker = ({ name, placeholder, required, label, ...rest }) => {
    return (
        <div className="w-max">
            {label && (
                <Label label={label} required={required} parentId={name} />
            )}
            <Field name={name} id={name}>
                {({ field, form }) => {
                    return (
                        <ReactDatePicker
                            {...field}
                            placeholderText={placeholder}
                            id={name}
                            dateFormat="dd/MM/yyyy"
                            className="bg-gray-50 border rounded-md py-2 px-3 font-medium "
                            selected={field.value}
                            onChange={(date) => {
                                form.setFieldValue(name, date);
                            }}
                            {...rest}
                        />
                    );
                }}
            </Field>
            <ErrorText name={name} />
        </div>
    );
};

export default DatePicker;
