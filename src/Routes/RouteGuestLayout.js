import React, { Suspense, useEffect, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import routesList from "./RoutesList";
import Sidebar from "../Components/Sidebar";
import styled from "styled-components";
import { sidebar } from "../Utils/variable";
// import {sidebar} from ''

const Style = styled.section`
    width: calc(100% - ${sidebar.width}px);
    margin: 0 0 0 auto;
    padding: 20px;
`;
// import Header from "../Components/Header";

const RouteGuestLayout = (props) => {
    return (
        <Switch>
            <Suspense fallback={<div>Loading...</div>}>
                <Sidebar routes={routesList.filter((item) => item.sidebar)} />

                <Style>
                    {routesList
                        .filter((item) => item.layout === "")
                        .map((item, key) => {
                            return (
                                <Fragment key={key}>
                                    {/* {item.isHeader === true &&
                                item.path === window.location.pathname ? (
                                    <Header />
                                ) : (
                                    false
                                )} */}
                                    {/* {/* {item.isSidebar === true && */}

                                    <div id="content-page">
                                        <Route
                                            exact
                                            path={item.path}
                                            component={item.component}
                                        />
                                    </div>
                                    {/* {item.isFooter === true &&
                                item.path === window.location.pathname ? (
                                    <Footer />
                                ) : (
                                    false
                                )} */}
                                </Fragment>
                            );
                            return "false";
                        })}
                </Style>
            </Suspense>
        </Switch>
    );
};

export default RouteGuestLayout;
