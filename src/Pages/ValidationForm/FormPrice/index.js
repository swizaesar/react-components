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
const FormPrice = () => {
    const [validationClick, setValidationClick] = React.useState(true);
    const [validateForm, setValidateForm] = React.useState(true);
    const [form, setForm] = React.useState([
        {
            label: "Harga",
            required: true,
            action: "price",
            name: "price",
            currencyLogo: "Rp. ",
            col: 6,
            valid: "Harap isi form harga",
            value: 0,
            status: false,
        },
    ]);
    const [validationClickTwo, setValidationClickTwo] = React.useState(true);
    const [validateFormTwo, setValidateFormTwo] = React.useState(true);
    const [formTwo, setFormTwo] = React.useState([
        {
            label: "Keuntungan (%)",
            required: true,
            action: "price",
            name: "price",
            suffix: " %",
            col: 6,
            valid: "Keuntungan wajib disini",
            value: 0,
            status: false,
        },
    ]);
    const [validationClickThree, setValidationClickThree] = React.useState(
        true
    );
    const [validateFormThree, setValidateFormThree] = React.useState(true);
    const [formThree, setFormThree] = React.useState([
        {
            required: true,
            action: "price",
            name: "price",
            suffix: " %",
            multiSuffix: ["%", "kg", "g"],
            col: 6,
            valid: "Form wajib disini",
            value: 0,
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
    const handlerSubmitDataThree = () => {
        let isError = false;
        for (let key in formThree) {
            if (!formThree[key].status) {
                isError = true;
            }
        }
        console.log(formThree);
        setValidationClickThree(isError);
        setValidateFormThree(false);
        console.log("isError", isError);
        if (!isError) {
            alert("Valid");
        }
    };
    return (
        <Style>
            <h3 className="title">Input Harga</h3>
            <div className="desc">
                <p>
                    Cara menggunakan Input Harga ini cukup dengan membuat opsi
                    data form berbentuk object yang akan di letakan pada list
                    form.
                </p>
            </div>
            <div className="next-step">
                <Link to="/form/input-image-multiple">
                    <i className="fas fa-angle-left mr-2"></i> Kembali
                </Link>
                <Link to="/form/input-select">
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
                                        <span>label: </span>
                                        <span className="code-string">
                                            {'"Harga"'}
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
                                            {'"price"'}
                                        </span>
                                        <span>,</span>
                                    </div>
                                    <div>
                                        <span> </span>
                                        <span> </span>
                                        <span>name: </span>
                                        <span className="code-string">
                                            {'"price"'}
                                        </span>
                                        <span>,</span>
                                    </div>
                                    <div>
                                        <span> </span>
                                        <span> </span>
                                        <span>currencyLogo: </span>
                                        <span className="code-string">
                                            "Rp. "
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
                                            {'"Harap isi form harga"'}
                                        </span>
                                        <span>,</span>
                                    </div>
                                    <div>
                                        <span> </span>
                                        <span> </span>
                                        <span>value: </span>
                                        <span className="code-number">0</span>
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
                Input Harga ini juga tersedia untuk label nilai belakang dengan{" "}
                <code>currencyLogo</code> diganti dengan <code>suffix</code>.
            </p>
            <Card className="card-code" style={{ marginBottom: 30 }}>
                <CardBody>
                    <code>
                        <pre>
                            <div>
                                <span>...</span>
                            </div>
                            <div>
                                <span>suffix: </span>
                                <span className="code-string">" %"</span>
                                <span>,</span>
                                <span> </span>
                                <span className="code-command">/</span>
                                <span className="code-command">/</span>
                                <span className="code-command"> </span>
                                <span className="code-command">
                                    "kg ", "g", etc
                                </span>
                            </div>
                            <div>
                                <span>label: </span>
                                <span className="text-string">
                                    "Keuntungan (%)"
                                </span>
                            </div>
                            <div>
                                <span>valid: </span>
                                <span className="text-string">
                                    "Keuntungan wajib disini"
                                </span>
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
                Jika menggunakan <code>suffix</code> Anda bisa menyediakan lebih
                dari 1 label dengan menambahkan <code>multiSuffix</code>
            </p>
            <Card className="card-code" style={{ marginBottom: 30 }}>
                <CardBody>
                    <code>
                        <pre>
                            <div>
                                <span>...</span>
                            </div>
                            <div>
                                <span>suffix: </span>
                                <span className="code-string">" %"</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span>multiSuffix: </span>
                                <span className="code-brace">[</span>
                                <span className="code-string">"%"</span>
                                <span>, </span>
                                <span className="code-string">"kg"</span>
                                <span>, </span>
                                <span className="code-string">"g"</span>
                                <span>, </span>
                                <span className="code-brace">]</span>
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
                    setForm={setFormThree}
                    validateForm={validateFormThree}
                    validationClick={validationClickThree}
                    form={formThree}
                />
                <Button color="primary" onClick={handlerSubmitDataThree}>
                    Submit
                </Button>
            </div>
            <p>
                Untuk memberikan maximal atau minimal value gunakan{" "}
                <code>max</code> atau <code>min</code>
            </p>
            <Card className="card-code" style={{ marginBottom: 30 }}>
                <CardBody>
                    <code>
                        <pre>
                            <div>
                                <span>...</span>
                            </div>
                            <div>
                                <span>min: </span>
                                <span className="code-brace">{"{"}</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span>price: </span>
                                <span className="code-number">1000</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span>valid: </span>
                                <span className="code-string">
                                    "Minimal harga Rp. 1.000"
                                </span>
                                <span>,</span>
                            </div>
                            <div>
                                <span className="code-brace">{"}"}</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span>max: </span>
                                <span className="code-brace">{"{"}</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span>price: </span>
                                <span className="code-number">1000000</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span>valid: </span>
                                <span className="code-string">
                                    "Maximal harga Rp. 1.000.000"
                                </span>
                                <span>,</span>
                            </div>
                            <div>
                                <span className="code-brace">{"}"}</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span>...</span>
                            </div>
                        </pre>
                    </code>
                </CardBody>
            </Card>
            <div style={{ marginBottom: 10 }}>
                <h6 className="title" style={{ marginBottom: 10 }}>
                    Penjelasan
                </h6>
                <ul>
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
                        <code>currencyLogo</code> digunakan untuk nilai label
                        depan value.
                    </li>
                    <li>
                        <code>suffix</code> digunakan untuk nilai label belakang
                        value.
                    </li>
                    <li>
                        <code>name</code> digunakan untuk attribute name pada
                        element input.
                    </li>
                    <li>
                        <code>min</code> minimal value.
                    </li>
                    <li>
                        <code>max</code> maximal value.
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
                </ul>
            </div>
        </Style>
    );
};
export default FormPrice;
