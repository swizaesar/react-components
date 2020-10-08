import React from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import { Col, FormGroup, Row } from "reactstrap";
import "react-datepicker/dist/react-datepicker.css";

const FormDate = ({
    isStatus,
    item,
    className,
    id,
    onGetValue = () => {},
    validateForm = true,
}) => {
    const [value, setValue] = React.useState(new Date());
    const [startDate, setStartDate] = React.useState(new Date());
    const [endDate, setEndDate] = React.useState(new Date());
    const CustomInput = ({ value, onClick }) => (
        <button className="form-control w-100" onClick={onClick}>
            {value} <i className="far fa-calendar ml-4"></i>
        </button>
    );
    const _onGetValue = (value) => {
        if (item.range) {
            onGetValue({
                id: id,
                name: item.name,
                value: {
                    start: moment(startDate).format("DD-MM-YYYY"),
                    end: moment(endDate).format("DD-MM-YYYY"),
                },
                status: true,
            });
        }
        if (!item.range) {
            onGetValue({
                id: id,
                name: item.name,
                value: moment(value).format("DD-MM-YYYY"),
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
            {item.label && !item.range && <label>{item.label}</label>}
            {item.range ? (
                <Row>
                    <Col xl="6" md="6" sm="6" xs="12">
                        <DatePicker
                            selected={startDate}
                            onChange={(value) => handleSetStartDate(value)}
                            selectsStart
                            dateFormat="dd-MM-y"
                            startDate={startDate}
                            endDate={endDate}
                            customInput={<CustomInput />}
                        />
                    </Col>

                    <Col xl="6" md="6" sm="6" xs="12">
                        <DatePicker
                            selected={endDate}
                            onChange={(value) => handleSetEndDate(value)}
                            selectsEnd
                            dateFormat="dd-MM-y"
                            startDate={startDate}
                            endDate={endDate}
                            minDate={startDate}
                            customInput={<CustomInput />}
                        />
                    </Col>
                </Row>
            ) : (
                <DatePicker
                    selected={value}
                    dateFormat="dd-MM-y"
                    onChange={(value) => _onGetValue(value)}
                    customInput={<CustomInput />}
                />
            )}
        </FormGroup>
    );
};
export default FormDate;
