import React, { useEffect, useState } from "react";
import { FormGroup, Input } from "reactstrap";
import styled from "styled-components";

const Style = styled(Input)`
    background: #f9f9f9;
`;

const FormEmail = ({
    validationClick,
    value,
    item,
    className,
    id,
    onGetValue = () => {},
    isValid,
    setValid,
    validateEmail = () => {},
}) => {
    const [isValue, setValue] = useState("");

    const _onGetValue = (e) => {
        let value = e.target.value;
        validateEmail(value);
        setValue(value);
        onGetValue({
            id: id,
            name: e.target.name,
            value: value,
            status: validateEmail(value) ? true : false,
        });
    };
    useEffect(() => {
        if (validationClick) {
            setValid(!item.status);
            console.log("masuk masuk");
        }
    }, [validationClick, item.status, setValid]);
    return (
        <FormGroup>
            {item.label && <label>{item.label}</label>}
            <Style
                invalid={isValid}
                name={item.name}
                id={item.name}
                onChange={(e) => _onGetValue(e)}
                readOnly={item.readOnly !== undefined ? false : item.readOnly}
                rows={item.rows}
                value={value}
                type={item.type}
                placeholder={item.placeholder}
                className={className}
            />
            {isValid ? (
                <small className="text-danger">
                    <i>
                        {isValue === ""
                            ? item.valid
                            : isValue !== "" && validateEmail(isValue)
                            ? false
                            : "Format email (Cth: asd@xxx.com)"}
                    </i>
                </small>
            ) : (
                false
            )}
        </FormGroup>
    );
};
export default FormEmail;
