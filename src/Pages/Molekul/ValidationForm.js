import React, { useState } from "react";
import Form from "../../Components/Molekul/FormValidation";
import { Button } from "reactstrap";

const ValidationForm = () => {
    const [validationClick, setValidationClick] = useState(true);
    const [validateForm, setValidateForm] = useState(true);
    const [listForm, setForm] = useState([
        {
            type: "email",
            action: "email",
            name: "email",
            placeholder: "Email",
            col: 6,
            valid: "Email tidak boleh kosong",
            value: "",
            status: false,
        },
        {
            type: "text",
            action: "text",
            name: "name",
            placeholder: "Name",
            col: 6,
            valid: "Nama tidak boleh kosong",
            value: "",
            status: false,
            character: {
                min: {
                    length: 3,
                    valid: "Minimal 3 character",
                },
                max: {
                    length: 10,
                    valid: "Maximal 10 character",
                },
            },
        },
    ]);
    // const onGetValue = (param) => {
    //     let isError = false;
    //     for (let key in param) {
    //         if (!param[key].status) {
    //             isError = true;
    //         }
    //     }
    //     setValidationClick(isError);
    //     setValidateForm(false);
    //     console.log("isError", isError);
    //     if (!validationClick) {
    //         alert("form is valid, put your action endpoint is here");
    //     }
    // };
    const handlerSubmitData = () => {
        let isError = false;
        for (let key in listForm) {
            if (!listForm[key].status) {
                isError = true;
            }
        }
        setValidationClick(isError);
        setValidateForm(false);
        console.log("isError", isError);
        if (!isError) {
            alert("form is valid, put your action endpoint is here");
        }
        // onGetValue(listForm);
        // console.log("validationClick", validationClick);
    };
    return (
        <div>
            <Form
                setForm={setForm}
                validateForm={validateForm}
                validationClick={validationClick}
                form={listForm}
            />
            <Button onClick={handlerSubmitData}>check value</Button>
        </div>
    );
};
export default ValidationForm;
