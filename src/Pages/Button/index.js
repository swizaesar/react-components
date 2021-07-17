import React from "react";
import ButtonStyle from "../../Components/Particle/Button";
import styled from "styled-components";
import { Card, CardBody, Col, FormGroup, Input, Row } from "reactstrap";
import { color } from "../../Utils/VariableName";
import { useHistory } from "react-router";

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
const Button = () => {
    const [valueColorPrimary, setValueColorPrimary] = React.useState(
        color.primary
    );
    const history = useHistory();
    const handleChangeColorPrimary = () => {
        color.primary =
            valueColorPrimary === "" ? "#BF9C4A" : valueColorPrimary;
        history.push("/button");
    };
    const handleChangePrimaryInput = (e) => {
        let value = e.target.value;
        setValueColorPrimary(value);
    };
    return (
        <Style>
            <h3 className="title">Button</h3>
            <div className="example-buttons">
                <div style={{ paddingRight: 15 }}>
                    <ButtonStyle color="primary">Primary</ButtonStyle>
                </div>
                <div style={{ paddingRight: 15 }}>
                    <ButtonStyle color="outline-primary">
                        Outline Primary
                    </ButtonStyle>
                </div>
            </div>
            <p>
                Button ini adalah button{" "}
                <a
                    href="https://reactstrap.github.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-link"
                >
                    Reactstrap
                </a>{" "}
                yang di modifikasi, agar kita bisa merubah warna primary dan
                outline primary sesuai dengan kebutuhan.
            </p>
            <Card style={{ marginBottom: 10 }}>
                <CardBody>
                    <h5>Contoh</h5>
                    <Row>
                        <Col md={12}>
                            <div style={{ marginBottom: 20 }}>
                                <Row>
                                    <Col sm={3}>
                                        <FormGroup>
                                            <Input
                                                defaultValue={color.primary}
                                                type="text"
                                                placeholder="Code warna"
                                                onChange={
                                                    handleChangePrimaryInput
                                                }
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col sm={3}>
                                        <FormGroup>
                                            <ButtonStyle
                                                onClick={
                                                    handleChangeColorPrimary
                                                }
                                                block
                                                color="primary"
                                            >
                                                Ubah Warna Primary
                                            </ButtonStyle>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </div>
                            <Card className="card-code">
                                <CardBody>
                                    <code>
                                        <pre>
                                            <div>
                                                <span className="code-red">
                                                    import{" "}
                                                </span>
                                                <span>Button </span>
                                                <span className="code-red">
                                                    from{" "}
                                                </span>
                                                <span className="code-string">
                                                    {
                                                        "'../../Components/Particle/Button'"
                                                    }
                                                </span>
                                                <span>;</span>
                                            </div>
                                            <br />
                                            <div>
                                                <span>...</span>
                                            </div>
                                            <br />
                                            <div>
                                                <span>{"<"}</span>
                                                <span className="code-primary">
                                                    <i>Button </i>
                                                </span>
                                                <span> </span>
                                                <span className="code-green">
                                                    color=
                                                </span>
                                                <span className="code-string">
                                                    {`"primary"`}
                                                </span>
                                                <span>{">"}</span>
                                            </div>
                                            <div>
                                                <span> </span>
                                                <span> </span>
                                                <span>Primary</span>
                                            </div>
                                            <div>
                                                <span>{"</"}</span>

                                                <span className="code-primary">
                                                    <i>Button </i>
                                                </span>

                                                <span>{">"}</span>
                                            </div>
                                            <br />
                                            <div>
                                                <span>{"<"}</span>
                                                <span className="code-primary">
                                                    <i>Button </i>
                                                </span>
                                                <span> </span>
                                                <span className="code-green">
                                                    color=
                                                </span>
                                                <span className="code-string">
                                                    {`"outline-primary"`}
                                                </span>
                                                <span>{">"}</span>
                                            </div>
                                            <div>
                                                <span> </span>
                                                <span> </span>
                                                <span>Outline Primary</span>
                                            </div>
                                            <div>
                                                <span>{"</"}</span>

                                                <span className="code-primary">
                                                    <i>Button </i>
                                                </span>

                                                <span>{">"}</span>
                                            </div>
                                        </pre>
                                    </code>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
            <p>
                Untuk membuat warna primary kamu, buatlah{" "}
                <code>VariableName.js</code> di dalam folder <b>Utils</b>,
            </p>
            <Card className="card-code" style={{ marginBottom: 10 }}>
                <CardBody>
                    <code>
                        <pre>
                            <div>
                                <span className="code-red">export</span>
                                <span> </span>
                                <span className="code-primary">const</span>
                                <span> </span>
                                <span>color </span>
                                <span className="code-red">= </span>
                                <span className="code-yellow">{"{"}</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span>primary: </span>
                                <span className="code-yellow">"#BF9C4A"</span>
                                <span>,</span>
                            </div>
                            <div>
                                <span className="code-yellow">{"}"}</span>
                            </div>
                        </pre>
                    </code>
                </CardBody>
            </Card>
            <p>
                Untuk memberikan full width pada button tambahkan{" "}
                <code>block</code>, dan untuk mengatur ukuran text gunakan{" "}
                <code>size</code>.
            </p>
            <Card className="card-code" style={{ marginBottom: 10 }}>
                <CardBody>
                    <code>
                        <pre>
                            <div>
                                <span>{"<"}</span>
                                <span className="code-primary">
                                    <i>Button </i>
                                </span>
                                <span> </span>
                                <span className="code-green">color=</span>
                                <span className="code-string">{`"primary"`}</span>
                                <span> </span>
                                <span className="code-green">block</span>
                                <span> </span>
                                <span className="code-green">size=</span>
                                <span className="code-yellow">{"{"}</span>
                                <span className="code-number">18</span>
                                <span className="code-yellow">{"}"}</span>
                                <span>{">"}</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span>Primary</span>
                            </div>
                            <div>
                                <span>{"</"}</span>

                                <span className="code-primary">
                                    <i>Button </i>
                                </span>

                                <span>{">"}</span>
                            </div>
                        </pre>
                    </code>
                </CardBody>
            </Card>
            <div style={{ marginBottom: 30 }}>
                <ButtonStyle color="primary" block size={18}>
                    Primary
                </ButtonStyle>
            </div>
            <div style={{ marginBottom: 10 }}>
                <h6 className="title" style={{ marginBottom: 10 }}>
                    Penjelasan
                </h6>
            </div>
            <ul>
                <li>
                    <code>color</code> type button style (primary /
                    outline-primary)
                </li>
                <li>
                    <code>block</code> memberi display block pada{" "}
                    <code>button</code>
                </li>
                <li>
                    <code>onClick</code> fungsi aksi dari button
                </li>
                <li>
                    <code>className</code> memberikan class pada button
                </li>
                <li>
                    <code>size</code> memberikan <code>fontSize</code> pada
                    button (px), type data <code>number</code>
                </li>
                <li>
                    <code>disabled</code> disable button (<code>true</code> /{" "}
                    <code>false</code>)
                </li>
            </ul>
        </Style>
    );
};
export default Button;
