import { lazy } from "react";
import LandingPage from "../Pages/LandingPage";
import Button from "../Pages/Button";
import Rating from "../Pages/Rating";
import FormText from "../Pages/ValidationForm/FormText";
import Tab from "../Pages/Tab";

export default [
    {
        component: LandingPage,
        layout: import("./RouteGuestLayout"),
        path: "/",
        isHeader: true,
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
        component: Button,
        layout: import("./RouteGuestLayout"),
        path: "/button",
        isHeader: true,
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
        component: Rating,
        layout: import("./RouteGuestLayout"),
        path: "/rating",
        isHeader: true,
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
        activeList: "form",

        setting: "molekul",
        children: [
            {
                isHeader: true,
                isFooter: true,
                component: FormText,
                layout: import("./RouteGuestLayout"),
                path: "/form/input-text",
                label: "Input Text",
                sidebar: {
                    icon: "fas fa-wallet mr-2",
                    name: "Input Text",
                    activeName: "input-text",
                },
            },
        ],
        sidebar: {
            icon: "fas fa-wallet mr-2",
            name: "Validation Form",
            activeName: "form",
        },
        title: "Validation Form",
    },
    {
        component: Tab,
        layout: import("./RouteGuestLayout"),
        path: "/tab",
        isHeader: true,
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
