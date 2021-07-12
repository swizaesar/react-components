import { lazy } from "react";
import LandingPage from "../Pages/LandingPage";
import Button from "../Pages/Button";
import Rating from "../Pages/Rating";
import FormText from "../Pages/ValidationForm/FormText";
import FormEmail from "../Pages/ValidationForm/FormEmail";
import FormPhoneNumber from "../Pages/ValidationForm/FormPhoneNumber";
import FormPassword from "../Pages/ValidationForm/FormPassword";
import FormTextarea from "../Pages/ValidationForm/FormTextarea";
import Tab from "../Pages/Tab";
import Using from "../Pages/ValidationForm/Using";

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
                component: Using,
                layout: import("./RouteGuestLayout"),
                path: "/form/using",
                label: "Penggunaan",
                sidebar: {
                    icon: "fas fa-wallet mr-2",
                    name: "Penggunaan",
                    activeName: "using",
                },
            },
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
            {
                isHeader: true,
                isFooter: true,
                component: FormEmail,
                layout: import("./RouteGuestLayout"),
                path: "/form/input-email",
                label: "Input Email",
                sidebar: {
                    icon: "fas fa-wallet mr-2",
                    name: "Input Email",
                    activeName: "input-email",
                },
            },
            {
                isHeader: true,
                isFooter: true,
                component: FormPhoneNumber,
                layout: import("./RouteGuestLayout"),
                path: "/form/input-phone",
                label: "Input Phone Number",
                sidebar: {
                    icon: "fas fa-wallet mr-2",
                    name: "Input Phone Number",
                    activeName: "input-phone",
                },
            },
            {
                isHeader: true,
                isFooter: true,
                component: FormPassword,
                layout: import("./RouteGuestLayout"),
                path: "/form/input-password",
                label: "Input Password",
                sidebar: {
                    icon: "fas fa-wallet mr-2",
                    name: "Input Password",
                    activeName: "input-password",
                },
            },
            {
                isHeader: true,
                isFooter: true,
                component: FormTextarea,
                layout: import("./RouteGuestLayout"),
                path: "/form/input-textarea",
                label: "Input Textarea",
                sidebar: {
                    icon: "fas fa-wallet mr-2",
                    name: "Input Textarea",
                    activeName: "input-textarea",
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
