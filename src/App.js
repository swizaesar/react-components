import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AuthLayout from "./Routes/RouteGuestLayout";
const App = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" render={(props) => <AuthLayout />} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
