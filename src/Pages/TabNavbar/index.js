import React from "react";
import TabLink from "../../Components/TabLink";
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
const TabNavbar = () => {
    const tabLink = [
        {
            name: "Tab Menu",
            link: "/tab",
        },
        {
            name: "Tab Link",
            link: "/tab-link",
        },
    ];
    return (
        <Style>
            <h3 className="title">Tab Link</h3>
            <TabLink data={tabLink} />
            <div className="desc">
                <p>
                    Cara menggunakan Tab Link ini cukup dengan menyediakan tab
                    url Anda, lalu masukan ke data komponen <b>Tab Link</b>.
                </p>
            </div>
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
                                        <span>TabLink </span>
                                        <span className="code-red">from </span>
                                        <span className="code-string">
                                            {"'../../Components/TabLink'"}
                                        </span>
                                        <span>;</span>
                                    </div>
                                    <br />
                                    <div>
                                        <span>...</span>
                                    </div>
                                    <br />
                                    <div>
                                        <span className="code-primary">
                                            const
                                        </span>
                                        <span> </span>
                                        <span>settings</span>
                                        <span> </span>
                                        <span className="code-red">=</span>
                                        <span> </span>
                                        <span className="code-number">[</span>
                                    </div>
                                    <div>
                                        <span> </span>
                                        <span> </span>
                                        <span className="code-primary">
                                            {"{"}
                                        </span>
                                    </div>
                                    <div>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span>name: </span>
                                        <span className="code-string">
                                            "Tab Menu"
                                        </span>
                                        <span>,</span>
                                        <span> </span>
                                        <span className="code-command">
                                            {"// header name tab link"}
                                        </span>
                                    </div>
                                    <div>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span>link: </span>
                                        <span className="code-string">
                                            "/tab
                                        </span>
                                        <span>,</span>
                                        <span> </span>
                                        <span className="code-command">
                                            {"// url tab link"}
                                        </span>
                                    </div>
                                    <div>
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
                                        <span className="code-primary">
                                            {"{"}
                                        </span>
                                    </div>
                                    <div>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span>name: </span>
                                        <span className="code-string">
                                            "Tab Link"
                                        </span>
                                        <span>,</span>
                                        <span> </span>
                                    </div>
                                    <div>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <span>link: </span>
                                        <span className="code-string">
                                            "/tab-link
                                        </span>
                                        <span>,</span>
                                        <span> </span>
                                    </div>
                                    <div>
                                        <span> </span>
                                        <span> </span>
                                        <span className="code-primary">
                                            {"}"}
                                        </span>
                                        <span>,</span>
                                    </div>
                                    <div>
                                        <span className="code-number">]</span>
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
                                            TabLink
                                        </span>
                                        <span> </span>
                                        <span className="code-green">data</span>
                                        <span className="code-red">=</span>
                                        <span className="code-primary">
                                            {"{"}
                                        </span>
                                        <span>settings</span>
                                        <span className="code-primary">
                                            {"}"}
                                        </span>
                                        <span> </span>
                                        <span>{"/>"}</span>
                                    </div>
                                </pre>
                            </code>
                        </CardBody>
                    </Card>
                </CardBody>
            </Card>
            <p>
                Anda juga bisa menambahkan icon class pada header tab link
                dengan cara menambahkan <code>icon</code> pada setting
            </p>
            <Card className="card-code" style={{ marginBottom: 30 }}>
                <CardBody>
                    <code>
                        <pre>
                            <div>
                                <span>icon: </span>
                                <span className="code-string">
                                    "fas fa-wallet mr-2"
                                </span>
                                <span>,</span>
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
                        <code>name</code> nama header tab link
                    </li>
                    <li>
                        <code>link</code> url tab link
                    </li>
                    <li>
                        <code>icon</code> memberikan icon pada header tab link
                    </li>
                </ul>
            </div>
        </Style>
    );
};
export default TabNavbar;
