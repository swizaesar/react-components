import React, { useEffect, useState } from "react";
import { FormGroup, Input } from "reactstrap";
import styled from "styled-components";
import { findAllByDisplayValue } from "@testing-library/react";

const Style = styled(Input)`
    background: #f9f9f9;
`;
const ButtonPassword = styled.button`
    position: absolute;
    right: 15px;
    top: 0px;
    background: transparent;
    border: none;
    color: #6c6c6c;
    padding: 7px 10px;
`;

const FormText = ({
    isStatus,
    value,
    item,
    className,
    id,
    onGetValue = () => {},
    validateForm = true,
}) => {
    const [showPassword, setShowPassword] = useState(true);
    const [isValue, setValue] = useState("");
    const [isValid, setValid] = useState(false);
    const _onGetValue = (e) => {
        let value = e.target.value;
        console.log("isStatus", isStatus);
        console.log("validationClick", isStatus);
        onGetValue({
            id: id,
            name: e.target.name,
            value: value,
            status:
                item.character === undefined
                    ? value === ""
                        ? false
                        : true
                    : item.character.min.length > value.length ||
                      item.character.max.length < value.length
                    ? false
                    : true,
        });
        setValid(!item.status);
        setValue(value);
    };
    const handlerShowPassword = () => {
        setShowPassword(!showPassword);
    };
    useEffect(() => {
        if (!validateForm) {
            setValid(!item.status);
            console.log("masuk masuk");
        }
    }, [validateForm]);
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
            {item.type === "password" ? (
                <ButtonPassword onClick={handlerShowPassword} type="button">
                    <i
                        className={`fa ${
                            !showPassword ? "fa-eye" : "fa-eye-slash"
                        }`}
                    ></i>
                </ButtonPassword>
            ) : (
                false
            )}
            {isValid ? (
                <small className="text-danger">
                    <i>
                        {item.character === undefined
                            ? item.valid
                            : item.character.min.length > isValue.length
                            ? item.character.min.valid
                            : item.character.max.length < isValue.length
                            ? item.character.max.valid
                            : item.valid}
                    </i>
                </small>
            ) : (
                false
            )}
        </FormGroup>
    );
};
export default FormText;
