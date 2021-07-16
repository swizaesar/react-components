import React from "react";
import styled from "styled-components";
import { formatMoney } from "../../Utils/PriceConverter";
import { color } from "../../Utils/VariableName";
const Style = styled.div`
    .title {
        margin-bottom: 30px;
    }
    .example-buttons {
        margin: 30px 0;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }
    > .card {
        border-color: #ddd;
        background: #ddd;
    }
    .card-code {
        background: #282a2d;
        border-color: #282a2d;
    }
    .btn-link {
        color: ${() => {
            return color.primary;
        }};
        padding: 0;
        margin: 0;
        border: unset;
        text-decoration: underline;
        background: transparent;
        &:focus {
            outline: unset;
            box-shadow: unset;
        }
    }
`;
const FormatMoney = () => {
    return (
        <Style>
            <h3 className="title">Format Number</h3>
            <h4>{formatMoney({ amount: 10000, currency: "Rp " })}</h4>
        </Style>
    );
};
export default FormatMoney;
