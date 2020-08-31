import React from "react";
import ButtonStyle from "../../Components/Particle/Button";
import { Card, CardBody } from "reactstrap";

const Button = () => {
    return (
        <div>
            <h3 className="title">Button</h3>
            <Card>
                <CardBody>
                    <div className="mb-3">
                        <ButtonStyle>button</ButtonStyle>
                    </div>
                    <div className="mb-3">
                        <ButtonStyle color="" padding="3px 30px">
                            button
                        </ButtonStyle>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};
export default Button;
