import React from "react";
import { Card, CardBody } from "reactstrap";
import Style from "./style";

const LandingPage = () => {
    return (
        <Style>
            <h3 className="title text-center mb-4">Welcome</h3>
            <Card>
                <CardBody>
                    <h5 className="title mb-4 ">Installation</h5>
                    <h6>NPM</h6>
                    <Card className="shadow">
                        <CardBody>
                            <p>
                                Pertama, install semua library framework yang
                                dibutuhkan pada semua components :
                            </p>
                            <Card className="card-code">
                                <CardBody>
                                    <code>
                                        <pre>npm install react-router-dom</pre>
                                        <pre>npm install --save bootstrap</pre>
                                        <pre>
                                            npm install --save reactstrap react
                                            react-dom
                                        </pre>
                                        <pre>
                                            npm install --save styled-components
                                        </pre>
                                    </code>
                                </CardBody>
                            </Card>
                        </CardBody>
                    </Card>
                </CardBody>
            </Card>
        </Style>
    );
};
export default LandingPage;
