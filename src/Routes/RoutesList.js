import { lazy } from "react";

export default [
    {
        component: lazy(() => import("../Pages/LandingPage")),
        path: "/",
        isHeader: true,
        layout: "",
        isFooter: true,
        sidebar: {
            icon: "fas fa-wallet #000",
            name: "Home",
            activeName: "home",
        },
        title: "Home",
    },
];
