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
`;
const FormText = () => {
    const [validationClick, setValidationClick] = React.useState(true);
    const [validateForm, setValidateForm] = React.useState(true);
    const [form, setForm] = React.useState([
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
        },
    ]);
    const [validationClickTwo, setValidationClickTwo] = React.useState(true);
    const [validateFormTwo, setValidateFormTwo] = React.useState(true);
    const [formTwo, setFormTwo] = React.useState([
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
            <h3 className="title">Input Text Form</h3>
            <div className="desc">
                <p>
                    Cara menggunakan Input Text Form ini cukup dengan membuat
                    opsi data form berbentuk object yang akan di letakan pada
                    list form.
                </p>
            </div>
            <div className="next-step">
                <Link to="/form/using">
                    <i className="fas fa-angle-left mr-2"></i> Kembali
                </Link>
                <Link to="/form/input-email">
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
                                            {'"text"'}
                                        </span>
                                        <span>,</span>
                                    </div>
                                    <div>
                                        <span> </span>
                                        <span> </span>
                                        <span>label: </span>
                                        <span className="code-string">
                                            {'"Nama"'}
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
                                            {'"text"'}
                                        </span>
                                        <span>,</span>
                                    </div>
                                    <div>
                                        <span> </span>
                                        <span> </span>
                                        <span>name: </span>
                                        <span className="code-string">
                                            {'"name"'}
                                        </span>
                                        <span>,</span>
                                    </div>
                                    <div>
                                        <span> </span>
                                        <span> </span>
                                        <span>placeholder: </span>
                                        <span className="code-string">
                                            {'"Name"'}
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
                                            {'"Nama tidak boleh kosong"'}
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
                Anda bisa merubah <code>type</code> menjadi <code>number</code>{" "}
                untuk input tipe number.
            </p>
            <p>
                Anda juga bisa menambahkan minimal atau maximal karakter input
                beserta text validasinya
            </p>
            <Card className="card-code" style={{ marginBottom: 30 }}>
                <CardBody>
                    <code>
                        <pre>
                            <div>
                                <span>character: </span>
                                <span className="code-brace">{"{"}</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span>min: </span>
                                <span className="code-primary">{"{"}</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span>length: </span>
                                <span className="code-number">3</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span>valid: </span>
                                <span className="code-string">
                                    {'"Minimal 3 character"'}
                                </span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span className="code-primary">{"}"}</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span>max: </span>
                                <span className="code-primary">{"{"}</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span>length: </span>
                                <span className="code-number">10</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span>valid: </span>
                                <span className="code-string">
                                    {'"Maximal 10 character"'}
                                </span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span className="code-primary">{"}"}</span>
                                <span>,</span>
                            </div>
                            <span className="code-brace">{"}"}</span>
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
                        <code>character</code> memberikan ketentuan dari limit
                        text form value tersebut.
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
export default FormText;
