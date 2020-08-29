import React, { Fragment } from "react";
import { Col } from "reactstrap";
import renderType from "./renderType";

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
                {renderType({
                    id,
                    item,
                    checkVal,
                    validationClick,
                    onGetValue,
                })[item.action](item.action)}
            </Col>
        </Fragment>
    );
};
export default FormValidation;
