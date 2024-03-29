import React, { useEffect, useState } from "react";
import { FormGroup, Input } from "reactstrap";
import styled from "styled-components";

const Style = styled(Input)`
    background: #ffff;
`;
const ButtonPassword = styled.button`
    position: absolute;
    right: 15px;
    top: 0;
    bottom: ${(props) => (!props.label ? "16px" : "unset")};
    background: transparent;
    border: none;
    color: #6c6c6c;
    padding: 7px 10px;
`;

const FormText = ({
    isStatus,
    value,
    item,
    id,
    onGetValue = () => {},
    validateForm = true,
}) => {
    const [showPassword, setShowPassword] = useState(true);
    const [isValue, setValue] = useState(item.value);
    const [isValid, setValid] = useState(false);
    const _onGetValue = (e) => {
        let value = e.target.value;
        onGetValue({
            id: id,
            name: e.target.name,
            value: value,
            status:
                item.required === true
                    ? item.character === undefined
                        ? value === ""
                            ? false
                            : true
                        : item.character.min.length > value.length ||
                          item.character.max.length < value.length
                        ? false
                        : true
                    : true,
        });
        setValid(!item.status);
        setValue(value);
    };
    const handlerShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const handleSetValid = () => {
        if (!validateForm) {
            setValid(!item.status);
        }
    };
    const handleSetValidCallback = React.useCallback(handleSetValid);
    useEffect(() => {
        handleSetValidCallback();
    }, [handleSetValidCallback]);
    return (
        <FormGroup className="position-relative">
            {item.label && (
                <label htmlFor={item.id} className={item.labelClass}>
                    {item.label}
                    {item.required === true ? (
                        <span className="text-danger">*</span>
                    ) : (
                        item.required === "optional" && (
                            <span style={{ color: "#aaa", fontSize: 14 }}>
                                {" "}
                                (Optional)
                            </span>
                        )
                    )}
                </label>
            )}
            {item?.character?.max?.length && (
                <div
                    style={{
                        position: "absolute",
                        right: 0,
                        top: 0,
                        color: "#aaa",
                        fontSize: 14,
                    }}
                >
                    {`${isValue === null ? 0 : isValue.length}/${
                        item?.character?.max?.length
                    }`}
                </div>
            )}
            <div className="position-relative">
                <Style
                    maxLength={item?.character?.max?.length}
                    minLength={item?.character?.min?.length}
                    label={item.label}
                    name={item.name}
                    id={item.name}
                    onChange={(e) => _onGetValue(e)}
                    readOnly={item.readOnly === true ? true : false}
                    rows={item.rows}
                    defaultValue={item.value ? item.value : value}
                    type={showPassword ? item.type : "text"}
                    placeholder={item.placeholder}
                    className={item.className}
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
            </div>
            {isValid ? (
                <small className="text-danger">
                    <i>
                        {item.character === undefined
                            ? item.valid
                            : item.character.min.length > isValue.length
                            ? isValue.length === 0
                                ? item.valid
                                : item.character.min.valid
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
