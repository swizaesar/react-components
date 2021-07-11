import React, { useState, useEffect } from "react";
import CurrencyInput from "react-currency-input";
import { CurrencyStyle, SelectCurrency } from "./index.style";
import { FormGroup, Input } from "reactstrap";

const FormPrice = (props) => {
    const {
        className = "",
        id,
        defaultValue = 0,
        onGetValue = () => {},
        item,
        validateForm,
    } = props;
    const [amount, setAmount] = useState(
        item.defaultValue ? item.defaultValue : defaultValue
    );
    const [suffix, setSuffix] = useState(item.suffix);
    const [isValid, setValid] = useState(false);

    const [unFormatValue, setFormatValue] = useState(0);

    const handleChange = (e, resultValue, valueFloat) => {
        e.preventDefault();

        const value = valueFloat;
        if (item.min !== undefined) {
            let error = value < item.min?.price ? false : true;

            setAmount(resultValue);
            onGetValue({
                id: id,
                name: e.target.name,
                value: value,
                status: error,
                suffix: suffix,
            });
            setValid(!error);
        }
        if (item.max !== undefined) {
            let error = value > item.max?.price ? false : true;
            setAmount(resultValue);
            onGetValue({
                id: id,
                name: e.target.name,
                value: value,
                status: error,
                suffix: suffix,
            });
            setValid(!error);
        }
        if (item.max === undefined && item.min === undefined) {
            let error = value < 1 ? false : true;
            setValid(!error);
            setAmount(resultValue);
            onGetValue({
                id: id,
                name: e.target.name,
                value: value,
                status: error,
                suffix: suffix,
            });
        }
        setFormatValue(value);
    };
    const handleChangeSuffix = (e) => {
        setSuffix(` ${e.target.value}`);
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
            <CurrencyStyle>
                {item.label && (
                    <label htmlFor={item.id} className={item.labelClass}>
                        {item.label}
                        {item.required && (
                            <span className="text-danger">*</span>
                        )}
                    </label>
                )}
                <div className="currency-row">
                    <CurrencyInput
                        name={item.name}
                        value={amount}
                        className={`form-control form-control-alternative ${className}`}
                        onChangeEvent={handleChange}
                        precision={item.precision ? item.precision : 0}
                        decimalSeparator=","
                        thousandSeparator="."
                        suffix={suffix}
                        prefix={item.currencyLogo}
                    />
                    {item.multiSuffix && (
                        <SelectCurrency>
                            <Input
                                type="select"
                                name="select"
                                id="multiSuffix"
                                onChange={handleChangeSuffix}
                            >
                                {item.multiSuffix.map((value, key) => {
                                    return (
                                        <option value={value} key={key}>
                                            {value}
                                        </option>
                                    );
                                })}
                            </Input>
                        </SelectCurrency>
                    )}
                </div>
                {isValid ? (
                    item.min && unFormatValue < item.min.price ? (
                        <small className="text-danger">
                            <i>{item.min.valid}</i>
                        </small>
                    ) : item.max && unFormatValue > item.max.price ? (
                        <small className="text-danger">
                            <i>{item.max.valid}</i>
                        </small>
                    ) : (
                        <small className="text-danger">
                            <i>{item.valid}</i>
                        </small>
                    )
                ) : (
                    false
                )}
            </CurrencyStyle>
        </FormGroup>
    );
};
export default FormPrice;
