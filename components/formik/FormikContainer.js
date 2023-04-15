import { Form, Formik } from "formik";
import React from "react";

const FormikContainer = ({ children, formId, className, ...props }) => {
    return (
        <Formik {...props}>
            <Form id={formId} className={className || {}}>
                {children}
            </Form>
        </Formik>
    );
};

export default FormikContainer;
