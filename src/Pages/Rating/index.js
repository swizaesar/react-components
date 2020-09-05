import React from "react";
import { Card, CardBody } from "reactstrap";
import Rating from "../../Components/Particle/Rating";

const RatingComponent = () => {
    return (
        <div>
            <h3 className="title">Rating</h3>
            <Card>
                <CardBody>
                    <Rating textColor={false} rating={3} totalStars={5} />
                </CardBody>
            </Card>
        </div>
    );
};
export default RatingComponent;
