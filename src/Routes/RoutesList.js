import LandingPage from "../Pages/LandingPage";
import Button from "../Pages/Button";
import Rating from "../Pages/Rating";
import FormText from "../Pages/ValidationForm/FormText";
import FormEmail from "../Pages/ValidationForm/FormEmail";
import FormPhoneNumber from "../Pages/ValidationForm/FormPhoneNumber";
import FormPassword from "../Pages/ValidationForm/FormPassword";
import FormTextarea from "../Pages/ValidationForm/FormTextarea";
import FormSelect from "../Pages/ValidationForm/FormSelect";
import FormImage from "../Pages/ValidationForm/FormImage";
import FormImageMultiple from "../Pages/ValidationForm/FormImageMultiple";
import Tab from "../Pages/Tab";
import Using from "../Pages/ValidationForm/Using";
import FormPrice from "../Pages/ValidationForm/FormPrice";
import FormatMoney from "../Pages/FormatMoney";

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
        component: FormatMoney,
        layout: import("./RouteGuestLayout"),
        path: "/format-money",
        isHeader: true,
        isFooter: true,
        setting: "particle",
        sidebar: {
            icon: "fas fa-wallet mr-2",
            name: "Format Number",
            activeName: "format-money",
        },
        title: "Format Money",
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
            {
                isHeader: true,
                isFooter: true,
                component: FormSelect,
                layout: import("./RouteGuestLayout"),
                path: "/form/input-select",
                label: "Input Select",
                sidebar: {
                    icon: "fas fa-wallet mr-2",
                    name: "Input Select",
                    activeName: "input-select",
                },
            },
            {
                isHeader: true,
                isFooter: true,
                component: FormImage,
                layout: import("./RouteGuestLayout"),
                path: "/form/input-image",
                label: "Input Image",
                sidebar: {
                    icon: "fas fa-wallet mr-2",
                    name: "Input Image",
                    activeName: "input-image",
                },
            },
            {
                isHeader: true,
                isFooter: true,
                component: FormImageMultiple,
                layout: import("./RouteGuestLayout"),
                path: "/form/input-image-multiple",
                label: "Input Image Multiple",
                sidebar: {
                    icon: "fas fa-wallet mr-2",
                    name: "Input Image Multiple",
                    activeName: "input-image-multiple",
                },
            },

            {
                isHeader: true,
                isFooter: true,
                component: FormPrice,
                layout: import("./RouteGuestLayout"),
                path: "/form/input-price",
                label: "Input Harga",
                sidebar: {
                    icon: "fas fa-wallet mr-2",
                    name: "Input Harga",
                    activeName: "input-price",
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
