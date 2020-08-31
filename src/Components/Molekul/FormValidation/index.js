import React, { Fragment } from "react";
import FormValidation from "./FormValidation";
import { Row } from "reactstrap";

const Form = ({ form = [], validationClick, handlerStatusForm = () => {} }) => {
    return (
        <Fragment>
            <Row>
                {form.map((item, key) => {
                    return (
                        <FormValidation
                            handlerStatusForm={handlerStatusForm}
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
