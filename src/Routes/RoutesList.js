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
        title: "Home",
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
        title: "Button",
    },
    {
        component: lazy(() => import("../Pages/Rating")),
        path: "/rating",
        isHeader: true,
        layout: "",
        isFooter: true,
        setting: "particle",
        sidebar: {
            icon: "fas fa-wallet mr-2",
            name: "Rating",
            activeName: "rating",
        },
        title: "Rating",
    },
    {
        component: lazy(() => import("../Pages/Molekul/ValidationForm")),
        path: "/validation-form",
        isHeader: true,
        layout: "",
        isFooter: true,
        setting: "molekul",
        sidebar: {
            icon: "fas fa-wallet mr-2",
            name: "Validation Form",
            activeName: "validation-form",
        },
        title: "Button",
    },
    {
        component: lazy(() => import("../Pages/Tab")),
        path: "/tab",
        isHeader: true,
        layout: "",
        isFooter: true,
        setting: "molekul",
        sidebar: {
            icon: "fas fa-wallet mr-2",
            name: "Tab Menu",
            activeName: "tab",
        },
        title: "Tab",
    },
];
