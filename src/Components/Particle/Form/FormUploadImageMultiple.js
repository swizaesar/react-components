/* eslint-disable */
import React, { useRef, useState } from "react";
import { FormGroup, Label, Button } from "reactstrap";
// import DummyImage from "../../../assets/img/default-image/deault-avatar.png";
// import service from "../../../services";
import { useEffect } from "react";
import { useStore } from "../../../Reducers";
// import GrowingLoading from "../../../Components/Loading/GrowingLoading";
import styled from "styled-components";

const FormUploadImageMultipleStyle = styled.div`
    .box-image {
        display: flex;
        flex-wrap: wrap;
        &-img {
            height: 120px;
            width: 120px;
            background: #fff;
            border: 1px dashed #4a4a4a;
            display: inline-block;
            border-radius: 12px;
            margin-right: 10px;
            margin-bottom: 10px;
            cursor: pointer;
            position: relative;
            &.no-pointer {
                cursor: not-allowed;
            }
            &:focus {
                outline: none;
            }
            button {
                padding: 0px 5px;
                font-size: 12px;
                position: absolute;
                top: 0px;
                right: 0px;
                border-radius: 50%;
            }
            .loading {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                display: flex;
                justify-content: center;
                align-items: baseline;
                .plus-icon {
                    font-size: 70px;
                    color: #4a4a4a;
                }
            }
            img {
                width: 100%;
                height: 100%;
                display: block;
                border-radius: 12px;
                object-fit: contain;
            }
        }
    }
`;
const FormUploadImageMultiple = ({
    image = null,
    item,
    isStatus,
    id,
    onGetValue = () => {},
    validateForm,
    service = {
        group: false,
        key: false,
        api: () => {},
        productId: false,
    },
}) => {
    // const [isLoading, setLoading] = useState(false);
    // const [isLoadingRemove, setLoadingRemove] = useState(false);
    const { dispatch, state } = useStore();
    const [isValid, setValid] = useState(false);

    const [isId, setId] = useState(false);
    const [isFirstGet, setFirstGet] = useState(false);
    const [data, setData] = useState(item.value || []);
    const refInput = useRef();

    useEffect(() => {
        if (!isFirstGet) {
            setData(item.value);
            onGetValue({
                id: id,
                name: item.name,
                value: data,
                status: item.required
                    ? item.max !== undefined
                        ? data.length < 1
                            ? false
                            : true
                        : data.length < 1
                        ? false
                        : true
                    : true,
            });
            setFirstGet(true);
        }
        return () => {};
    }, []);
    const eventOnClickImage = (e) => {
        e.preventDefault();
        refInput.current.click();
    };

    const eventOnChangeInputFile = (e) => {
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = (e) => {};

        onPostData(file);

        // setLoading(true);
        //
    };

    const onPostData = async (value) => {
        let formData = new FormData();
        const result = [];
        let dataImage = "";

        dataImage = await toBase64(value);
        formData.append("images", URL.createObjectURL(value));
        const resultData = [
            {
                name: value.name,
                timeStamp: value.lastModified,
                size: value.size,
                type: value.type,
                link: dataImage,
            },
        ];
        // console.log("value", URL.createObjectURL(value));
        setData((prevState) => {
            return [...prevState, ...resultData];
        });

        // const result = await service({
        //     ...serviceOptions,
        //     data: formData
        // });
        // if (result?.status === 200) {
        //     setLoading(false);
        //     const resultData = [result.data];
        //     setData(prevState => {
        //         return [...prevState, ...resultData];
        //     });
        // }
        refInput.current.value = "";
        setFirstGet(false);
    };
    const toBase64 = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    const onRemoveData = async (value) => {
        // const result = await service({
        //     ...serviceOptionsRemove,
        //     url: `${serviceOptionsRemove.url}?id=${value.id}`
        // });
        // if (result?.status === 200) {
        //     setLoadingRemove(false);
        setData((prevState) => {
            return prevState.filter((item) => item !== value);
        });
        onGetValue({
            id: id,
            name: item.name,
            value: data,
            status:
                item.max !== undefined
                    ? data.length < 1
                        ? false
                        : true
                    : data.length < 1
                    ? false
                    : true,
        });
        setFirstGet(false);
        // }
    };
    const eventOnClickRemove = (e, item) => {
        setId(item);
        e.preventDefault();
        if (service.group) {
            let id = service.productId;
            let productId = item.id;
            service.api({ dispatch, productId, id });
        }
        if (!service.group) {
            onRemoveData(item);
        }
        // setLoadingRemove(true);
    };
    React.useEffect(() => {
        if (service.group) {
            if (state[service.group][service.key].isSuccess) {
                onRemoveData(isId);
            }
        }
    }, [state, service]);
    const handleSetValid = () => {
        if (!validateForm) {
            setValid(!item.status);
        }
    };
    const handleSetValidCallback = React.useCallback(handleSetValid);
    useEffect(() => {
        handleSetValidCallback();
    }, [handleSetValidCallback]);
    useEffect(() => {
        if (!isFirstGet) {
            onGetValue({
                id: id,
                name: item.name,
                value: data,
                status:
                    item.max !== undefined
                        ? data.length < 1
                            ? false
                            : true
                        : data.length < 1
                        ? false
                        : true,
            });
            setFirstGet(true);
        }
    }, [isFirstGet, id, item, data]);
    return (
        <FormUploadImageMultipleStyle>
            {/* <GrowingLoading active={isLoadingRemove}></GrowingLoading> */}
            <FormGroup>
                {item.label && (
                    <Label for={item.name} className={item.labelClass}>
                        {item.label}
                        {item.required && (
                            <span className="text-danger">*</span>
                        )}
                    </Label>
                )}
                <input
                    className="d-none"
                    ref={refInput}
                    onChange={eventOnChangeInputFile}
                    type="file"
                    accept="image/x-png,image/gif,image/jpeg, image/jpg"
                    name={item.name}
                />
                <div className="box-image">
                    {data.length > 0 &&
                        data.map((item, key) => {
                            return (
                                <div
                                    key={key}
                                    className="box-image-img no-pointer"
                                >
                                    <Button
                                        size="sm"
                                        color="danger"
                                        type="button"
                                        onClick={(e) =>
                                            eventOnClickRemove(e, item)
                                        }
                                    >
                                        <i className="fa fa-times text-white"></i>
                                    </Button>
                                    <img src={item.link} alt={item.name} />
                                    {/* {item[use] ? (
                                        <img src={item} alt="" />
                                    ) : (
                                        <img src={""} alt="" />
                                    )} */}
                                </div>
                            );
                        })}
                    <button
                        onClick={eventOnClickImage}
                        className={`box-image-img ${
                            item.max !== undefined && data.length === item.max
                                ? "d-none"
                                : ""
                        }`}
                    >
                        <div className="loading">
                            <span className="plus-icon">+</span>
                            {/* <Spinner
                                    style={{ width: "3rem", height: "3rem" }}
                                    type="grow"
                                /> */}
                        </div>
                        {image ? <img src={image} alt="" /> : false}
                    </button>
                </div>
                {isValid && (
                    <small className="text-danger">
                        <i>{item.valid}</i>
                    </small>
                )}
                {/* {help && <FormText>{help}</FormText>} */}
            </FormGroup>
        </FormUploadImageMultipleStyle>
    );
};

export default FormUploadImageMultiple;
