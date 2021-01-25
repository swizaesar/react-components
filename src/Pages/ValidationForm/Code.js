import React from "react";
import styled from "styled-components";
import { Card, CardBody } from "reactstrap";

const Style = styled(Card)`
    background: #282a2d;
    code {
        pre {
            color: #fff;
        }
    }
`;

const Code = () => {
    return (
        <Style>
            <CardBody>
                <code>
                    <pre>
                        <div>
                            <span className="code-red">import </span>
                            <span>React, </span>
                            <span className="code-yellow">{"{ "}</span>
                            <span>useState</span>
                            <span className="code-yellow">{" } "}</span>
                            <span className="code-red">from </span>
                            <span className="code-string">{"'react'"}</span>
                            <span>;</span>
                        </div>
                        <div>
                            <span className="code-red">import </span>
                            <span>Form </span>
                            <span className="code-red">from </span>
                            <span className="code-string">
                                {"'../../Components/Molekul/FormValidation'"}
                            </span>
                            <span>;</span>
                        </div>
                        <div>
                            <span className="code-red">import </span>
                            <span className="code-yellow">{"{"} </span>
                            <span>Button </span>
                            <span className="code-yellow">{"}"} </span>
                            <span className="code-red">from </span>
                            <span className="code-string">
                                {"'reactstrap'"}
                            </span>
                            <span>;</span>
                        </div>
                        <br />
                        <br />
                        <div>
                            <span className="code-primary">
                                <i>const</i>{" "}
                            </span>
                            <span className="code-green">ExampleForm </span>
                            <span className="code-red">= </span>
                            <span className="code-yellow">() </span>
                            <span className="code-primary"> {"=>"} </span>
                            <span className="code-yellow">{"{"} </span>
                        </div>
                        <div>
                            <span> </span>
                            <span> </span>
                            <span className="code-primary">
                                <i>const</i>{" "}
                            </span>
                            <span className="code-brace">{"["}</span>
                            <span>validationClick, </span>
                            <span className="code-green">
                                setValidationClick
                            </span>
                            <span className="code-brace">{"]"} </span>
                            <span className="code-red">= </span>
                            <span className="code-green">useState</span>
                            <span className="code-brace">(</span>
                            <span className="code-number">true</span>
                            <span className="code-brace">)</span>
                        </div>
                        <div>
                            <span> </span>
                            <span> </span>
                            <span className="code-primary">
                                <i>const</i>{" "}
                            </span>
                            <span className="code-brace">{"["}</span>
                            <span>validateForm, </span>
                            <span className="code-green">setValidateForm</span>
                            <span className="code-brace">{"]"} </span>
                            <span className="code-red">= </span>
                            <span className="code-green">useState</span>
                            <span className="code-brace">(</span>
                            <span className="code-number">true</span>
                            <span className="code-brace">)</span>
                        </div>
                        <div>
                            <span> </span>
                            <span> </span>
                            <span className="code-primary">
                                <i>const</i>{" "}
                            </span>
                            <span className="code-brace">{"["}</span>
                            <span>listForm, setForm</span>
                            <span className="code-brace">{"]"} </span>
                            <span className="code-red">= </span>
                            <span className="code-green">useState</span>
                            <span className="code-brace">(</span>
                            <span className="code-primary">{"["}</span>
                            {/* Form Text */}
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span className="code-yellow">{"{"} </span>
                            </div>

                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span>type: </span>
                                <span className="code-string">{'"text"'}</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span>label: </span>
                                <span className="code-string">{'"Nama"'}</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span>required: </span>
                                <span className="code-brace">true</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span>action: </span>
                                <span className="code-string">{'"text"'}</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span>name: </span>
                                <span className="code-string">{'"name"'}</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span>placeholder: </span>
                                <span className="code-string">{'"Name"'}</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span>col: </span>
                                <span className="code-number">{"6"}</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
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
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span>value: </span>
                                <span className="code-string">{'""'}</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span>status: </span>
                                <span className="code-number">{"false"}</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span>character: </span>
                                <span className="code-brace">{"{"}</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
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
                                <span> </span>
                                <span> </span>
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
                                <span> </span>
                                <span> </span>
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
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span className="code-primary">{"}"}</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
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
                                <span> </span>
                                <span> </span>
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
                                <span> </span>
                                <span> </span>
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
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span className="code-primary">{"}"}</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span className="code-brace">{"}"}</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span className="code-yellow">{"}"}</span>
                                <span>,</span>
                            </div>
                            {/* Email */}
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span className="code-yellow">{"{"} </span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span>type: </span>
                                <span className="code-string">{'"email"'}</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span>required: </span>
                                <span className="code-brace">true</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span>label: </span>
                                <span className="code-string">{'"Email"'}</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span>action: </span>
                                <span className="code-string">{'"email"'}</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span>name: </span>
                                <span className="code-string">{'"email"'}</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span>placeholder: </span>
                                <span className="code-string">{'"Email"'}</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span>col: </span>
                                <span className="code-number">{"6"}</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span>valid: </span>
                                <span className="code-string">
                                    {'"Email tidak boleh kosong"'}
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
                                <span className="code-string">{'""'}</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span>status: </span>
                                <span className="code-number">{"false"}</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span className="code-yellow">{"}"}</span>
                                <span>,</span>
                            </div>
                            {/* Phone Number */}
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span className="code-yellow">{"{"} </span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span>type: </span>
                                <span className="code-string">{'"phone"'}</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span>label: </span>
                                <span className="code-string">{'"Harga"'}</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span>required: </span>
                                <span className="code-brace">true</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span>required: </span>
                                <span className="code-number">true</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span>action: </span>
                                <span className="code-string">{'"phone"'}</span>
                                <span>,</span>
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
                                    {'"Nomor Telpon"'}
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
                                <span>name: </span>
                                <span className="code-string">{'"phone"'}</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span>placeholder: </span>
                                <span className="code-string">
                                    {'"Nomor Telpon"'}
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
                                <span>col: </span>
                                <span className="code-number">{"6"}</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span>valid: </span>
                                <span className="code-string">
                                    {'"Nomor Telpon tidak boleh kosong"'}
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
                                <span className="code-string">{'""'}</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span>status: </span>
                                <span className="code-number">{"false"}</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span className="code-yellow">{"}"}</span>
                                <span>,</span>
                            </div>
                            {/* Price */}
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span className="code-yellow">{"{"} </span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span>type: </span>
                                <span className="code-string">{'"price"'}</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span>action: </span>
                                <span className="code-string">{'"price"'}</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span>name: </span>
                                <span className="code-string">{'"price"'}</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span>col: </span>
                                <span className="code-number">{"6"}</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
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
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span>required: </span>
                                <span className="code-number">true</span>
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
                                <span className="code-string">{'""'}</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span>currencyLogo: </span>
                                <span className="code-string">{'"Rp. "'}</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span>min: </span>
                                <span className="code-brace">{"{"}</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span>price: </span>
                                <span className="code-number">10000</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span>valid: </span>
                                <span className="code-string">
                                    {
                                        '"Field harga tidak boleh kurang dari 10.000"'
                                    }
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
                                <span className="code-brace">{"}"}</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span>status: </span>
                                <span className="code-number">{"false"}</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span className="code-yellow">{"}"}</span>
                                <span>,</span>
                            </div>
                            {/* Upload File */}
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span className="code-yellow">{"{"} </span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span>type: </span>
                                <span className="code-string">{'"file"'}</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span>action: </span>
                                <span className="code-string">{'"file"'}</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span>name: </span>
                                <span className="code-string">{'"file"'}</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span>placeholder: </span>
                                <span className="code-string">
                                    {'"Upload file"'}
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
                                <span>col: </span>
                                <span className="code-number">{"6"}</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span>valid: </span>
                                <span className="code-string">
                                    {'"Harap masukan file"'}
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
                                <span className="code-string">{'""'}</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span>status: </span>
                                <span className="code-number">{"true"}</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span className="code-yellow">{"}"}</span>
                                <span>,</span>
                            </div>

                            {/* Upload Image */}
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span className="code-yellow">{"{"} </span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span>type: </span>
                                <span className="code-string">{'"image"'}</span>
                                <span>,</span>
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
                                    {'"Upload Gambar"'}
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
                                <span>required: </span>
                                <span className="code-number">true</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
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
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span>name: </span>
                                <span className="code-string">{'"image"'}</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
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
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span>col: </span>
                                <span className="code-number">{"6"}</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
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
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span>value: </span>
                                <span className="code-string">{'""'}</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span>status: </span>
                                <span className="code-number">{"false"}</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span className="code-yellow">{"}"}</span>
                                <span>,</span>
                            </div>

                            {/* Upload Image Multiple*/}
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span className="code-yellow">{"{"} </span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span>type: </span>
                                <span className="code-string">{'"image"'}</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span>action: </span>
                                <span className="code-string">
                                    {'"uploadImageMultiple"'}
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
                                <span>name: </span>
                                <span className="code-string">
                                    {'"image-multiple"'}
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
                                <span>col: </span>
                                <span className="code-number">{"6"}</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
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
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span>value: </span>
                                <span className="code-number">{"[]"}</span>
                                <span>,</span>
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
                                    {'"Upload Gambar Multiple"'}
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
                                <span>status: </span>
                                <span className="code-number">{"true"}</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span>max: </span>
                                <span className="code-number">3</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span className="code-yellow">{"}"}</span>
                                <span>,</span>
                            </div>
                            {/* Input Range */}
                            {/* <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span className="code-yellow">{"{"} </span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span>type: </span>
                                <span className="code-string">{'"range"'}</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span>action: </span>
                                <span className="code-string">
                                    {'"inputRange"'}
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
                                <span>label: </span>
                                <span className="code-string">
                                    {'"Input Range"'}
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
                                <span>name: </span>
                                <span className="code-string">
                                    {'"input-range"'}
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
                                <span>col: </span>
                                <span className="code-number">{"6"}</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span>valid: </span>
                                <span className="code-string">{'""'}</span>
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
                                <span className="code-number">100</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span>status: </span>
                                <span className="code-number">{"false"}</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span>maxValue: </span>
                                <span className="code-number">100</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span>minValue: </span>
                                <span className="code-number">0</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span>haveInput: </span>
                                <span className="code-number">true</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span>haveRange: </span>
                                <span className="code-number">true</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span>isMulti: </span>
                                <span className="code-number">true</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span>formatLabel: </span>
                                <span className="code-string">{"kg"}</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span className="code-yellow">{"}"}</span>
                                <span>,</span>
                            </div> */}
                            <div>
                                <span> </span>
                                <span> </span>
                                <span className="code-primary">{"]"}</span>
                                <span className="code-brace">)</span>
                            </div>
                        </div>

                        <div>
                            <span className="code-primary">
                                <i>const </i>
                            </span>
                            <span className="code-green">
                                handlerSubmitData{" "}
                            </span>
                            <span className="code-red">= </span>
                            <span className="code-brace">() </span>
                            <span className="code-primary">{"=>"} </span>
                            <span className="code-brace">{"{"}</span>
                        </div>
                        <div>
                            <span> </span>
                            <span> </span>
                            <span className="code-primary">
                                <i>let </i>
                            </span>
                            <span>isError </span>
                            <span className="code-red">= </span>
                            <span className="code-number">false</span>
                            <span>;</span>
                        </div>
                        <div>
                            <span> </span>
                            <span> </span>
                            <span className="code-red">for </span>
                            <span className="code-primary">(</span>
                            <span className="code-primary">let </span>
                            <span>key </span>
                            <span className="code-red">in </span>
                            <span>listForm</span>
                            <span className="code-primary">) </span>
                            <span className="code-primary">{"{"}</span>
                        </div>
                        <div>
                            <span> </span>
                            <span> </span>
                            <span> </span>
                            <span> </span>
                            <span className="code-red">if </span>
                            <span className="code-yellow">(</span>
                            <span className="code-red">!</span>
                            <span>listForm</span>
                            <span className="code-brace">{"["}</span>
                            <span>key</span>
                            <span className="code-brace">{"]"}</span>
                            <span>.status</span>
                            <span className="code-yellow">) </span>
                            <span className="code-yellow">{"{"}</span>
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
                            <span className="code-number">true</span>
                            <span>;</span>
                        </div>
                        <div>
                            <span> </span>
                            <span> </span>
                            <span> </span>
                            <span> </span>
                            <span className="code-yellow">{"}"}</span>
                        </div>
                        <div>
                            <span> </span>
                            <span> </span>
                            <span className="code-primary">{"}"}</span>
                        </div>
                        <div>
                            <span> </span>
                            <span> </span>
                            <span className="code-green">
                                setValidationClick
                            </span>
                            <span className="code-primary">(</span>
                            <span>isError</span>
                            <span className="code-primary">)</span>
                            <span>;</span>
                        </div>
                        <div>
                            <span> </span>
                            <span> </span>
                            <span className="code-green">setValidateForm</span>
                            <span className="code-primary">(</span>
                            <span className="code-number">false</span>
                            <span className="code-primary">)</span>
                            <span>;</span>
                        </div>
                        <div>
                            <span> </span>
                            <span> </span>
                            <span className="code-red">if </span>
                            <span className="code-primary">(</span>
                            <span className="code-red">!</span>
                            <span>isError</span>
                            <span className="code-primary">) </span>
                            <span className="code-primary">{"{"}</span>
                        </div>
                        <div>
                            <span> </span>
                            <span> </span>
                            <span> </span>
                            <span> </span>
                            <span className="code-primary">alert</span>
                            <span className="code-yellow">(</span>
                            <span className="code-string">
                                {
                                    '"form is valid, put your action endpoint is here"'
                                }
                            </span>
                            <span className="code-yellow">)</span>
                            <span>;</span>
                        </div>
                        <div>
                            <span> </span>
                            <span> </span>
                            <span className="code-primary">{"}"}</span>
                        </div>

                        <div>
                            <span className="code-brace">{"}"}</span>
                        </div>
                        <div>
                            <span> </span>
                            <span> </span>
                            <span> </span>
                            <span> </span>
                            <div>
                                <div>
                                    <span className="code-red">return </span>
                                    <span className="code-yellow">( </span>
                                </div>
                                <div>
                                    <span> </span>
                                    <span> </span>
                                    <span> </span>
                                    <span> </span>
                                    <span>{"<"}</span>
                                    <span className="code-primary">
                                        <i>React.Fragment</i>
                                    </span>
                                    <span>{">"}</span>
                                </div>
                                <div>
                                    <span> </span>
                                    <span> </span>
                                    <span> </span>
                                    <span> </span>
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
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span className="code-green">
                                            setForm
                                        </span>
                                        <span className="code-red">=</span>
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
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span className="code-green">
                                            validateForm
                                        </span>
                                        <span className="code-red">=</span>
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
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span className="code-green">
                                            validationClick
                                        </span>
                                        <span className="code-red">=</span>
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
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span className="code-green">form</span>
                                        <span className="code-red">=</span>
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
                                    <span> </span>
                                    <span> </span>
                                    <span> </span>
                                    <span> </span>
                                    <span>{"/>"}</span>
                                </div>
                                <div>
                                    <span> </span>
                                    <span> </span>
                                    <span> </span>
                                    <span> </span>
                                    <span> </span>
                                    <span> </span>
                                    <span>{"<"}</span>
                                    <span className="code-primary">
                                        <i>Button </i>
                                    </span>
                                    <span className="code-green">onClick</span>
                                    <span className="code-red">=</span>
                                    <span className="code-brace">{"{"}</span>
                                    <span className="code-green">
                                        handlerSubmitData
                                    </span>
                                    <span className="code-brace">{"}"}</span>
                                    <span>{">"}</span>
                                </div>
                                <div>
                                    <span> </span>
                                    <span> </span>
                                    <span> </span>
                                    <span> </span>
                                    <span> </span>
                                    <span> </span>
                                    <span> </span>
                                    <span> </span>
                                    <span>Submit</span>
                                </div>
                                <div>
                                    <span> </span>
                                    <span> </span>
                                    <span> </span>
                                    <span> </span>
                                    <span> </span>
                                    <span> </span>
                                    <span>{"<"}</span>
                                    <span className="code-primary">
                                        <i>Button </i>
                                    </span>
                                    <span>{"/>"}</span>
                                </div>
                                <div>
                                    <span> </span>
                                    <span> </span>
                                    <span> </span>
                                    <span> </span>
                                    <span>{"<"}</span>
                                    <span className="code-primary">
                                        <i>React.Fragment</i>
                                    </span>
                                    <span>{"/>"}</span>
                                </div>
                                <div>
                                    <span> </span>
                                    <span> </span>
                                    <span className="code-yellow">) </span>
                                </div>
                            </div>
                        </div>
                        <span className="code-brace">{"}"} </span>
                        <div>
                            <span className="code-red">export default </span>
                            <span className="code-green">ExampleForm</span>
                            <span>;</span>
                        </div>
                    </pre>
                </code>
            </CardBody>
        </Style>
    );
};
export default Code;
