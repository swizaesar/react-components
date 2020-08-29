import React, { Fragment } from "react";
import { Col } from "reactstrap";

import FormInput from "./FormInput";

const FormValidation = ({ form = [], item, validationClick, id }) => {
    const checkVal = true;
    const onGetValue = (param) => {
        let getStatus = form[id];
        console.log(param);
        // console.log("getStatus[param.name]", getStatus[param.name]);
        // getStatus[param.name] = {
        //     value: param.value,
        //     status: param.status,
        // };
    };
    return (
        <Fragment>
            <Col xl={item.col}>
                <FormInput
                    validationClick={validationClick}
                    id={id}
                    action={item.action}
                    status={item.status}
                    onGetValue={onGetValue}
                    checkVal={checkVal}
                    type={item.type}
                    valid={item.valid}
                    name={item.name}
                    placeholder={item.placeholder}
                />
            </Col>
        </Fragment>
    );
};
export default FormValidation;
