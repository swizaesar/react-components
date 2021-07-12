import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Table } from "reactstrap";
import styled from "styled-components";
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
const FormPassword = () => {
    return (
        <Style>
            <h3 className="title">Input FormPassword</h3>
            <div className="desc">
                <p>
                    Cara menggunakan Input FormPassword ini cukup dengan membuat
                    opsi data form berbentuk object yang akan di letakan pada
                    list form.
                </p>
            </div>
            <div className="next-step">
                <Link to="/form/input-phone">
                    <i className="fas fa-angle-left mr-2"></i> Kembali
                </Link>
                <Link to="/form/input-textarea">
                    Lanjut <i className="fas fa-angle-right ml-2"></i>
                </Link>
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
                                            {'"Password"'}
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
                                            {'"password"'}
                                        </span>
                                        <span>,</span>
                                    </div>
                                    <div>
                                        <span> </span>
                                        <span> </span>
                                        <span>name: </span>
                                        <span className="code-string">
                                            {'"password"'}
                                        </span>
                                        <span>,</span>
                                    </div>
                                    <div>
                                        <span> </span>
                                        <span> </span>
                                        <span>placeholder: </span>
                                        <span className="code-string">
                                            {'"password"'}
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
                                            {'"Password tidak boleh kosong"'}
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
                Anda juga bisa menambahkan untuk konfirmasi password beserta
                label / placeholder dengan cara mengganti <code>action</code>{" "}
                menjadi <i>confirmPassword</i>, juga bisa mengatur tampilan tata
                letak form (<code>inline</code> / <code>block</code>) dengan
                cara menambahkan <code>block</code> di dalamnya.
            </p>
            <Card className="card-code" style={{ marginBottom: 30 }}>
                <CardBody>
                    <code>
                        <pre>
                            <div>
                                <span>...</span>
                            </div>
                            <div>
                                <span>action: </span>
                                <span className="code-string">
                                    "confirmPassword",
                                </span>
                            </div>
                            <div>
                                <span>placeholder: </span>
                                <span className="code-string">"Password",</span>
                            </div>
                            <div>
                                <span>placeholder2: </span>
                                <span className="code-string">
                                    "Konfirmasi Password",
                                </span>
                            </div>
                            <div>
                                <span>label: </span>
                                <span className="code-string">"Password",</span>
                            </div>
                            <div>
                                <span>label2: </span>
                                <span className="code-string">
                                    "Konfirmasi Password",
                                </span>
                            </div>
                            <div>
                                <span>block: </span>
                                <span className="code-number">true,</span>
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
                        <code>text</code> digunakan untuk attribute type pada
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
                        <code>block</code> digunakan untuk mengatur tata letak
                        input password (<code>inline</code> / <code>block</code>
                        ) khusus untuk <code>action</code>{" "}
                        <i>confirmPassword</i>.
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
        // required: true,
        // action: "text",
        // name: "name",
        // placeholder: "Name",
        // col: 6,
        // valid: "Nama tidak boleh kosong",
        // value: "",
        // status: false,
    );
};
export default FormPassword;
