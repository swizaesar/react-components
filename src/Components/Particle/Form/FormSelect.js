import React, { useEffect, useState } from "react";
import { FormGroup, Input } from "reactstrap";
import styled from "styled-components";

const Style = styled(Input)`
    background: #ffff;
`;

const FormSelect = ({
    value,
    item,
    className,
    id,
    onGetValue = () => {},
    validateForm = true,
}) => {
    const [isValid, setValid] = useState(false);
    const _onGetValue = (e) => {
        let value = e.target.value;
        onGetValue({
            id: id,
            name: e.target.name,
            value: value,
            status: true,
        });
        setValid(!item.status);
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
        <FormGroup>
            {item.label && <label>{item.label}</label>}
            <Style
                name={item.name}
                id={item.name}
                onChange={(e) => _onGetValue(e)}
                readOnly={item.readOnly !== undefined ? false : item.readOnly}
                rows={item.rows}
                defaultValue={value}
                type={item.type}
                placeholder={item.placeholder}
                className={className}
            >
                {item.option.map((list, key) => {
                    return (
                        <option key={key} value={list.value}>
                            {list.name}
                        </option>
                    );
                })}
            </Style>
            {isValid ? (
                <small className="text-danger">
                    <i>{item.valid}</i>
                </small>
            ) : (
                false
            )}
        </FormGroup>
    );
};
export default FormSelect;
