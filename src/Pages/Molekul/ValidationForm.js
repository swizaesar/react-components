import React, { useState } from "react";
import Form from "../../Components/Molekul/FormValidation";
import { Button } from "reactstrap";

const ValidationForm = () => {
    const [validationClick, setValidationClick] = useState(true);
    const [validateForm, setValidateForm] = useState(true);
    const [listForm, setForm] = useState([
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
            action: "price",
            name: "price",
            placeholder: "price",
            col: 6,
            valid: "Harap isi form harga",
            value: "",
            currencyLogo: "Rp. ",
            min: {
                price: 10000,
                valid: "Field harga tidak boleh kurang dari 10.000",
            },
            status: false,
        },
        {
            type: "file",
            action: "file",
            name: "file",
            placeholder: "Upload File",
            col: 6,
            valid: "Harap masukan file",
            value: "",
            status: false,
        },
        {
            type: "image",
            action: "uploadImage",
            name: "image",
            placeholder: "Klik Untuk Masukan Gambar",
            col: 6,
            valid: "Harap masukan file",
            value: "",
            status: false,
            normalData: false,
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
