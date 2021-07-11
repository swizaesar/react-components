import React, { useState, Fragment } from "react";
import Form from "../../../Components/Molekul/FormValidation";
import { Card, CardBody } from "reactstrap";
import TabMenu from "../../../Components/Molekul/TabMenu";
import Code from "./Code";
import Button from "../../../Components/Particle/Button";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { color } from "../../../Utils/Variable";
const Style = styled.section`
    .title {
        margin-bottom: 20px;
    }
    .desc {
        margin-bottom: 30px;
        p {
            margin-bottom: 0;
            line-height: 1.8;
        }
    }
    .next-step {
        text-align: right;
        margin-bottom: 40px;
        a {
            color: #fff;
            font-weight: bold;
            background: ${color.primary};
            padding: 10px;
            border-radius: 5px;
        }
    }
    > .card {
        border-color: #ddd;
        background: #ddd;
    }
    .card-code {
        background: #282a2d;
        border-color: #282a2d;
    }
`;
const Using = () => {
    const [validationClick, setValidationClick] = useState(true);
    const [validateForm, setValidateForm] = useState(true);
    const [listForm, setForm] = useState([
        {
            type: "image",
            label: "Upload Gambar",
            required: true,
            action: "uploadImage",
            name: "image",
            placeholder: "Klik Untuk Masukan Gambar",
            col: 12,
            valid: "Harap masukan gambar",
            value: "",
            status: false,
            normalData: false,
        },
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
            type: "image",
            required: true,
            label: "Upload Gambar Multiple",
            action: "uploadImageMultiple",
            name: "image-multiple",
            col: 6,
            valid: "Harap masukan gambar",
            value: [],
            status: false,
            max: 3,
        },
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
        <Style>
            <h3 className="title">Validation Form</h3>
            <div className="desc">
                <p>
                    Validasi form input, form pada form input ini menyediakan
                    berbagai macam bentuk form beserta validasinya.
                </p>
                <p>
                    Cara menggunakan form validasi ini cukup dengan membuat data
                    form berbentuk array.
                </p>
            </div>
            <div className="next-step">
                <Link to="/form/input-text">
                    Lanjut <i className="fas fa-angle-right ml-2"></i>
                </Link>
            </div>
            <Card style={{ marginBottom: 30 }}>
                <CardBody>
                    <h5>Contoh</h5>
                    <TabMenu
                        color={{
                            text: "#000",
                            activeText: color.primary,
                            background: "transparent",
                            activeBackground: "transparent",
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
                                            <Button
                                                color="primary"
                                                onClick={handlerSubmitData}
                                            >
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
                </CardBody>
            </Card>
            <h5 className="title">Penjelasan</h5>
            <div style={{ marginBottom: 20 }}>
                <h6>List Form</h6>
                <div style={{ marginBottom: 10 }}>
                    <p>
                        <code>listForm</code> ini adalah nilai default dari
                        form-form yang di butuhkan, Anda bisa melihat{" "}
                        <b>Contoh</b> di atas.
                        <br /> Anda bisa mengatur tipe form apa saja yang Anda
                        butuhkan, lalu letakan <code>
                            listform
                        </code> beserta <code>setForm</code> ke dalam komponen{" "}
                        <code>Form</code>
                    </p>
                    <div>
                        <Card className="card-code">
                            <CardBody>
                                <code>
                                    <pre>
                                        <div>
                                            <span> </span>
                                            <span> </span>
                                            <span>{"<"}</span>
                                            <span className="code-primary">
                                                <i>Form</i>
                                            </span>
                                            <div>
                                                <span> </span>
                                                <span> </span>
                                                <span> </span>
                                                <span className="code-green">
                                                    setForm
                                                </span>
                                                <span className="code-red">
                                                    =
                                                </span>
                                                <span className="code-brace">
                                                    {"{"}
                                                </span>
                                                <span className="code-green">
                                                    setForm
                                                </span>
                                                <span className="code-brace">
                                                    {"}"}
                                                </span>
                                            </div>
                                            <div>
                                                <span> </span>
                                                <span> </span>
                                                <span> </span>
                                                <span className="code-green">
                                                    form
                                                </span>
                                                <span className="code-red">
                                                    =
                                                </span>
                                                <span className="code-brace">
                                                    {"{"}
                                                </span>
                                                <span className="code-green">
                                                    listForm
                                                </span>
                                                <span className="code-brace">
                                                    {"}"}
                                                </span>
                                            </div>
                                            <span> </span>
                                            <span>{"/>"}</span>
                                        </div>
                                    </pre>
                                </code>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
            <div style={{ marginBottom: 20 }}>
                <h6>ValidationClick dan ValidateForm</h6>
                <div style={{ marginBottom: 10 }}>
                    <p>
                        <code>ValidationClick</code> ini berfungsi sebagai
                        kemunculan text alert form pada form yang masih kosong,
                        text alert ini akan muncul jika kita klik submit form,
                        sedangkan <code>Validation</code> akan muncul ketika
                        kita menghapus value input tersebut.
                        <br />
                        Langkah selanjutnya membuat statement{" "}
                        <code>ValidationClick</code> dan{" "}
                        <code>ValidateForm</code> :
                    </p>
                    <div>
                        <Card className="card-code">
                            <CardBody>
                                <code>
                                    <pre>
                                        <div>
                                            <span> </span>
                                            <span> </span>
                                            <span className="code-primary">
                                                <i>const</i>{" "}
                                            </span>
                                            <span className="code-brace">
                                                {"["}
                                            </span>
                                            <span>validationClick, </span>
                                            <span className="code-green">
                                                setValidationClick
                                            </span>
                                            <span className="code-brace">
                                                {"]"}{" "}
                                            </span>
                                            <span className="code-red">= </span>
                                            <span className="code-green">
                                                useState
                                            </span>
                                            <span className="code-brace">
                                                (
                                            </span>
                                            <span className="code-number">
                                                true
                                            </span>
                                            <span className="code-brace">
                                                )
                                            </span>
                                        </div>
                                        <div>
                                            <span> </span>
                                            <span> </span>
                                            <span className="code-primary">
                                                <i>const</i>{" "}
                                            </span>
                                            <span className="code-brace">
                                                {"["}
                                            </span>
                                            <span>validateForm, </span>
                                            <span className="code-green">
                                                setValidateForm
                                            </span>
                                            <span className="code-brace">
                                                {"]"}{" "}
                                            </span>
                                            <span className="code-red">= </span>
                                            <span className="code-green">
                                                useState
                                            </span>
                                            <span className="code-brace">
                                                (
                                            </span>
                                            <span className="code-number">
                                                true
                                            </span>
                                            <span className="code-brace">
                                                )
                                            </span>
                                        </div>
                                    </pre>
                                </code>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <div style={{ marginBottom: 10 }}>
                    <p>
                        Kemudian letakan (passing) <code>validationClick</code>{" "}
                        dan <code>validateForm</code> ke dalam komponen{" "}
                        <code>Form</code> (komponen validasi form) :
                    </p>
                    <div>
                        <Card className="card-code">
                            <CardBody>
                                <code>
                                    <pre>
                                        <div>
                                            <span> </span>
                                            <span> </span>
                                            <span>{"<"}</span>
                                            <span className="code-primary">
                                                <i>Form</i>
                                            </span>
                                            <div>
                                                <span> </span>
                                                <span> </span>
                                                <span> </span>
                                                <span className="code-green">
                                                    setForm
                                                </span>
                                                <span className="code-red">
                                                    =
                                                </span>
                                                <span className="code-brace">
                                                    {"{"}
                                                </span>
                                                <span className="code-green">
                                                    setForm
                                                </span>
                                                <span className="code-brace">
                                                    {"}"}
                                                </span>
                                            </div>
                                            <div>
                                                <span> </span>
                                                <span> </span>
                                                <span> </span>
                                                <span className="code-green">
                                                    validateForm
                                                </span>
                                                <span className="code-red">
                                                    =
                                                </span>
                                                <span className="code-brace">
                                                    {"{"}
                                                </span>
                                                <span className="code-green">
                                                    validateForm
                                                </span>
                                                <span className="code-brace">
                                                    {"}"}
                                                </span>
                                            </div>
                                            <div>
                                                <span> </span>
                                                <span> </span>
                                                <span> </span>
                                                <span className="code-green">
                                                    validationClick
                                                </span>
                                                <span className="code-red">
                                                    =
                                                </span>
                                                <span className="code-brace">
                                                    {"{"}
                                                </span>
                                                <span className="code-green">
                                                    validationClick
                                                </span>
                                                <span className="code-brace">
                                                    {"}"}
                                                </span>
                                            </div>
                                            <div>
                                                <span> </span>
                                                <span> </span>
                                                <span> </span>
                                                <span className="code-green">
                                                    form
                                                </span>
                                                <span className="code-red">
                                                    =
                                                </span>
                                                <span className="code-brace">
                                                    {"{"}
                                                </span>
                                                <span className="code-green">
                                                    listForm
                                                </span>
                                                <span className="code-brace">
                                                    {"}"}
                                                </span>
                                            </div>
                                            <span> </span>
                                            <span>{"/>"}</span>
                                        </div>
                                    </pre>
                                </code>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
            <div style={{ marginBottom: 20 }}>
                <h6>Fungsi Submit Data</h6>
                <div style={{ marginBottom: 10 }}>
                    <p>
                        Langkah terakhir yaitu pembuatan <code>function</code>{" "}
                        endpoint. Buatlah element <code>button</code> submit
                        beserta fungsi dari button tersebut.
                    </p>
                    <div>
                        <Card
                            className="card-code"
                            style={{ marginBottom: 10 }}
                        >
                            <CardBody>
                                <code>
                                    <pre>
                                        <div>
                                            <span className="code-primary">
                                                <i>const </i>
                                            </span>
                                            <span className="code-green">
                                                handlerSubmitData{" "}
                                            </span>
                                            <span className="code-red">= </span>
                                            <span className="code-brace">
                                                (){" "}
                                            </span>
                                            <span className="code-primary">
                                                {"=>"}{" "}
                                            </span>
                                            <span className="code-brace">
                                                {"{"}
                                            </span>
                                        </div>
                                        <div>
                                            <span> </span>
                                            <span> </span>
                                            <span className="code-primary">
                                                <i>let </i>
                                            </span>
                                            <span>isError </span>
                                            <span className="code-red">= </span>
                                            <span className="code-number">
                                                false
                                            </span>
                                            <span>;</span>
                                        </div>
                                        <div>
                                            <span> </span>
                                            <span> </span>
                                            <span className="code-red">
                                                for{" "}
                                            </span>
                                            <span className="code-primary">
                                                (
                                            </span>
                                            <span className="code-primary">
                                                let{" "}
                                            </span>
                                            <span>key </span>
                                            <span className="code-red">
                                                in{" "}
                                            </span>
                                            <span>listForm</span>
                                            <span className="code-primary">
                                                ){" "}
                                            </span>
                                            <span className="code-primary">
                                                {"{"}
                                            </span>
                                        </div>
                                        <div>
                                            <span> </span>
                                            <span> </span>
                                            <span> </span>
                                            <span> </span>
                                            <span className="code-red">
                                                if{" "}
                                            </span>
                                            <span className="code-yellow">
                                                (
                                            </span>
                                            <span className="code-red">!</span>
                                            <span>listForm</span>
                                            <span className="code-brace">
                                                {"["}
                                            </span>
                                            <span>key</span>
                                            <span className="code-brace">
                                                {"]"}
                                            </span>
                                            <span>.status</span>
                                            <span className="code-yellow">
                                                ){" "}
                                            </span>
                                            <span className="code-yellow">
                                                {"{"}
                                            </span>
                                        </div>
                                        <div>
                                            <span> </span>
                                            <span> </span>
                                            <span> </span>
                                            <span> </span>
                                            <span> </span>
                                            <span> </span>
                                            <span>isError </span>
                                            <span className="code-red">= </span>
                                            <span className="code-number">
                                                true
                                            </span>
                                            <span>;</span>
                                        </div>
                                        <div>
                                            <span> </span>
                                            <span> </span>
                                            <span> </span>
                                            <span> </span>
                                            <span className="code-yellow">
                                                {"}"}
                                            </span>
                                        </div>
                                        <div>
                                            <span> </span>
                                            <span> </span>
                                            <span className="code-primary">
                                                {"}"}
                                            </span>
                                        </div>
                                        <div>
                                            <span> </span>
                                            <span> </span>
                                            <span className="code-green">
                                                setValidationClick
                                            </span>
                                            <span className="code-primary">
                                                (
                                            </span>
                                            <span>isError</span>
                                            <span className="code-primary">
                                                )
                                            </span>
                                            <span>;</span>
                                        </div>
                                        <div>
                                            <span> </span>
                                            <span> </span>
                                            <span className="code-green">
                                                setValidateForm
                                            </span>
                                            <span className="code-primary">
                                                (
                                            </span>
                                            <span className="code-number">
                                                false
                                            </span>
                                            <span className="code-primary">
                                                )
                                            </span>
                                            <span>;</span>
                                        </div>
                                        <div>
                                            <span> </span>
                                            <span> </span>
                                            <span className="code-red">
                                                if{" "}
                                            </span>
                                            <span className="code-primary">
                                                (
                                            </span>
                                            <span className="code-red">!</span>
                                            <span>isError</span>
                                            <span className="code-primary">
                                                ){" "}
                                            </span>
                                            <span className="code-primary">
                                                {"{"}
                                            </span>
                                        </div>
                                        <div>
                                            <span> </span>
                                            <span> </span>
                                            <span> </span>
                                            <span> </span>
                                            <span className="code-primary">
                                                alert
                                            </span>
                                            <span className="code-yellow">
                                                (
                                            </span>
                                            <span className="code-string">
                                                {
                                                    '"form is valid, put your action endpoint is here"'
                                                }
                                            </span>
                                            <span className="code-yellow">
                                                )
                                            </span>
                                            <span>;</span>
                                        </div>
                                        <div>
                                            <span> </span>
                                            <span> </span>
                                            <span className="code-primary">
                                                {"}"}
                                            </span>
                                        </div>

                                        <div>
                                            <span className="code-brace">
                                                {"}"}
                                            </span>
                                        </div>
                                    </pre>
                                </code>
                            </CardBody>
                        </Card>
                        <p>
                            Validasi ini melihat semua <code>status</code> dari{" "}
                            <code>listForm</code>, jika semua status adalah{" "}
                            <code>false</code>, akan muncul text alert dari form
                            yang belum di isi (kosong), dan jika status from
                            semuanya <code>true</code>, akan muncul{" "}
                            <code>alert</code>.
                            <br />
                            Anda bisa melihat nilai dari semua{" "}
                            <code>listForm</code> dengan cara{" "}
                            <code>console.log(listForm)</code> pada fungsi
                            submit data.
                        </p>
                    </div>
                </div>
            </div>
        </Style>
    );
};
export default Using;
