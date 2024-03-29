import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import routesList from "./RoutesList";
import Sidebar from "../Components/Sidebar";
import styled from "styled-components";

const Style = styled.section`
    width: calc(100% - 250px);
    margin: 0 0 0 auto;
    padding: 20px;
`;

const RouteGuestLayout = (props) => {
    const { item } = props;
    return (
        <Switch>
            <Suspense fallback={<div>Loading...</div>}>
                <div id="content-page">
                    {item.sidebar && (
                        <Sidebar
                            item={item}
                            routes={routesList.filter((item) => item.sidebar)}
                        />
                    )}
                    <Style>
                        <Route
                            exact
                            path={item.path}
                            component={item.component}
                        />
                    </Style>
                </div>
            </Suspense>
        </Switch>
    );
};

export default RouteGuestLayout;
