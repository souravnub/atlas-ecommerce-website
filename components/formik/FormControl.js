import React from "react";
import Input from "./Input";
import Select from "./Select";

const FormControl = ({ controlType, ...rest }) => {
    switch (controlType) {
        case "text":
            return <Input {...rest} />;

        case "select":
            return <Select {...rest} />;

        default:
            break;
    }
};

export default FormControl;
