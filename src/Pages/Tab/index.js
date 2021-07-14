import React from "react";
import TabMenu from "../../Components/Molekul/TabMenu";
import ExampleTabFirst from "./ExampleTabFirst";
import ExampleTabThird from "./ExampleTabThird";
import ExampleTabSecond from "./ExampleTabSecond";
import { color } from "../../Utils/VariableName";
import styled from "styled-components";
import { Card, CardBody } from "reactstrap";

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
const Tab = () => {
    return (
        <Style>
            <h3 className="title">Tabs</h3>
            <div className="desc">
                <p>
                    Cara menggunakan Tabs ini cukup dengan menyediakan tab
                    content Anda, lalu masukan ke komponen <b>Tabs</b>.
                </p>
            </div>
            <div>
                <TabMenu
                    settings={{
                        color: {
                            text: "#aaa",
                            activeText: color.primary,
                        },
                    }}
                    data={[
                        {
                            title: "Tab 1",
                            key: 1,
                            render: () => {
                                return <ExampleTabFirst />;
                            },
                        },
                        {
                            title: "Tab 2",
                            key: 2,
                            render: () => {
                                return <ExampleTabSecond />;
                            },
                        },
                        {
                            title: "Tab 3",
                            key: 3,
                            render: () => {
                                return <ExampleTabThird />;
                            },
                        },
                    ]}
                />
            </div>
            <Card>
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
                                        <span>TabMenu </span>
                                        <span className="code-red">from </span>
                                        <span className="code-string">
                                            {
                                                "'../../Components/Molekul/TabMenu'"
                                            }
                                        </span>
                                        <span>;</span>
                                    </div>
                                    <div>
                                        <span className="code-red">
                                            import{" "}
                                        </span>
                                        <span>YourContentOne </span>
                                        <span className="code-red">from </span>
                                        <span className="code-string">
                                            {"'./YourContentOne'"}
                                        </span>
                                        <span>;</span>
                                    </div>
                                    <div>
                                        <span className="code-red">
                                            import{" "}
                                        </span>
                                        <span>YourContentTwo </span>
                                        <span className="code-red">from </span>
                                        <span className="code-string">
                                            {"'./YourContentTwo'"}
                                        </span>
                                        <span>;</span>
                                    </div>
                                    <div>
                                        <span className="code-red">
                                            import{" "}
                                        </span>
                                        <span>YourContentThree </span>
                                        <span className="code-red">from </span>
                                        <span className="code-string">
                                            {"'./YourContentThree'"}
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
                                            TabMenu
                                        </span>
                                    </div>
                                    <div>
                                        <span> </span>
                                        <span> </span>
                                        <span className="code-green">
                                            settings
                                        </span>
                                        <span className="code-red">=</span>
                                        <span className="code-primary">
                                            {"{"}
                                        </span>
                                        <span className="code-yellow">
                                            {"{"}
                                        </span>
                                    </div>
                                    <div>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span>color: </span>
                                        <span className="code-number">
                                            {"{"}
                                        </span>
                                    </div>
                                    <div>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span>text: </span>
                                        <span className="code-string">
                                            "#aaa"
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
                                        <span>activeText: </span>
                                        <span>color.primary</span>
                                        <span>,</span>
                                    </div>
                                    <div>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span className="code-number">
                                            {"}"}
                                        </span>
                                        <span>,</span>
                                    </div>
                                    <div>
                                        <span> </span>
                                        <span> </span>
                                        <span className="code-yellow">
                                            {"}"}
                                        </span>
                                        <span className="code-primary">
                                            {"}"}
                                        </span>
                                    </div>

                                    <div>
                                        <span> </span>
                                        <span> </span>
                                        <span className="code-green">data</span>
                                        <span className="code-red">=</span>
                                        <span className="code-primary">
                                            {"{"}
                                        </span>
                                        <span className="code-yellow">
                                            {"["}
                                        </span>
                                    </div>
                                    <div>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span className="code-number">
                                            {"{"}
                                        </span>
                                    </div>
                                    <div>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span>title: </span>
                                        <span className="code-string">
                                            "Tab 1"
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
                                        <span>key: </span>
                                        <span className="code-number">1</span>
                                        <span>,</span>
                                    </div>
                                    <div>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span className="code-green">
                                            render:{" "}
                                        </span>
                                        <span className="code-primary">
                                            {"() => {"}
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
                                        <span> </span>
                                        <span className="code-red">
                                            return{" "}
                                        </span>
                                        <span>{"<"}</span>
                                        <span className="code-primary">
                                            <i>YourContentOne</i>{" "}
                                        </span>
                                        <span>{"/>"}</span>
                                    </div>
                                    <div>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span className="code-primary">
                                            {"}"}
                                        </span>
                                        <span>,</span>
                                    </div>
                                    <div>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span className="code-number">
                                            {"}"}
                                        </span>
                                        <span>,</span>
                                    </div>

                                    <div>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span className="code-number">
                                            {"{"}
                                        </span>
                                    </div>
                                    <div>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span>title: </span>
                                        <span className="code-string">
                                            "Tab 2"
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
                                        <span>key: </span>
                                        <span className="code-number">2</span>
                                        <span>,</span>
                                    </div>
                                    <div>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span className="code-green">
                                            render:{" "}
                                        </span>
                                        <span className="code-primary">
                                            {"() => {"}
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
                                        <span> </span>
                                        <span className="code-red">
                                            return{" "}
                                        </span>
                                        <span>{"<"}</span>
                                        <span className="code-primary">
                                            <i>YourContentTwo</i>{" "}
                                        </span>
                                        <span>{"/>"}</span>
                                    </div>
                                    <div>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span className="code-primary">
                                            {"}"}
                                        </span>
                                        <span>,</span>
                                    </div>
                                    <div>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span className="code-number">
                                            {"}"}
                                        </span>
                                        <span>,</span>
                                    </div>

                                    <div>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span className="code-number">
                                            {"{"}
                                        </span>
                                    </div>
                                    <div>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span>title: </span>
                                        <span className="code-string">
                                            "Tab 3"
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
                                        <span>key: </span>
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
                                        <span className="code-green">
                                            render:{" "}
                                        </span>
                                        <span className="code-primary">
                                            {"() => {"}
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
                                        <span> </span>
                                        <span className="code-red">
                                            return{" "}
                                        </span>
                                        <span>{"<"}</span>
                                        <span className="code-primary">
                                            <i>YourContentThree</i>{" "}
                                        </span>
                                        <span>{"/>"}</span>
                                    </div>
                                    <div>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span className="code-primary">
                                            {"}"}
                                        </span>
                                        <span>,</span>
                                    </div>
                                    <div>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span className="code-number">
                                            {"}"}
                                        </span>
                                        <span>,</span>
                                    </div>
                                    <div>
                                        <span> </span>
                                        <span> </span>
                                        <span className="code-primary">
                                            {"}"}
                                        </span>
                                    </div>
                                    <div>
                                        <span>{"/>"}</span>
                                    </div>
                                </pre>
                            </code>
                        </CardBody>
                    </Card>
                </CardBody>
            </Card>
        </Style>
    );
};
export default Tab;
