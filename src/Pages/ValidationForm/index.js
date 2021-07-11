import React, { useState, Fragment } from "react";
import Form from "../../Components/Molekul/FormValidation";
import { Button, Card, CardBody } from "reactstrap";
import TabMenu from "../../Components/Molekul/TabMenu";
import Code from "./Code";

const ValidationForm = () => {
    const [validationClick, setValidationClick] = useState(true);
    const [validateForm, setValidateForm] = useState(true);
    const [listForm, setForm] = useState([
        {
            type: "text",
            label: "Nama",
            required: true,
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
            required: true,
            label: "Email",
            name: "email",
            placeholder: "Email",
            col: 6,
            valid: "Email tidak boleh kosong",
            value: "",
            status: false,
        },
        {
            type: "phone",
            required: true,
            action: "phone",
            name: "phone",
            label: "Nomor Telpon",
            placeholder: "Nomor Telpon",
            col: 6,
            valid: "Nomor Telpon tidak boleh kosong",
            value: "",
            status: false,
        },
        {
            action: "price",
            required: true,
            name: "price",
            label: "Harga",
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
            status: true,
        },
        {
            type: "image",
            label: "Upload Gambar",
            required: true,
            action: "uploadImage",
            name: "image",
            placeholder: "Klik Untuk Masukan Gambar",
            col: 6,
            valid: "Harap masukan gambar",
            value: "",
            status: false,
            normalData: false,
        },
        {
            type: "image",
            label: "Upload Gambar Multiple",
            action: "uploadImageMultiple",
            name: "image-multiple",
            col: 6,
            valid: "Harap masukan gambar",
            value: [],
            status: true,
            max: 3,
        },
        // {
        //     label: "Input Range",
        //     type: "range",
        //     action: "inputRange",
        //     name: "input-range",
        //     formatLabel: "kg",
        //     col: 6,
        //     isMulti: true,
        //     valid: "",
        //     value: 100,
        //     status: false,
        //     maxValue: 100,
        //     minValue: 0,
        //     haveInput: true,
        //     haveRange: true,
        // },
    ]);
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
    };
    console.log(listForm);
    return (
        <section>
            <h3 className="title">Validation Form</h3>
            <Card>
                <CardBody>
                    <TabMenu
                        color={{
                            text: "#aaa",
                            background: "#aaa",
                        }}
                        data={[
                            {
                                title: "HTML",
                                key: 1,
                                render: () => {
                                    return (
                                        <Fragment>
                                            <Form
                                                setForm={setForm}
                                                validateForm={validateForm}
                                                validationClick={
                                                    validationClick
                                                }
                                                form={listForm}
                                            />
                                            <Button onClick={handlerSubmitData}>
                                                Submit
                                            </Button>
                                        </Fragment>
                                    );
                                },
                            },
                            {
                                title: "Code",
                                key: 2,
                                render: () => {
                                    return <Code />;
                                },
                            },
                        ]}
                    />
                    {/* <div>
                        <p>Download Component Form in here</p>
                    </div>
                    <div>
                        <p>Download particle Form in here</p>
                    </div> */}
                </CardBody>
            </Card>
        </section>
    );
};
export default ValidationForm;
