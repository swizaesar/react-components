import React from "react";
import Style from "./style";
import { Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";
import Button from "../Particle/Button";
import styled from "styled-components";
import { color } from "../../Utils/VariableName";
const ButtonStyle = styled(Button)`
    background: transparent;
    width: 100%;
    color: #fff;
    border: unset;
    padding: 0.5rem 1rem;
    text-align: left;
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 1rem;
    font-weight: 600;
    &:hover,
    &:focus,
    &:active {
        color: ${() => {
            return color.primary;
        }};
        background-color: transparent !important;
        border-color: ${() => {
            return color.primary;
        }} !important;
        box-shadow: unset !important;
    }
    &.active {
        background-color: transparent !important;
        color: ${() => {
            return color.primary;
        }} !important;
    }
    .btn-list {
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }
    .fa-angle-right {
        transition: all 0.25s ease;
        &.active {
            transition: all 0.25s ease;
            transform: rotate(90deg);
        }
    }
`;
const SidebarListStyle = styled.div`
    a {
        color: #fff;
        transition: all 0.25s ease;
        &:hover {
            transition: all 0.25s ease;
            color: #fff;
            opacity: 1;
        }
        &.active {
            color: ${() => {
                return color.primary;
            }};
        }
    }
`;
const Sidebar = (props) => {
    const { routes = [] } = props;
    const createLinkComponentsHome = (routes) => {
        return routes
            .filter((item) => !item.setting)
            .map((prop, key) => {
                return (
                    <NavItem key={key}>
                        <Link
                            to={`${prop.path}`}
                            // tag={NavLinkRRD}
                            // onClick={this.closeCollapse}
                            className={`nav-link ${
                                window.location.pathname.split("/")[1] ===
                                prop.sidebar.activeName
                                    ? "active"
                                    : ""
                            }`}
                        >
                            {prop.sidebar.icon && (
                                <i className={`${prop.sidebar.icon} mr-2`} />
                            )}
                            {prop.sidebar.name}
                        </Link>
                    </NavItem>
                );
            });
    };
    const createLinkComponents = (routes) => {
        return routes
            .filter((item) => item.setting === "particle")
            .map((prop, key) => {
                return (
                    <NavItem key={key}>
                        <Link
                            to={`${prop.path}`}
                            // tag={NavLinkRRD}
                            // onClick={this.closeCollapse}
                            className={`nav-link nav-component ${
                                window.location.pathname.split("/")[1] ===
                                prop.sidebar.activeName
                                    ? "active"
                                    : ""
                            }`}
                        >
                            {prop.sidebar.icon && (
                                <i className={`${prop.sidebar.icon} mr-2`} />
                            )}
                            {prop.sidebar.name}
                        </Link>
                    </NavItem>
                );
            });
    };
    const SidebarList = ({ data }) => {
        const [isShow, setShow] = React.useState(
            window.location.pathname.split("/")[1] === data.activeList
                ? true
                : false
        );
        const handleShowList = () => {
            setShow(!isShow);
        };
        return (
            <div
                style={{
                    borderBottom: `2px solid #fff`,
                    width: "100%",
                }}
            >
                <ButtonStyle
                    onClick={handleShowList}
                    className={isShow ? "active" : ""}
                >
                    {data.sidebar.icon && (
                        <i className={`${data.sidebar.icon} mr-2`} />
                    )}
                    <div className="btn-list">
                        {data.sidebar.name}
                        <i
                            className={`fas fa-angle-right ${
                                isShow ? "active" : ""
                            }`}
                        />
                    </div>
                </ButtonStyle>
                {isShow && (
                    <SidebarListStyle>
                        {data.children.map((list, key) => {
                            return (
                                <Link
                                    key={key}
                                    to={`${list.path}`}
                                    // tag={NavLinkRRD}
                                    // onClick={this.closeCollapse}
                                    className={`nav-link nav-component ${
                                        window.location.pathname.split(
                                            "/"
                                        )[2] === list.sidebar.activeName
                                            ? "active"
                                            : ""
                                    }`}
                                    style={{
                                        borderBottom: "unset",
                                        paddingLeft: 40,
                                        fontSize: 14,
                                    }}
                                >
                                    {list.sidebar.icon && (
                                        <i
                                            className={`${list.sidebar.icon} mr-2`}
                                        />
                                    )}
                                    {list.sidebar.name}
                                </Link>
                            );
                        })}
                    </SidebarListStyle>
                )}
            </div>
        );
    };
    const createLinkMolekul = (routes) => {
        return routes
            .filter((item) => item.setting === "molekul")
            .map((prop, key) => {
                return (
                    <React.Fragment key={key}>
                        {prop.children ? (
                            <SidebarList data={prop} />
                        ) : (
                            <NavItem>
                                <Link
                                    to={`${prop.path}`}
                                    // tag={NavLinkRRD}
                                    // onClick={this.closeCollapse}
                                    className={`nav-link nav-component ${
                                        window.location.pathname.split(
                                            "/"
                                        )[1] === prop.sidebar.activeName
                                            ? "active"
                                            : ""
                                    }`}
                                >
                                    {prop.sidebar.icon && (
                                        <i
                                            className={`${prop.sidebar.icon} mr-2`}
                                        />
                                    )}
                                    {prop.sidebar.name}
                                </Link>
                            </NavItem>
                        )}
                    </React.Fragment>
                );
            });
    };
    return (
        <Style>
            <Nav className="mb-4">{createLinkComponentsHome(routes)}</Nav>
            <h6 className="navbar-heading ">
                <small className="text-white">Components</small>
            </h6>
            <Nav className="mb-5">{createLinkComponents(routes)}</Nav>
            <h6 className="navbar-heading ">
                <small className="text-white">Molekul</small>
            </h6>
            <Nav>{createLinkMolekul(routes)}</Nav>
        </Style>
    );
};
export default Sidebar;
