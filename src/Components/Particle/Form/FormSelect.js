/* eslint-disable */
import React, { useEffect, useState } from "react";
import { FormGroup } from "reactstrap";
import styled from "styled-components";
import Select from "react-select";
import { useStore } from "../../../Reducers";
const Style = styled(Select)`
    text-transform: capitalize;
    background: #ffff;
    width: ${(props) => props.width};
    @media (max-width: 450px) {
        font-size: 12px;
    }
`;
const DEFAULT_LIMIT_DATA = 100;
const FormSelect = ({
    value,
    item,
    className,
    id,
    onGetValue = () => {},
    validateForm = true,
}) => {
    const { service = { group: false, key: false, api: () => {} } } = item;
    const { dispatch, state } = useStore();
    const [isValid, setValid] = useState(false);
    const [selectedOption, setSelected] = useState("");
    const [data, setData] = useState([]);
    const [params, setParams] = useState({
        page: 0,
        size: DEFAULT_LIMIT_DATA,
    });
    const handleChange = (results) => {
        setSelected(results);
        _onGetValue(results);

        // checkValid(results);
    };
    const getData = () => {
        service.api({ dispatch, params });
        setParams(params);
    };
    const getDataCallBack = React.useCallback(getData, []);
    const responseGetData = (state) => {
        if (state[service.group] && state[service.group][service.key]) {
            const { data } = state[service.group][service.key];
            setData(
                data.content.map((item) => {
                    return {
                        ...{ label: "Pilih", value: 0 },
                        ...{ label: item.name, value: item.id },
                    };
                })
            );
        }
    };
    const responseGetDataCallBack = React.useCallback(responseGetData, []);
    useEffect(() => {
        getDataCallBack();
    }, [getDataCallBack]);
    useEffect(() => {
        responseGetDataCallBack(state);
    }, [state, responseGetDataCallBack]);
    const _onGetValue = (results) => {
        let valueResult = results;
        onGetValue({
            id: id,
            name: item.name,
            value: valueResult,
            status: valueResult === "" ? false : true,
        });
        setValid(!item.status);
    };
    const handleSetValid = () => {
        if (!validateForm) {
            setValid(!item.status);
        }
    };

    const getShortData = React.useCallback((data) => {
        if (data.length > 1) {
            return data
                .filter(function (obj) {
                    return obj.value === item.value;
                })
                .map(function (obj) {
                    return setSelected(obj);
                });
        }
    });
    const handleSetValidCallback = React.useCallback(handleSetValid);
    useEffect(() => {
        handleSetValidCallback();
    }, [handleSetValidCallback]);
    useEffect(() => {
        getShortData(data);
    }, [data, getShortData]);
    return (
        <FormGroup>
            {item.label && (
                <label htmlFor={item.id} className={item.labelClass}>
                    {item.label}
                    {item.required && <span className="text-danger">*</span>}
                </label>
            )}
            <Style
                width={item.width}
                placeholder={
                    item.placeholder === null ||
                    item.placeholder === undefined ||
                    !item.placeholder === null
                        ? "Pilih"
                        : item.placeholder
                }
                name={item.name}
                id={item.name}
                onChange={(e) => handleChange(e)}
                readOnly={item.readOnly !== undefined ? false : item.readOnly}
                rows={item.rows}
                defaultValue={value}
                type={item.type}
                value={selectedOption}
                classNamePrefix={className}
                options={item.service ? data : item.option}
                isMulti={item.isMulti}
                closeMenuOnSelect={item.isMulti ? false : true}
            >
                {/* <option value="0">{item.placeholder}</option>
                {item.option.map((list, key) => {
                    return (
                        <option key={key} value={list.value}>
                            {list.name}
                        </option>
                    );
                })} */}
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
