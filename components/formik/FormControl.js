import React from "react";
import Input from "./Input";
import Select from "./Select";
import DatePicker from "./DatePicker";

const FormControl = ({ controlType, ...rest }) => {
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
            return <Select {...rest} />;

        default:
            break;
    }
};

export default FormControl;
