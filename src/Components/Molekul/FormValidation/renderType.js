import React from "react";
import FormInput from "../../Particle/Form/FormText";

const renderType = ({
    id,
    item,
    checkVal,
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
                    setValid={setValid}
                    validationClick={validationClick}
                    id={id}
                    character={item.character}
                    action={item.action}
                    status={item.status}
                    onGetValue={onGetValue}
                    checkVal={checkVal}
                    type={item.type}
                    valid={item.valid}
                    name={item.name}
                    placeholder={item.placeholder}
                />
            );
        },
        textarea: () => {
            return "masuk sini";
        },
    };
};
export default renderType;
