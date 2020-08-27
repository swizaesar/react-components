import React, { Suspense, useEffect, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import routesList from "./RoutesList";
// import Header from "../Components/Header";

const RouteGuestLayout = (props) => {
    return (
        <Switch>
            <Suspense fallback={<div>Loading...</div>}>
                {routesList
                    .filter((item) => item.layout === "")
                    .map((item, key) => {
                        document.title = item.title;
                        return (
                            <Fragment key={key}>
                                {/* {item.isHeader === true &&
                                item.path === window.location.pathname ? (
                                    <Header />
                                ) : (
                                    false
                                )} */}
                                <div>
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
            </Suspense>
        </Switch>
    );
};

export default RouteGuestLayout;
