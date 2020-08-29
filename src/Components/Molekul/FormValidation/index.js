import React, { Fragment } from "react";
import FormValidation from "./FormValidation";
import { Row } from "reactstrap";

const Form = ({ form = [], validationClick }) => {
    return (
        <Fragment>
            <Row>
                {form.map((item, key) => {
                    return (
                        <FormValidation
                            validationClick={validationClick}
                            form={form}
                            item={item}
                            key={key}
                            id={key}
                        />
                    );
                })}
            </Row>
        </Fragment>
    );
};
export default Form;
