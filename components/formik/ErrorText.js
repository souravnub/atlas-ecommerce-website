import { ErrorMessage } from "formik";
import React from "react";

const innerText = ({ children }) => {
    return <span className="text-sm text-red-600 font-medium">{children}</span>;
};

const ErrorText = ({ name }) => {
    return <ErrorMessage name={name} component={innerText} />;
};
export default ErrorText;
