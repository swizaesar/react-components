import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./RouteTypes";

const Routes = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route
                    path="/"
                    render={(props) => <PrivateRoute {...props} />}
                />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
