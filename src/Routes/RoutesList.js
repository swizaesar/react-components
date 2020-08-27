import { lazy } from "react";

export default [
    {
        component: lazy(() => import("../Pages/LandingPage")),
        path: "/",
        isHeader: true,
        role: ["guest"],
        layout: "",
        isFooter: true,
        title: "Home",
    },
];
