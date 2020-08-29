import React from "react";
import Style from "./style";
const ButtonStyle = (props) => {
    return <Style {...props}>{props.children}</Style>;
};
export default ButtonStyle;
