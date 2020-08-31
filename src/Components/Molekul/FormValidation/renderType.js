import React from "react";
import FormText from "../../Particle/Form/FormText";

import FormEmail from "../../Particle/Form/FormEmail";

const renderType = ({
    id,
    item,
    validationClick,
    onGetValue = () => {},
    isValid,
    setValid,
    validateEmail = () => {},
}) => {
    return {
        text: () => {
            return (
                <FormText
                    isValid={isValid}
                    item={item}
                    setValid={setValid}
                    validationClick={validationClick}
                    id={id}
                    onGetValue={onGetValue}
                />
            );
        },
        textarea: () => {
            return (
                <FormText
                    isValid={isValid}
                    item={item}
                    setValid={setValid}
                    validationClick={validationClick}
                    id={id}
                    onGetValue={onGetValue}
                />
            );
        },
        email: () => {
            return (
                <FormEmail
                    validateEmail={validateEmail}
                    isValid={isValid}
                    item={item}
                    setValid={setValid}
                    validationClick={validationClick}
                    id={id}
                    onGetValue={onGetValue}
                />
            );
        },
    };
};
export default renderType;
