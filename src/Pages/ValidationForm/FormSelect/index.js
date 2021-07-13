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
    .btn-link {
        color: ${color.primary};
        padding: 0;
        margin: 0;
        border: unset;
        text-decoration: underline;
        background: transparent;
        &:focus {
            outline: unset;
            box-shadow: unset;
        }
    }
`;
const FormSelect = () => {
    const [validationClick, setValidationClick] = React.useState(true);
    const [validateForm, setValidateForm] = React.useState(true);
    const [form, setForm] = React.useState([
        {
            type: "select",
            label: "Kategori",
            required: true,
            action: "select",
            name: "category",
            placeholder: "Kategori",
            option: [
                {
                    label: "Fashion Pria",
                    value: 1,
                },
                {
                    label: "Fashion Wanita",
                    value: 2,
                },
            ],
            col: 6,
            valid: "Harap pilih kategori",
            value: "",
            status: false,
        },
    ]);
    const [validationClickTwo, setValidationClickTwo] = React.useState(true);
    const [validateFormTwo, setValidateFormTwo] = React.useState(true);
    const [formTwo, setFormTwo] = React.useState([
        {
            type: "select",
            label: "Kategori",
            required: true,
            action: "select",
            name: "category",
            placeholder: "Kategori",
            option: [
                {
                    label: "Fashion Pria",
                    value: 1,
                },
                {
                    label: "Fashion Wanita",
                    value: 2,
                },
            ],
            isMulti: true,
            col: 6,
            valid: "Harap pilih kategori",
            value: [],
            status: false,
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
    const handleShowService = () => {
        alert("Halaman ini belum tersedia");
    };
    return (
        <Style>
            <h3 className="title">Input Select</h3>
            <div className="desc">
                <p>
                    Cara menggunakan Input Select ini cukup dengan membuat opsi
                    data form berbentuk object yang akan di letakan pada list
                    form.
                </p>
            </div>
            <div className="next-step">
                <Link to="/form/input-textarea">
                    <i className="fas fa-angle-left mr-2"></i> Kembali
                </Link>
                <Link to="/form/input-image">
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
                                            {'"select"'}
                                        </span>
                                        <span>,</span>
                                    </div>
                                    <div>
                                        <span> </span>
                                        <span> </span>
                                        <span>label: </span>
                                        <span className="code-string">
                                            {'"Kategori"'}
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
                                            {'"select"'}
                                        </span>
                                        <span>,</span>
                                    </div>
                                    <div>
                                        <span> </span>
                                        <span> </span>
                                        <span>name: </span>
                                        <span className="code-string">
                                            {'"category"'}
                                        </span>
                                        <span>,</span>
                                    </div>
                                    <div>
                                        <span> </span>
                                        <span> </span>
                                        <span>placeholder: </span>
                                        <span className="code-string">
                                            {'"Kategori"'}
                                        </span>
                                        <span>,</span>
                                    </div>
                                    <div>
                                        <span> </span>
                                        <span> </span>
                                        <span>option: </span>
                                        <span className="code-primary">
                                            {"["}
                                        </span>
                                    </div>
                                    <div>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span className="code-brace">
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
                                        <span>label: </span>
                                        <span className="code-string">
                                            {'"Fashion Pria"'}
                                        </span>
                                        <span>,</span>
                                    </div>
                                    <div>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span>value: </span>
                                        <span className="code-number">
                                            {"1"}
                                        </span>
                                        <span>,</span>
                                    </div>
                                    <div>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span className="code-brace">
                                            {"}"}
                                        </span>
                                        <span>,</span>
                                    </div>
                                    <div>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span className="code-brace">
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
                                        <span>label: </span>
                                        <span className="code-string">
                                            {'"Fashion Wanita"'}
                                        </span>
                                        <span>,</span>
                                    </div>
                                    <div>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span>value: </span>
                                        <span className="code-number">
                                            {"2"}
                                        </span>
                                    </div>
                                    <div>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span className="code-brace">
                                            {"}"}
                                        </span>
                                    </div>
                                    <div>
                                        <span> </span>
                                        <span> </span>
                                        <span className="code-primary">
                                            {"]"}
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
                                            {'"Harap pilih kategori"'}
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
            <p>
                Input Select ini juga tersedia untuk select multiple hanya
                menambahkan <code>isMulti</code>.
            </p>
            <Card className="card-code" style={{ marginBottom: 30 }}>
                <CardBody>
                    <code>
                        <pre>
                            <div>
                                <span>...</span>
                            </div>
                            <div>
                                <span>isMulti: </span>
                                <span className="code-number">true,</span>
                            </div>
                            <div>
                                <span>value: </span>
                                <span className="code-primary">[],</span>
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
            <p>
                Untuk data option yang didapat dari <code>API</code> gunakan{" "}
                <code>service</code> untuk menggantikan <code>option</code>.
            </p>
            <Card className="card-code" style={{ marginBottom: 30 }}>
                <CardBody>
                    <code>
                        <pre>
                            <div>
                                <span>...</span>
                            </div>
                            <div>
                                <span>service: </span>
                                <span className="code-brace">{"{"}</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span className="code-green">api: </span>
                                <span>service.</span>
                                <span className="code-green">categoryList</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span>group: </span>
                                <span className="code-string">"category"</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span>key: </span>
                                <span className="code-string">
                                    "categoryList"
                                </span>
                                <span>,</span>
                            </div>
                            <span className="code-brace">{"}"}</span>
                            <span>,</span>
                            <div>
                                <span>...</span>
                            </div>
                        </pre>
                    </code>
                </CardBody>
            </Card>
            <p>
                Apa itu isi dari <code>service</code>, <code>api</code>,{" "}
                <code>group</code>, dan <code>key</code>? <br />
                Klik{" "}
                <button className="btn-link" onClick={handleShowService}>
                    disini
                </button>{" "}
                untuk melihat selengkapnya.
            </p>
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
                        <code>service</code> digunakan untuk mengambil data list
                        yang tersedia di dalam <code>REST API</code> .
                    </li>
                    <li>
                        <code>name</code> digunakan untuk attribute name pada
                        element input.
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
export default FormSelect;
