import React, { Fragment, useState, useEffect } from "react";
import { Col } from "reactstrap";
import renderType from "./renderType";

const FormValidation = ({ form = [], item, validationClick, id }) => {
    const checkVal = true;
    const validateEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    const [isValid, setValid] = useState(false);
    const onGetValue = (param) => {
        setValid(!param.status);
        console.log("param", param);
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
                    validateEmail,
                })[item.type](item.type)}
            </Col>
        </Fragment>
    );
};
export default FormValidation;
