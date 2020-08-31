import React from "react";
import FormText from "../../Particle/Form/FormText";

import FormEmail from "../../Particle/Form/FormEmail";

const renderType = ({
    id,
    item,
    isStatus,
    onGetValue = () => {},
    validateEmail = () => {},
    validateForm = true,
}) => {
    return {
        text: () => {
            return (
                <FormText
                    validateForm={validateForm}
                    item={item}
                    isStatus={isStatus}
                    id={id}
                    onGetValue={onGetValue}
                />
            );
        },
        textarea: () => {
            return (
                <FormText
                    validateForm={validateForm}
                    item={item}
                    isStatus={isStatus}
                    id={id}
                    onGetValue={onGetValue}
                />
            );
        },
        email: () => {
            return (
                <FormEmail
                    validateForm={validateForm}
                    validateEmail={validateEmail}
                    item={item}
                    isStatus={isStatus}
                    id={id}
                    onGetValue={onGetValue}
                />
            );
        },
    };
};
export default renderType;
