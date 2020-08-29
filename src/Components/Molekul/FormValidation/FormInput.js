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
const renderType = () => {
    return {
        input: () => {
            return "masuk sini inputnya";
        },
        textarea: () => {
            return "masuk sini textareanya";
        },
    };
};
const FormInput = ({
    validationClick,
    value,
    type,
    action,
    placeholder,
    className,
    id,
    name,
    rows,
    label,
    valid = "Form tidak boleh kosong",
    checkVal,
    onGetValue = () => {},
    readOnly = false,
    status,
}) => {
    const [isValid, setValid] = useState(false);
    const [showPassword, setShowPassword] = useState(true);
    const _onGetValue = (e) => {
        if (e.target.value === "") {
            setValid(true);
        } else {
            setValid(false);
        }
        onGetValue({
            id: id,
            name: e.target.name,
            value: e.target.value,
            status: e.target.value === "" ? false : true,
        });
    };
    const handlerShowPassword = () => {
        setShowPassword(!showPassword);
    };
    useEffect(() => {
        if (validationClick) {
            console.log("masuk sini", status);
            setValid(!status);
        }
    }, [validationClick, status]);
    console.log("action", action);
    console.log("renderType", renderType()[action]);
    return (
        <FormGroup>
            {label && <label>{label}</label>}
            <p>{renderType()[action](action)}</p>
            <Style
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
                    <i>{valid}</i>
                </small>
            ) : (
                false
            )}
        </FormGroup>
    );
};
export default FormInput;
