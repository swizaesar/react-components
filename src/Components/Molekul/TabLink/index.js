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
                font-size: 16px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.24;
                letter-spacing: normal;
                text-align: left;
                color: #aaa;
                transition: all 0.25s ease;
                cursor: pointer;
                padding-bottom: 12px;
                position: relative;
                &:hover {
                    text-decoration: unset;
                    color: #00278c;
                }

                &.active {
                    font-weight: bold;
                    color: #00278c;
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
                        <ul>
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
