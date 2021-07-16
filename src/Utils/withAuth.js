import React from "react";
import { useHistory } from "react-router";
import LocalStorage from "./LocalStorage";

export const withAuth = (AuthComponent) => () => {
    const history = useHistory();
    const user = LocalStorage().get("auth");
    //   const user = useAuthStore((state) => state.user);

    if (user) return <AuthComponent />;
    else if (typeof window !== "undefined") history.push("/");

    return null;
};
