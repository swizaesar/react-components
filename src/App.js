import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routesList from "./Routes/RoutesList";
import styled from "styled-components";
import CodeSplit from "./Components/CodeSplit";
// import FirstLoad from "./Components/Loading/FirstLoad";
const LoadingStyle = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .loading {
        width: 165px;
        margin: auto;
        &-border {
            position: fixed;
            z-index: 3;
        }
        @media (max-width: 575px) {
            width: 75px;
        }
    }
    @keyframes zoominoutsinglefeatured {
        0% {
            transform: scale(1, 1);
        }
        50% {
            transform: scale(1.2, 1.2);
        }
        100% {
            transform: scale(1, 1);
        }
    }
    .img-fluid {
        animation: zoominoutsinglefeatured 2s infinite;
    }
`;
const App = (props) => {
    return (
        <Router>
            <Switch>
                {/* <Route path="/" component={(props) => <AuthLayout />} /> */}
                {routesList.map((item, key) => {
                    return item.children ? (
                        item.children.map((item, key) => {
                            return (
                                <Route
                                    exact
                                    key={key}
                                    path={item.path}
                                    component={(props) => (
                                        <CodeSplit load={() => item.layout}>
                                            {(Component) => {
                                                return Component === null ? (
                                                    <LoadingStyle>
                                                        <div className="loading-border">
                                                            {/* <FirstLoad /> */}
                                                        </div>
                                                    </LoadingStyle>
                                                ) : (
                                                    <Component
                                                        item={item}
                                                        {...props}
                                                    />
                                                );
                                            }}
                                        </CodeSplit>
                                    )}
                                />
                            );
                        })
                    ) : (
                        <Route
                            exact
                            key={key}
                            path={item.path}
                            component={(props) => (
                                <CodeSplit load={() => item.layout}>
                                    {(Component) => {
                                        return Component === null ? (
                                            <LoadingStyle>
                                                <div className="loading-border">
                                                    {/* <FirstLoad /> */}
                                                </div>
                                                <div className="loading">
                                                    loading
                                                </div>
                                            </LoadingStyle>
                                        ) : (
                                            <Component item={item} {...props} />
                                        );
                                    }}
                                </CodeSplit>
                            )}
                        />
                    );
                })}
            </Switch>
        </Router>
    );
};

export default App;
