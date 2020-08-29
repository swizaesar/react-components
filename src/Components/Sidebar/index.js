import React from "react";
import Style from "./style";
import { Nav, NavItem, NavLink } from "reactstrap";

const Sidebar = (props) => {
    const { routes = [] } = props;
    const createLinkComponentsHome = (routes) => {
        return routes
            .filter((item) => !item.setting)
            .map((prop, key) => {
                console.log("item", window.location.pathname.split("/")[1]);
                return (
                    <NavItem key={key}>
                        <NavLink
                            href={`${prop.path}`}
                            // tag={NavLinkRRD}
                            // onClick={this.closeCollapse}
                            className={
                                window.location.pathname.split("/")[1] ===
                                prop.sidebar.activeName
                                    ? "active"
                                    : ""
                            }
                        >
                            {prop.sidebar.icon && (
                                <i className={`${prop.sidebar.icon} mr-2`} />
                            )}
                            {prop.sidebar.name}
                        </NavLink>
                    </NavItem>
                );
            });
    };
    const createLinkComponents = (routes) => {
        return routes
            .filter((item) => item.setting === "particle")
            .map((prop, key) => {
                console.log("item", window.location.pathname.split("/")[1]);
                return (
                    <NavItem key={key}>
                        <NavLink
                            href={`${prop.path}`}
                            // tag={NavLinkRRD}
                            // onClick={this.closeCollapse}
                            className={`nav-component ${
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
                        </NavLink>
                    </NavItem>
                );
            });
    };
    const createLinkMolekul = (routes) => {
        return routes
            .filter((item) => item.setting === "molekul")
            .map((prop, key) => {
                console.log("item", window.location.pathname.split("/")[1]);
                return (
                    <NavItem key={key}>
                        <NavLink
                            href={`${prop.path}`}
                            // tag={NavLinkRRD}
                            // onClick={this.closeCollapse}
                            className={`nav-component ${
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
                        </NavLink>
                    </NavItem>
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
