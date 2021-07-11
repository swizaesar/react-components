import React from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import { Col, FormGroup, Row } from "reactstrap";
import "react-datepicker/dist/react-datepicker.css";
// import CustomDate from "./CustomDate";
import styled from "styled-components";

const Style = styled.div`
    .react-datepicker-wrapper {
        width: 100%;
        .react-datepicker__input-container {
            > button {
                text-align: left;
            }
        }
    }
`;
export const CustomDate = React.forwardRef((props, ref) => {
    return (
        <>
            <button
                {...props}
                ref={ref}
                className="form-control w-100"
                onClick={props.onClick}
            >
                {props.value} <i className="far fa-calendar ml-4"></i>
            </button>
        </>
    );
});
const FormDate = ({
    isStatus,
    item,
    className,
    id,
    onGetValue = () => {},
    validateForm = true,
}) => {
    const [value, setValue] = React.useState(new Date(item.value));
    const [startDate, setStartDate] = React.useState(new Date());
    const [endDate, setEndDate] = React.useState(new Date());

    const _onGetValue = (value) => {
        if (item.range) {
            onGetValue({
                id: id,
                name: item.name,
                value: {
                    start: moment(startDate).format("YYYY-MM-DD"),
                    end: moment(endDate).format("YYYY-MM-DD"),
                },
                status: true,
            });
        }
        if (!item.range) {
            onGetValue({
                id: id,
                name: item.name,
                value: moment(value).format("YYYY-MM-DD"),
                status: true,
            });
            setValue(value);
        }
    };
    const handleSetStartDate = (value) => {
        setStartDate(value);
        _onGetValue();
    };
    const handleSetEndDate = (value) => {
        setEndDate(value);
        _onGetValue();
    };
    return (
        <FormGroup>
            {item.label && !item.range && (
                <label>
                    {item.label}
                    {item.required && <span className="text-danger">*</span>}
                </label>
            )}
            <Style>
                {item.range ? (
                    <Row>
                        <Col xl="6" md="6" sm="6" xs="12">
                            {item.labelStartDate && (
                                <label
                                    htmlFor={item.id}
                                    className={item.labelClass}
                                >
                                    {item.labelStartDate}
                                    {item.required && (
                                        <span className="text-danger">*</span>
                                    )}
                                </label>
                            )}
                            <DatePicker
                                className="w-100"
                                selected={startDate}
                                onChange={(value) => handleSetStartDate(value)}
                                selectsStart
                                showMonthDropdown
                                showYearDropdown
                                adjustDateOnChange
                                dateFormat="y-MM-dd"
                                startDate={startDate}
                                endDate={endDate}
                                customInput={<CustomDate />}
                            />
                        </Col>

                        <Col xl="6" md="6" sm="6" xs="12">
                            {item.labelEndDate && (
                                <label>
                                    {" "}
                                    {item.labelEndDate}
                                    {item.required && (
                                        <span className="text-danger">*</span>
                                    )}
                                </label>
                            )}
                            <DatePicker
                                className="w-100"
                                selected={endDate}
                                showMonthDropdown
                                showYearDropdown
                                adjustDateOnChange
                                onChange={(value) => handleSetEndDate(value)}
                                selectsEnd
                                dateFormat="y-MM-dd"
                                startDate={startDate}
                                endDate={endDate}
                                minDate={startDate}
                                customInput={<CustomDate />}
                            />
                        </Col>
                    </Row>
                ) : (
                    <DatePicker
                        maxDate={item.maxDate}
                        selected={value}
                        showMonthDropdown
                        showYearDropdown
                        adjustDateOnChange
                        dateFormat="y-MM-dd"
                        onChange={(value) => _onGetValue(value)}
                        customInput={<CustomDate />}
                    />
                )}
            </Style>
        </FormGroup>
    );
};
export default FormDate;
