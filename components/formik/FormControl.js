import React, { forwardRef } from "react";
import Input from "./Input";
import Select from "./Select";
import DatePicker from "./DatePicker";
import RadioContainer from "./RadioContainer";

const FormControl = forwardRef(({ controlType, ...rest }, ref) => {
    switch (controlType) {
        case "text":
            return <Input {...rest} />;

        case "textarea":
            return <Input as="textarea" {...rest} />;

        case "date":
            return <DatePicker {...rest} />;

        case "radio":
            return <RadioContainer {...rest} />;

        case "select":
            return <Select {...rest} ref={ref} />;

        default:
            break;
    }
});

export default FormControl;
