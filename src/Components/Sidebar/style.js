import styled from "styled-components";
import { Navbar } from "reactstrap";
import { color } from "../../Utils/VariableName";
const Style = styled(Navbar)`
    position: fixed;
    display: block;
    overflow: auto;
    left: 0;
    top: 0;
    margin: 0;
    padding: 50px 0 0;
    bottom: 0;
    height: 100%;
    background: #000000;
    width: 250px;
    .navbar-heading {
        padding-left: 10px;
    }
    .nav-item {
        display: block;
        width: 100%;
        .nav-link {
            color: #fff;
            font-weight: 600;
            transition: all 0.5s ease;
        }
        &:hover {
            .nav-link {
                color: ${color.primary};
            }
        }
        .active {
            color: ${color.primary};
        }
    }
    .nav-component {
        border-bottom: 2px solid #fff;
        &.active {
            border-color: ${color.primary};
        }
    }
`;
export default Style;
