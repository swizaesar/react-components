import React from "react";
import FormInput from "../../Particle/Form/FormText";

const renderType = ({
    id,
    item,
    validationClick,
    onGetValue = () => {},
    isValid,
    setValid,
}) => {
    return {
        input: () => {
            return (
                <FormInput
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
            return "masuk sini";
        },
    };
};
export default renderType;
