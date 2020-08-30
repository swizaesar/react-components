import React, { Fragment, useState } from "react";
import { Col } from "reactstrap";
import renderType from "./renderType";

const FormValidation = ({ form = [], item, validationClick, id }) => {
    const checkVal = true;

    const [isValid, setValid] = useState(false);
    const onGetValue = (param) => {
        let getStatus = form[id];
        console.log(param);
        setValid(!param.status);
        // console.log("getStatus[param.name]", getStatus[param.name]);
        // getStatus[param.name] = {
        //     value: param.value,
        //     status: param.status,
        // };
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
                })[item.action](item.action)}
            </Col>
        </Fragment>
    );
};
export default FormValidation;
