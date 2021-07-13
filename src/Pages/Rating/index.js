import React from "react";
import { Card, CardBody, Col, FormGroup, Row } from "reactstrap";
import Rating from "../../Components/Particle/Rating";
import styled from "styled-components";
import Button from "../../Components/Particle/Button";

const Style = styled.div`
    .title {
        margin-bottom: 30px;
    }
    .desc {
        margin-bottom: 30px;
        p {
            margin-bottom: 0;
            line-height: 1.8;
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

const RatingComponent = () => {
    const [rating, setRating] = React.useState(0);
    const handleGetRating = ({ rating }) => {
        alert(rating);
        setRating(rating);
    };
    return (
        <Style>
            <h3 className="title">Rating</h3>
            <div className="desc">
                <p>Cara menggunakan Rating dengan 1 line.</p>
            </div>
            <div style={{ marginBottom: 30 }}>
                <Rating textColor={true} rating={3} totalStars={5} />
            </div>
            <Card style={{ marginBottom: 10 }}>
                <CardBody>
                    <h5>Contoh</h5>
                    <Card className="card-code">
                        <CardBody>
                            <code>
                                <pre>
                                    <div>
                                        <span>{"<"}</span>
                                        <span className="code-primary">
                                            Rating{" "}
                                        </span>
                                        <span className="code-green">
                                            textColor
                                        </span>
                                        <span className="code-red">=</span>
                                        <span className="code-brace">
                                            {"{"}
                                        </span>
                                        <span className="code-number">
                                            true
                                        </span>
                                        <span className="code-brace">
                                            {"}"}{" "}
                                        </span>

                                        <span className="code-green">
                                            rating
                                        </span>
                                        <span className="code-red">=</span>
                                        <span className="code-brace">
                                            {"{"}
                                        </span>
                                        <span className="code-number">3</span>
                                        <span className="code-brace">
                                            {"}"}{" "}
                                        </span>

                                        <span className="code-green">
                                            totalStars
                                        </span>
                                        <span className="code-red">=</span>
                                        <span className="code-brace">
                                            {"{"}
                                        </span>
                                        <span className="code-number">5</span>
                                        <span className="code-brace">
                                            {"}"}{" "}
                                        </span>
                                        <span>{"/>"}</span>
                                    </div>
                                </pre>
                            </code>
                        </CardBody>
                    </Card>
                </CardBody>
            </Card>
            <p>
                Anda juga bisa mengubah rating ini menjadi sebuat form dengan
                menambahkan <code>ratingStars</code> beserta membuat fungsinya (
                <code>onGetValue</code>).
            </p>
            <Card className="card-code" style={{ marginBottom: 30 }}>
                <CardBody>
                    <code>
                        <pre>
                            <div>
                                <span>...</span>
                            </div>
                            <div>
                                <span className="code-primary">
                                    <i>const</i>{" "}
                                </span>
                                <span className="code-brace">{"["}</span>
                                <span>rating, </span>
                                <span className="code-green">setRating</span>
                                <span className="code-brace">{"]"} </span>
                                <span className="code-red">= </span>
                                <span className="code-green">React</span>
                                <span>.</span>
                                <span className="code-green">useState</span>
                                <span className="code-brace">(</span>
                                <span className="code-number">0</span>
                                <span className="code-brace">)</span>
                            </div>
                            <br />
                            <div>
                                <span className="code-primary">const </span>
                                <span className="code-green">
                                    handleGetRating{" "}
                                </span>
                                <span className="code-red">= </span>
                                <span className="code-brace">(</span>
                                <span className="code-primary">{"{"} </span>
                                <span className="code-param">
                                    <i>rating</i>
                                </span>
                                <span> </span>
                                <span className="code-primary">{"}"}</span>
                                <span className="code-brace">) </span>
                                <span className="code-primary">{"=>"} </span>
                                <span className="code-brace">{"{"}</span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span className="code-primary">alert</span>
                                <span className="code-brace">(</span>
                                <span className="code-param">
                                    <i>rating</i>
                                </span>
                                <span className="code-brace">)</span>
                                <span> </span>
                                <span className="code-command">/</span>
                                <span className="code-command">/</span>
                                <span className="code-command">
                                    total rating active
                                </span>
                            </div>
                            <div>
                                <span> </span>
                                <span> </span>
                                <span className="code-green">setRating</span>
                                <span className="code-brace">(</span>
                                <span className="code-param">
                                    <i>rating</i>
                                </span>
                                <span className="code-brace">)</span>
                            </div>
                            <div>
                                <span className="code-brace">{"}"}</span>
                            </div>
                            <div>
                                <span>...</span>
                            </div>
                            <div>
                                <span>{"<"}</span>
                                <span className="code-primary">Rating </span>
                                <span className="code-green">textColor</span>
                                <span className="code-red">=</span>
                                <span className="code-brace">{"{"}</span>
                                <span className="code-number">false</span>
                                <span className="code-brace">{"}"} </span>

                                <span className="code-green">rating</span>
                                <span className="code-red">=</span>
                                <span className="code-brace">{"{"}</span>
                                <span>rating</span>
                                <span className="code-brace">{"}"} </span>

                                <span className="code-green">totalStars</span>
                                <span className="code-red">=</span>
                                <span className="code-brace">{"{"}</span>
                                <span className="code-number">5</span>
                                <span className="code-brace">{"}"} </span>

                                <span className="code-green">ratingStars</span>
                                <span className="code-red">=</span>
                                <span className="code-brace">{"{"}</span>
                                <span className="code-number">true</span>
                                <span className="code-brace">{"}"} </span>

                                <span className="code-green">size</span>
                                <span className="code-red">=</span>
                                <span className="code-string">"30px" </span>

                                <span className="code-green">onGetValue</span>
                                <span className="code-red">=</span>
                                <span className="code-brace">{"{"}</span>
                                <span className="code-green">
                                    handleGetRating
                                </span>
                                <span className="code-brace">{"}"} </span>
                                <span>{"/>"}</span>
                            </div>
                        </pre>
                    </code>
                </CardBody>
            </Card>
            <div style={{ marginBottom: 30 }}>
                <Rating
                    textColor={false}
                    rating={rating}
                    totalStars={5}
                    size="30px"
                    ratingStars={true}
                    onGetValue={handleGetRating}
                />
            </div>

            <div style={{ marginBottom: 10 }}>
                <h6 className="title" style={{ marginBottom: 10 }}>
                    Penjelasan
                </h6>
                <ul>
                    <li>
                        <code>textColor</code> show text total rating, text
                        color ini bisa juga di isi dengan <code>className</code>{" "}
                        untuk memberikan style pada text total rating.
                    </li>
                    <li>
                        <code>rating</code> total rating active.
                    </li>
                    <li>
                        <code>totalStars</code> total keseluruhan rating.
                    </li>
                    <li>
                        <code>size</code> ukuran rating.
                    </li>
                    <li>
                        <code>ratingStars</code> untuk form rating (
                        <code>true</code> / <code>false</code>).
                    </li>
                    <li>
                        <code>onGetValue</code> fungsi dari mendapatkan nilai /
                        value (total rating yang active).
                    </li>
                </ul>
            </div>
        </Style>
    );
};
export default RatingComponent;
