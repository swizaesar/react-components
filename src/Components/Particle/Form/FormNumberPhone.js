import React, { useState, useEffect } from "react";
import { FormGroup, Label } from "reactstrap";
import NumberFormat from "react-number-format";
import styled from "styled-components";
const FormStyle = styled.div`
    display: block;
    width: 100%;
    margin: 0;
    padding: 0;
    .form-control {
        /* border: 1px solid #ddd;
        box-shadow: none; */
    }
    .seclect-api {
        padding: 0;
        .react-select {
            &__control {
                height: 100%;
                border: transparent;
            }
            &__placeholder {
                color: #b3bac0;
                font-size: 0.875rem;
            }
            &__single-value {
                color: #4a4a4a;
                text-transform: lowercase;
            }
        }
    }
    .react-daterange-picker__wrapper {
        width: 100%;
        border: none;
    }
    .react-daterange-picker__inputGroup {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .react-daterange-picker__inputGroup__input {
        font-size: 0.875rem;
        font-family: "Muli", sans-serif;
        font-weight: 400;
        line-height: 1.5;
        color: #525f7f;
    }
    .react-daterange-picker__clear-button.react-daterange-picker__button {
        display: none;
    }

    .image-list {
        width: 100%;
        display: block;
        overflow: auto;
        white-space: nowrap;
        &-picture {
            width: 90px;
            height: 90px;
            border: 1px dashed #4a4a4a;
            border-radius: 10px;
            display: inline-block;
            margin-right: 10px;
            margin-bottom: 20px;
            position: relative;
            img {
                display: block;
                width: 100%;
                height: 100%;
                border-radius: 10px;
                object-fit: contain;
            }
            button {
                position: absolute;
                border-radius: 50%;
                top: 1px;
                right: 1px;
                margin-right: 0;
            }
        }
    }
`;
const FormNumberPhone = (props) => {
    const { item, id, onGetValue = () => {}, validateForm = true } = props;
    const [value, setValue] = useState("");
    const [isValid, setValid] = useState(false);

    const _onGetValue = (vals) => {
        onGetValue({
            id: id,
            name: item.name,
            value: vals.value,
            status: vals.value.length < 9 ? false : true,
        });
        setValue(value);
        setValid(vals.value.length < 1 ? true : false);
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
        <FormStyle>
            <FormGroup>
                <Label for={item.name}>
                    {item.label}
                    {item.required && <span className="text-danger">*</span>}
                </Label>
                <NumberFormat
                    id={item.name}
                    name={item.name}
                    max={13}
                    min={9}
                    className="form-control"
                    format="(####) #### #####"
                    placeholder={item.placeholder}
                    onValueChange={(vals) => {
                        _onGetValue(vals);
                    }}
                    value={item.value}
                    mask=""
                ></NumberFormat>
                {isValid ? (
                    <small className="text-danger">
                        <i>
                            {item.value.length < 9 && item.value.length > 0
                                ? "Nomor telepon tidak valid"
                                : item.valid}
                        </i>
                    </small>
                ) : (
                    false
                )}
            </FormGroup>
        </FormStyle>
    );
};

export default FormNumberPhone;
