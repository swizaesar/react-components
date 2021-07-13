import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody } from "reactstrap";
import styled from "styled-components";
import Form from "../../../Components/Molekul/FormValidation";
import Button from "../../../Components/Particle/Button";
import { color } from "../../../Utils/VariableName";
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
    .example-form {
        margin: 30px 0;
    }
    .next-step {
        display: flex;
        justify-content: space-between;
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
    .card-note {
        padding: 15px 20px;
        margin-bottom: 30px;
        background: #ffffbb;
        border-radius: 5px;
    }
`;
const FormImage = () => {
    const [validationClick, setValidationClick] = React.useState(true);
    const [validateForm, setValidateForm] = React.useState(true);
    const [form, setForm] = React.useState([
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
            heightStyle: "300px",
        },
    ]);
    const [validationClickTwo, setValidationClickTwo] = React.useState(true);
    const [validateFormTwo, setValidateFormTwo] = React.useState(true);
    const [formTwo, setFormTwo] = React.useState([
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
            heightStyle: "200px",
            widthStyle: "200px",
            avatar: true,
        },
    ]);
    const handlerSubmitData = () => {
        let isError = false;
        for (let key in form) {
            if (!form[key].status) {
                isError = true;
            }
        }
        console.log(form);
        setValidationClick(isError);
        setValidateForm(false);
        console.log("isError", isError);
        if (!isError) {
            alert("Valid");
        }
    };
    const handlerSubmitDataTwo = () => {
        let isError = false;
        for (let key in formTwo) {
            if (!formTwo[key].status) {
                isError = true;
            }
        }
        console.log(formTwo);
        setValidationClickTwo(isError);
        setValidateFormTwo(false);
        console.log("isError", isError);
        if (!isError) {
            alert("Valid");
        }
    };
    return (
        <Style>
            <h3 className="title">Input Image</h3>
            <div className="desc">
                <p>
                    Cara menggunakan Input Image ini cukup dengan membuat opsi
                    data form berbentuk object yang akan di letakan pada list
                    form.
                </p>
            </div>
            <div className="next-step">
                <Link to="/form/input-select">
                    <i className="fas fa-angle-left mr-2"></i> Kembali
                </Link>
                <Link to="/form/input-image-multiple">
                    Lanjut <i className="fas fa-angle-right ml-2"></i>
                </Link>
            </div>
            <div className="example-form">
                <Form
                    setForm={setForm}
                    validateForm={validateForm}
                    validationClick={validationClick}
                    form={form}
                />
                <Button color="primary" onClick={handlerSubmitData}>
                    Submit
                </Button>
            </div>
            <Card style={{ marginBottom: 10 }}>
                <CardBody>
                    <h5>Contoh</h5>
                    <Card className="card-code">
                        <CardBody>
                            <code>
                                <pre>
                                    <div>
                                        <span className="code-yellow">
                                            {"{"}{" "}
                                        </span>
                                    </div>

                                    <div>
                                        <span> </span>
                                        <span> </span>
                                        <span>type: </span>
                                        <span className="code-string">
                                            {'"image"'}
                                        </span>
                                        <span>,</span>
                                    </div>
                                    <div>
                                        <span> </span>
                                        <span> </span>
                                        <span>label: </span>
                                        <span className="code-string">
                                            {'"Upload Gambar"'}
                                        </span>
                                        <span>,</span>
                                    </div>
                                    <div>
                                        <span> </span>
                                        <span> </span>
                                        <span>required: </span>
                                        <span className="code-brace">true</span>
                                        <span>,</span>
                                    </div>
                                    <div>
                                        <span> </span>
                                        <span> </span>
                                        <span>action: </span>
                                        <span className="code-string">
                                            {'"uploadImage"'}
                                        </span>
                                        <span>,</span>
                                    </div>
                                    <div>
                                        <span> </span>
                                        <span> </span>
                                        <span>heightStyle: </span>
                                        <span className="code-string">
                                            {'"300px"'}
                                        </span>
                                        <span>,</span>
                                    </div>
                                    <div>
                                        <span> </span>
                                        <span> </span>
                                        <span>name: </span>
                                        <span className="code-string">
                                            {'"image"'}
                                        </span>
                                        <span>,</span>
                                    </div>
                                    <div>
                                        <span> </span>
                                        <span> </span>
                                        <span>placeholder: </span>
                                        <span className="code-string">
                                            {'"Klik Untuk Masukan Gambar"'}
                                        </span>
                                        <span>,</span>
                                    </div>
                                    <div>
                                        <span> </span>
                                        <span> </span>
                                        <span>col: </span>
                                        <span className="code-number">
                                            {"6"}
                                        </span>
                                        <span>,</span>
                                    </div>
                                    <div>
                                        <span> </span>
                                        <span> </span>
                                        <span>valid: </span>
                                        <span className="code-string">
                                            {'"Harap masukan gambar"'}
                                        </span>
                                        <span>,</span>
                                    </div>
                                    <div>
                                        <span> </span>
                                        <span> </span>
                                        <span>value: </span>
                                        <span className="code-string">
                                            {'""'}
                                        </span>
                                        <span>,</span>
                                    </div>
                                    <div>
                                        <span> </span>
                                        <span> </span>
                                        <span>status: </span>
                                        <span className="code-number">
                                            {"false"}
                                        </span>
                                        <span>,</span>
                                    </div>
                                    <div>
                                        <span className="code-yellow">
                                            {"}"}
                                        </span>
                                    </div>
                                </pre>
                            </code>
                        </CardBody>
                    </Card>
                </CardBody>
            </Card>
            <div className="card-note">
                <div>
                    <span className="text-danger">Note</span> :{" "}
                    <i>
                        value pada image berbentuk data base64, jika ingin
                        mengubah nilai value berbentuk object tambahkan{" "}
                        <code>normalData</code>.
                    </i>
                </div>
            </div>
            <Card className="card-code" style={{ marginBottom: 30 }}>
                <CardBody>
                    <code>
                        <pre>
                            <div>
                                <span>...</span>
                            </div>
                            <div>
                                <span>normalData: </span>
                                <span className="code-number">true</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span>...</span>
                            </div>
                        </pre>
                    </code>
                </CardBody>
            </Card>
            <p>
                Untuk merubah tampilan image menjadi circle, tambahkan{" "}
                <code>avatar</code>
            </p>
            <Card className="card-code" style={{ marginBottom: 30 }}>
                <CardBody>
                    <code>
                        <pre>
                            <div>
                                <span>...</span>
                            </div>
                            <div>
                                <span>avatar: </span>
                                <span className="code-number">true</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span>heightStyle: </span>
                                <span className="code-string">"200px"</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span>widthStyle: </span>
                                <span className="code-string">"200px"</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span>...</span>
                            </div>
                        </pre>
                    </code>
                </CardBody>
            </Card>
            <div className="example-form">
                <Form
                    setForm={setFormTwo}
                    validateForm={validateFormTwo}
                    validationClick={validationClickTwo}
                    form={formTwo}
                />
                <Button color="primary" onClick={handlerSubmitDataTwo}>
                    Submit
                </Button>
            </div>
            <div style={{ marginBottom: 10 }}>
                <h6 className="title" style={{ marginBottom: 10 }}>
                    Penjelasan
                </h6>
                <ul>
                    <li>
                        <code>type</code> digunakan untuk attribute type pada
                        element input.
                    </li>
                    <li>
                        <code>label</code> digunakan untuk memberikan label pada
                        input element.
                    </li>
                    <li>
                        <code>required</code> digunakan untuk memberikan
                        kewajiban (status) untuk mengisi form tersebut (
                        <code>true</code> / <code>false</code>).
                    </li>
                    <li>
                        <code>heightStyle</code> digunakan untuk form tinggi
                        gambar.
                    </li>
                    <li>
                        <code>widthStyle</code> digunakan untuk form lebar
                        gambar.
                    </li>
                    <li>
                        <code>name</code> digunakan untuk attribute name pada
                        element input.
                    </li>
                    <li>
                        <code>normalData</code> digunakan untuk mengubah nulai
                        value menjadi object (<code>true</code> /{" "}
                        <code>false</code>).
                    </li>
                    <li>
                        <code>action</code> digunakan untuk membaca aksi dari
                        form tersebut.
                    </li>
                    <li>
                        <code>col</code> digunakan untuk lebar colum form input.
                        <Card
                            className="card-code"
                            style={{ marginTop: 5, marginBottom: 5 }}
                        >
                            <CardBody>
                                <code>
                                    <pre>
                                        <div>
                                            <span>col: </span>
                                            <span className="code-brace">
                                                {"{"}
                                            </span>
                                        </div>
                                        <div>
                                            <span> </span>
                                            <span> </span>
                                            <span>xl: </span>
                                            <span className="code-number">
                                                6,
                                            </span>
                                        </div>
                                        <div>
                                            <span> </span>
                                            <span> </span>
                                            <span>lg: </span>
                                            <span className="code-number">
                                                6,
                                            </span>
                                        </div>
                                        <div>
                                            <span> </span>
                                            <span> </span>
                                            <span>md: </span>
                                            <span className="code-number">
                                                6,
                                            </span>
                                        </div>
                                        <div>
                                            <span> </span>
                                            <span> </span>
                                            <span>sm: </span>
                                            <span className="code-number">
                                                6,
                                            </span>
                                        </div>
                                        <div>
                                            <span> </span>
                                            <span> </span>
                                            <span>xs: </span>
                                            <span className="code-number">
                                                6,
                                            </span>
                                        </div>
                                        <span className="code-brace">
                                            {"{"}
                                        </span>
                                    </pre>
                                </code>
                            </CardBody>
                        </Card>
                    </li>
                    <li>
                        <code>valid</code> digunakan untuk text invalid pada
                        form tersebut.
                    </li>
                    <li>
                        <code>value</code> value dari form input.
                    </li>
                    <li>
                        <code>status</code> untuk memberikan default status form
                        tersebut.
                    </li>
                    <li>
                        <code>placeholder</code> tau lah ya~~.
                    </li>
                </ul>
            </div>
        </Style>
    );
};
export default FormImage;
