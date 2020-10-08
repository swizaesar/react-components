import styled from "styled-components";
import { Button } from "reactstrap";
import { variable } from "../../../Utils/variable";

const Style = styled(Button)`
    color: ${(props) =>
        props.color === "primary"
            ? "#fff"
            : props.color === "outline-primary"
            ? variable.color.primary
            : props.color};
    background: ${(props) =>
        props.color === "primary"
            ? variable.color.primary
            : props.color === "outline-primary"
            ? "#fff"
            : "#fff"};
    border: ${(props) =>
        props.color === "primary"
            ? `1px solid ${variable.color.primary}`
            : props.color === "outline-primary"
            ? `1px solid  ${variable.color.primary}`
            : `1px solid  ${props.color}`};
    font-weight: 700;
    transform: translateY(0px);
    transition: all 0.25s ease;
    font-size: ${(props) => (props.size ? props.size + "px" : "14px")};
    &:hover {
        color: ${(props) =>
            props.color === "primary"
                ? "#fff"
                : props.color === "outline-primary"
                ? variable.color.primary
                : props.color};
        background: ${(props) =>
            props.color === "primary"
                ? variable.color.primary
                : props.color === "outline-primary"
                ? "#fff"
                : "#fff"};
        border: ${(props) =>
            props.color === "primary"
                ? `1px solid ${variable.color.primary}`
                : props.color === "outline-primary"
                ? "1px solid  #fff"
                : `1px solid  ${props.color}`};
        opacity: 0.8;
        transform: translateY(-1px);
    }
    &:focus {
        color: ${(props) =>
            props.color === "primary"
                ? "#fff"
                : props.color === "outline-primary"
                ? variable.color.primary
                : props.color};
        background: ${(props) =>
            props.color === "primary"
                ? variable.color.primary
                : props.color === "outline-primary"
                ? "#fff"
                : "#fff"};
        border: ${(props) =>
            props.color === "primary"
                ? `1px solid ${variable.color.primary}`
                : props.color === "outline-primary"
                ? "1px solid  #fff"
                : `1px solid  ${props.color}`};
        opacity: 0.8;
        transform: translateY(-1px);
    }
`;
export default Style;
