import React from "react";
import { NavLink } from "react-router-dom";
import { Row, Col } from "reactstrap";
import styled from "styled-components";
const Navbar = styled.div`
    .navbar {
        padding-left: 0;
        padding-right: 0;
    }
    ul {
        display: flex;
        list-style: none;
        padding: 0;
        li {
            margin-right: 25px;

            a {
                font-family: "Muli", sans-serif;
                font-size: 14px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.24;
                width: max-content;
                display: block;
                letter-spacing: normal;
                text-align: left;
                color: #aaa;
                transition: all 0.25s ease;
                cursor: pointer;
                padding-bottom: 12px;
                position: relative;
                &:before {
                    content: "";
                    position: absolute;
                    bottom: 0;
                    height: 2px;
                    left: 0;
                    right: 0;
                    background: #2e3159;
                    width: 0;
                    transition: all 0.5s ease;
                }
                &:hover {
                    text-decoration: unset;
                    color: #2e3159;
                }

                &.active {
                    font-weight: bold;
                    color: #2e3159;
                    &:before {
                        animation: mymove 0.5s;
                        animation-fill-mode: forwards;
                        transition: all 0.5s ease;
                    }
                    @keyframes mymove {
                        from {
                            width: 0px;
                        }
                        to {
                            width: 100%;
                        }
                    }
                }
                @media (max-width: 450px) {
                    font-size: 12px;
                }
            }
        }
    }
`;

const TabLink = ({ data = [] }) => {
    return (
        <Row>
            <Col>
                <Navbar>
                    <div className="navbar">
                        <ul style={{ overflowX: "auto", overflowY: "hidden" }}>
                            {data.map((item, key) => {
                                return (
                                    <li key={key}>
                                        <NavLink to={item.link}>
                                            {item.icon && (
                                                <i
                                                    className={`${item.icon}`}
                                                ></i>
                                            )}
                                            {item.name}
                                        </NavLink>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </Navbar>
            </Col>
        </Row>
    );
};
export default TabLink;
