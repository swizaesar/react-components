import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody } from "reactstrap";
import styled from "styled-components";
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
