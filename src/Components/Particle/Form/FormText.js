import React, { useEffect, useState } from "react";
import { FormGroup, Input } from "reactstrap";
import styled from "styled-components";

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

const FormInput = ({
    validationClick,
    value,
    type,
    action,
    placeholder,
    className,
    id,
    name,
    character,
    rows,
    label,
    valid = "Form tidak boleh kosong",
    checkVal,
    onGetValue = () => {},
    readOnly = false,
    status,
    isValid,
    setValid,
}) => {
    const [showPassword, setShowPassword] = useState(true);

    const [isValue, setValue] = useState("");
    const _onGetValue = (e) => {
        let value = e.target.value;
        if (value === "") {
            setValid(true);
        } else {
            setValid(false);
        }
        onGetValue({
            id: id,
            name: e.target.name,
            value: value,
            status:
                character === undefined
                    ? value === ""
                        ? false
                        : true
                    : character.min.length > value.length ||
                      character.max.length < value.length
                    ? false
                    : true,
        });
        setValue(value);
    };
    const handlerShowPassword = () => {
        setShowPassword(!showPassword);
    };
    useEffect(() => {
        if (validationClick) {
            setValid(!status);
        }
    }, [validationClick, status]);
    return (
        <FormGroup>
            {label && <label>{label}</label>}
            <Style
                invalid={isValid}
                name={name}
                id={name}
                onChange={(e) => _onGetValue(e)}
                readOnly={readOnly}
                rows={rows}
                value={value}
                type={showPassword ? type : "text"}
                placeholder={placeholder}
                className={className}
            />
            {type === "password" ? (
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
                        {character === undefined
                            ? valid
                            : character.min.length > isValue.length
                            ? character.min.valid
                            : character.max.length < isValue.length
                            ? character.max.valid
                            : valid}
                    </i>
                </small>
            ) : (
                false
            )}
        </FormGroup>
    );
};
export default FormInput;
