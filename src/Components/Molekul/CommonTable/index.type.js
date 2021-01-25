import React from "react";
import { Link } from "react-router-dom";
import { Progress } from "reactstrap";
import Button from "../../Particle/Button";
import { formatMoney, percentage } from "../../../Utils/PriceConverter";
import { Fragment } from "react";
import styled from "styled-components";

const ProgressStyle = styled(Progress)`
    background-color: #fff;
`;

const tableTypeActions = ({ actions, item, key }) => {
    return {
        isDelete: () => {
            return "masuk sini";
        },
        isDetailLink: () => {
            return "masuk sini";
        },
        isViewLink: () => {
            return (
                <Link to={item.url ? item.url : ""}>
                    <Button
                        className={key === 1 ? "ml-2" : ""}
                        color="primary"
                        size="sm"
                        type="button"
                    >
                        Lihat
                    </Button>
                </Link>
            );
        },
        isViewModal: () => {
            return (
                <Button
                    className={key === 1 ? "ml-2" : ""}
                    color="primary"
                    onClick={() => actions.function(item)}
                    size="sm"
                    type="button"
                >
                    Lihat
                </Button>
            );
        },
        isCostumeButton: () => {
            return (
                <Button
                    className={key === 1 ? "ml-2" : ""}
                    color={actions.color}
                    onClick={() => actions.function(item)}
                    size="sm"
                    type="button"
                >
                    {actions.name}
                </Button>
            );
        },
        isDeleteModal: () => {
            return (
                <Button
                    className={key === 1 ? "ml-2" : ""}
                    color="danger"
                    onClick={() => actions.function(item)}
                    size="sm"
                    type="button"
                >
                    {actions.name}
                </Button>
            );
        },
        isButtonAction: () => {
            return (
                <Button
                    className={key === 1 ? "ml-2" : ""}
                    color="primary"
                    size="sm"
                    type="button"
                >
                    Lihat
                </Button>
            );
        },
        isCostume: () => {
            return actions.renderItem(item, key);
        },
        isEditModal: () => {
            return "masuk sini";
        },
    };
};

const tableType = ({
    number,
    value,
    itemOptionTable,
    item,
    img,
    className,
    percent,
    key,
}) => {
    return {
        number: () => {
            return <span>{number}</span>;
        },
        price: () => {
            return <span>{value === null ? "-" : formatMoney(value)}</span>;
        },
        percent: () => {
            return <span>{value === null ? "-" : percentage(value)}</span>;
        },
        action: () => {
            return (
                <div className="d-flex justify-content-start">
                    <Button color="primary" size="sm" type="button">
                        Lihat
                    </Button>
                    <Button color="primary" size="sm" type="button">
                        Edit
                    </Button>
                    <Button color="primary" size="sm" type="button">
                        Hapus
                    </Button>
                </div>
            );
        },
        text: () => {
            return (
                <span
                    style={{ textTransform: "capitalize" }}
                    className={
                        value === null
                            ? "d-block text-center"
                            : `${className !== undefined ? className : ""}`
                    }
                >
                    {value === null ? "-" : value}
                </span>
            );
        },
        description: () => {
            return (
                <span title={value} className="text-description">
                    {value === null ? "-" : value}
                </span>
            );
        },
        profile: () => {
            return (
                <div className="d-flex align-items-center">
                    <img
                        src={img === null ? "" : img}
                        alt={value}
                        className="img-fluid mr-3"
                        style={{ width: "35px", borderRadius: "50%" }}
                    />
                    <div>
                        <span
                            className={
                                value === null ? "d-block text-center" : ""
                            }
                        >
                            {value === null ? "-" : value}
                        </span>
                        <ProgressStyle color="success" value={percent} />
                        <small>{percent}% Gig selesai</small>
                    </div>
                </div>
            );
        },
        actions: () => {
            return (
                <div className="d-flex justify-content-start">
                    {itemOptionTable.options.map((itemOptionsActions, key) => {
                        return (
                            <Fragment key={key}>
                                {tableTypeActions({
                                    actions: itemOptionsActions,
                                    item,
                                    key,
                                })[itemOptionsActions.actionType]()}
                            </Fragment>
                        );
                    })}
                </div>
            );
        },
    };
};

export default tableType;
