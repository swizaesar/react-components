import styled from "styled-components";
import { Navbar } from "reactstrap";
import { sidebar } from "../../Utils/Variable";
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
    background: #33383e;
    width: ${sidebar.width}px;
    .navbar-heading {
        padding-left: 10px;
    }
    .nav-item {
        display: block;
        width: 100%;
        .nav-link {
            color: #aaa;
            transition: all 0.5s ease;
        }
        &:hover {
            .nav-link {
                color: #fff;
            }
        }
        .active {
            color: #fff;
        }
    }
    .nav-component {
        border-bottom: 2px solid #41474e;
    }
`;
export default Style;
