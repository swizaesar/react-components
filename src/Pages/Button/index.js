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
            <Card>
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
                                                <span>Example</span>
                                            </div>
                                            <div>
                                                <span>{"<"}</span>

                                                <span className="code-primary">
                                                    <i>Button </i>
                                                </span>

                                                <span>{"/>"}</span>
                                            </div>
                                        </pre>
                                    </code>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Style>
    );
};
export default Button;
