import styled from "styled-components";
import { Button } from "reactstrap";

const Style = styled(Button)`
    font-size: ${(props) => (props.size ? props.size + "px" : false)};
    padding: ${(props) => (props.padding ? props.padding : false)};
`;
export default Style;
