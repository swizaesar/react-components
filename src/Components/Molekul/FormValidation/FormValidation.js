import React, { Fragment, useState } from "react";
import { Col } from "reactstrap";
import renderType from "./renderType";

const FormValidation = ({ form = [], item, validationClick, id }) => {
    const checkVal = true;

    const [isValid, setValid] = useState(false);
    const onGetValue = (param) => {
        setValid(!param.status);
    };
    return (
        <Fragment>
            <Col xl={item.col}>
                {renderType({
                    id,
                    item,
                    checkVal,
                    validationClick,
                    onGetValue,
                    isValid,
                    setValid,
                })[item.type](item.type)}
            </Col>
        </Fragment>
    );
};
export default FormValidation;
