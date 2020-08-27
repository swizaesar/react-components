import styled from "styled-components";
import { Nav } from "reactstrap";
import { sidebar } from "../../Utils/variable";
const Style = styled(Nav)`
    position: fixed;
    overflow: auto;
    left: 0;
    top: 0;
    margin: 0;
    padding: 20px;
    bottom: 0;
    height: 100%;
    background: #ddd;
    width: ${sidebar.width}px;
`;
export default Style;
