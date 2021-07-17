import React from "react";
import { Card, CardBody } from "reactstrap";
import styled from "styled-components";
import { formatMoney, percentage } from "../../Utils/PriceConverter";
import { color } from "../../Utils/VariableName";
const Style = styled.div`
    .title {
        margin-bottom: 30px;
    }
    .example-buttons {
        margin: 30px 0;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
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
        color: ${() => {
            return color.primary;
        }};
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
const FormatMoney = () => {
    return (
        <Style>
            <h3 className="title">Format Number</h3>
            <p>Format Number, ini untuk converter number format</p>
            <h4>{formatMoney({ amount: 10000, currency: "Rp " })}</h4>
            <Card style={{ marginBottom: 10 }}>
                <CardBody>
                    <h5>Contoh</h5>
                    <Card className="card-code">
                        <CardBody>
                            <code>
                                <pre>
                                    <div>
                                        <span className="code-red">
                                            import{" "}
                                        </span>
                                        <span className="code-yellow">
                                            {"{"}{" "}
                                        </span>
                                        <span>formatMoney </span>
                                        <span className="code-yellow">
                                            {"}"}{" "}
                                        </span>
                                        <span className="code-red">from </span>
                                        <span className="code-string">
                                            {
                                                "'../../Components/Utils/PriceConverter'"
                                            }
                                        </span>
                                        <span>;</span>
                                    </div>
                                    <div>
                                        <span>...</span>
                                    </div>
                                    <div>
                                        <span>{"<"}</span>
                                        <span className="code-red">h4</span>
                                        <span>{">"}</span>
                                        <span className="code-yellow">
                                            {"{"}
                                        </span>
                                        <span className="code-green">
                                            formatMoney
                                        </span>
                                        <span className="code-number">(</span>
                                        <span className="code-primary">
                                            {"{"}
                                        </span>
                                        <span> </span>
                                        <span>amount: </span>
                                        <span className="code-number">
                                            10000
                                        </span>
                                        <span>,</span>
                                        <span> </span>
                                        <span>currency: </span>
                                        <span className="code-string">
                                            "Rp "
                                        </span>
                                        <span> </span>
                                        <span className="code-primary">
                                            {"}"}
                                        </span>
                                        <span className="code-number">)</span>
                                        <span className="code-yellow">
                                            {"}"}
                                        </span>
                                        <span>{"</"}</span>
                                        <span className="code-red">h4</span>
                                        <span>{">"}</span>
                                    </div>
                                    <div>
                                        <span>...</span>
                                    </div>
                                </pre>
                            </code>
                        </CardBody>
                    </Card>
                </CardBody>
            </Card>
            <p>
                Adapun konferter untuk persen tau lainnya, dengan menggunakan{" "}
                <code>percentage</code>
            </p>
            <h4>{percentage({ value: 19.5, suffix: "%" })}</h4>
            <Card style={{ marginBottom: 30 }}>
                <CardBody>
                    <h5>Contoh</h5>
                    <Card className="card-code">
                        <CardBody>
                            <code>
                                <pre>
                                    <div>
                                        <span className="code-red">
                                            import{" "}
                                        </span>
                                        <span className="code-yellow">
                                            {"{"}{" "}
                                        </span>
                                        <span>percentage </span>
                                        <span className="code-yellow">
                                            {"}"}{" "}
                                        </span>
                                        <span className="code-red">from </span>
                                        <span className="code-string">
                                            {
                                                "'../../Components/Utils/PriceConverter'"
                                            }
                                        </span>
                                        <span>;</span>
                                    </div>
                                    <div>
                                        <span>...</span>
                                    </div>
                                    <div>
                                        <span>{"<"}</span>
                                        <span className="code-red">h4</span>
                                        <span>{">"}</span>
                                        <span className="code-yellow">
                                            {"{"}
                                        </span>
                                        <span className="code-green">
                                            percentage
                                        </span>
                                        <span className="code-number">(</span>
                                        <span className="code-primary">
                                            {"{"}
                                        </span>
                                        <span> </span>
                                        <span>amount: </span>
                                        <span className="code-number">
                                            19.5
                                        </span>
                                        <span>,</span>
                                        <span> </span>
                                        <span>currency: </span>
                                        <span className="code-string">"%"</span>
                                        <span> </span>
                                        <span className="code-primary">
                                            {"}"}
                                        </span>
                                        <span className="code-number">)</span>
                                        <span className="code-yellow">
                                            {"}"}
                                        </span>
                                        <span>{"</"}</span>
                                        <span className="code-red">h4</span>
                                        <span>{">"}</span>
                                    </div>
                                    <div>
                                        <span>...</span>
                                    </div>
                                </pre>
                            </code>
                        </CardBody>
                    </Card>
                </CardBody>
            </Card>
            <div style={{ marginBottom: 10 }}>
                <h6 className="title" style={{ marginBottom: 10 }}>
                    Penjelasan
                </h6>
                <ul>
                    <li>
                        <div>
                            <code>formayMoney</code> number converter seperti
                            harga.
                        </div>
                        <ul>
                            <li>
                                <code>amount</code> value harga
                            </li>
                            <li>
                                <code>currency</code> nilai dari sebuah value
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div>
                            <code>percentage</code> converter persentase nilai.
                        </div>
                        <ul>
                            <li>
                                <code>value</code> value harga
                            </li>
                            <li>
                                <code>suffix</code> nilai dari sebuah value
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </Style>
    );
};
export default FormatMoney;
