import React from "react";
import styled from "styled-components";
import { color } from "../../../Utils/VariableName";

const Style = styled.div`
    width: max-content;
    .btn {
        &-order {
            border: none;
            border-radius: 50%;
            font-size: 16px;
            transition: all 0.25s ease;

            background: ${color.primary};
            color: ${color.user.primary};
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
const InputOrder = ({
    handleUpdateDataOrder = () => {},
    onGetValue = () => {},
    max = 100,
    defaultValue = 1,
}) => {
    const [orderItem, setOrderItem] = React.useState(defaultValue);

    const handleAddItem = () => {
        let value = orderItem;
        if (value > max) {
            setOrderItem(max);
        }
        if (value < max) {
            setOrderItem(value + 1);
        }
        handleUpdateDataOrder(value + 1);
    };
    const handleRemoveItem = () => {
        let value = orderItem;
        setOrderItem(value - 1);
        if (value < 1) {
            setOrderItem(0);
        }
        handleUpdateDataOrder(value - 1);
    };
    const handleChangeItem = (e) => {
        let value = e.target.value.replace(/[^0-9]/g, "");
        if (value < 1) {
            setOrderItem(0);
        }
        if (value > max) {
            setOrderItem(max);
        }
        if (value < max) {
            setOrderItem(Number(value));
        }
        handleUpdateDataOrder(value);
    };
    React.useEffect(() => {
        onGetValue(orderItem);
    });

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
            {orderItem === max && (
                <div className="error">
                    <i className="text-secondary">
                        Jumlah barang yang tersedia adalah {max}
                    </i>
                </div>
            )}
        </Style>
    );
};
export default InputOrder;
