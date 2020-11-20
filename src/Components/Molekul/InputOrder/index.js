import React from "react";
import styled from "styled-components";
import { color } from "../../../Utils/Variable";

const Style = styled.div`
    width: max-content;
    .btn {
        &-order {
            border: none;
            border-radius: 50%;
            font-size: 16px;
            transition: all 0.25s ease;

            background: ${color.primary};
            color: #fff;
            &.disabled {
                background: #e8e8e8;
                color: #5d5d5d;
            }
        }
    }
    .order {
        &-form {
            display: flex;
            align-items: center;
            &__item {
                width: 50px;
                overflow: auto;
                margin: 0 10px;
                text-align: center;
                border: none;
                border-bottom: 1px solid #000;
                &:focus {
                    outline: unset;
                    box-shadow: unset;
                }
            }
            input::-webkit-outer-spin-button,
            input::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
            }
        }
    }
    .error {
        font-size: 12px;
        position: absolute;
        bottom: -25px;
        left: 0;
        right: 0;
    }
`;
const InputOrder = () => {
    const [orderItem, setOrderItem] = React.useState(1);

    const handleAddItem = () => {
        setOrderItem(orderItem + 1);
    };
    const handleRemoveItem = () => {
        let value = orderItem;
        setOrderItem(value - 1);
        if (value < 1) {
            setOrderItem(0);
        }
    };
    const handleChangeItem = (e) => {
        let value = e.target.value.replace(/[^0-9]/g, "");
        if (value < 1) {
            setOrderItem(0);
        }
        if (value === NaN) {
            setOrderItem(0);
        }
        setOrderItem(Number(value));
    };
    return (
        <Style id="input-order">
            <div className="order-form">
                <button
                    className={`btn-order ${orderItem < 2 ? "disabled" : ""}`}
                    type="button"
                    onClick={handleRemoveItem}
                    disabled={orderItem < 2 ? true : false}
                >
                    <i className="fas fa-minus"></i>
                </button>
                <input
                    type="text"
                    pattern="[0-9]"
                    name="order-item"
                    className="order-form__item"
                    value={orderItem}
                    placeholder="0"
                    onChange={handleChangeItem}
                />
                <button
                    className="btn-order"
                    type="button"
                    onClick={handleAddItem}
                >
                    <i className="fas fa-plus"></i>
                </button>
            </div>
            {orderItem < 1 && (
                <div className="error">
                    <i className="text-danger">
                        Minimal pembelian produk 1 barang
                    </i>
                </div>
            )}
        </Style>
    );
};
export default InputOrder;
