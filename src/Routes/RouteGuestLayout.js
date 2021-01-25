import React, { Suspense, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import routesList from "./RoutesList";
import Sidebar from "../Components/Sidebar";
import styled from "styled-components";
import { sidebar } from "../Utils/Variable";

const Style = styled.section`
    width: calc(100% - ${sidebar.width}px);
    margin: 0 0 0 auto;
    padding: 20px;
`;

const RouteGuestLayout = (props) => {
    return (
        <Switch>
            <Suspense fallback={<div>Loading...</div>}>
                {routesList
                    .filter(
                        (item) =>
                            window.location.pathname === item.path &&
                            item.sidebar
                    )
                    .map((item, key) => {
                        return (
                            <Sidebar
                                item={item}
                                key={key}
                                routes={routesList.filter(
                                    (item) => item.sidebar
                                )}
                            />
                        );
                    })}

                <Style>
                    <div id="content-page">
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

                                        <Route
                                            exact
                                            path={item.path}
                                            component={item.component}
                                        />
                                        {/* {item.isFooter === true &&
                                item.path === window.location.pathname ? (
                                    <Footer />
                                ) : (
                                    false
                                )} */}
                                    </Fragment>
                                );
                            })}
                    </div>
                </Style>
            </Suspense>
        </Switch>
    );
};

export default RouteGuestLayout;
