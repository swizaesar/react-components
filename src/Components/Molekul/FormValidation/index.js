import React, { Fragment } from "react";
import FormValidation from "./FormValidation";
import { Row } from "reactstrap";

const Form = ({
    form = [],
    // validationClick,
    handlerStatusForm = () => {},
    validateForm = true,
    setForm = () => {},
    onCheckValue = () => {},
}) => {
    const onGetValue = (param) => {
        form[param.id].value = param.value;
        form[param.id].status = param.status;
        setForm(form);
        onCheckValue(form);
    };
    return (
        <Fragment>
            <Row>
                {form.map((item, key) => {
                    return (
                        <FormValidation
                            onGetValue={onGetValue}
                            validateForm={validateForm}
                            handlerStatusForm={handlerStatusForm}
                            isStatus={!form[key].status}
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
