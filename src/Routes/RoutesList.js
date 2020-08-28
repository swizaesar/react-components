import { lazy } from "react";

export default [
    {
        component: lazy(() => import("../Pages/LandingPage")),
        path: "/",
        isHeader: true,
        layout: "",
        isFooter: true,
        setting: false,
        sidebar: {
            icon: "fa fa-home mr-2",
            name: "Home",
            activeName: "",
        },
        title: "button",
    },
    {
        component: lazy(() => import("../Pages/Button")),
        path: "/button",
        isHeader: true,
        layout: "",
        isFooter: true,
        setting: "particle",
        sidebar: {
            icon: "fas fa-wallet mr-2",
            name: "Button",
            activeName: "button",
        },
        title: "Home",
    },
];
