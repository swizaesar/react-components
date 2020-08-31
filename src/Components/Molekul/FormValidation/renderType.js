import React from "react";
import FormText from "../../Particle/Form/FormText";

const renderType = ({
    id,
    item,
    validationClick,
    onGetValue = () => {},
    isValid,
    setValid,
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
    };
};
export default renderType;
