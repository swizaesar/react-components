import React, { useRef, useState } from "react";
import {
    FormGroup,
    Label,
    FormFeedback,
    FormText,
    Button,
    Input,
    Row,
    Col,
} from "reactstrap";
import FormUploadImageMultipleStyle from "./index.style";
// import DummyImage from "../../../assets/img/default-image/deault-avatar.png";
// import service from "../../../services";
import { useEffect } from "react";
// import GrowingLoading from "../../../Components/Loading/GrowingLoading";

const FormUploadImageMultiple = ({
    image = null,
    item,
    isStatus,
    id,
    onGetValue = () => {},
    validateForm,
}) => {
    // const [isLoading, setLoading] = useState(false);
    // const [isLoadingRemove, setLoadingRemove] = useState(false);

    const [isValid, setValid] = useState(false);
    const [isFirstGet, setFirstGet] = useState(false);
    const [data, setData] = useState([]);
    const refInput = useRef();

    useEffect(() => {
        if (!isFirstGet) {
            setData(item.value);
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
        return () => {};
    }, []);
    const eventOnClickImage = (e) => {
        e.preventDefault();
        refInput.current.click();
    };

    const eventOnChangeInputFile = (e) => {
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {};
        // setLoading(true);
        //
        onPostData(file);
    };

    const onPostData = async (value) => {
        let formData = new FormData();
        const result = [];
        formData.append("images", URL.createObjectURL(value));
        const resultData = [
            {
                name: value.name,
                timeStamp: value.lastModified,
                size: value.size,
                type: value.type,
                link: URL.createObjectURL(value),
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
        e.preventDefault();
        // setLoadingRemove(true);
        onRemoveData(item);
    };
    useEffect(() => {
        if (!validateForm && !isFirstGet) {
            setValid(!item.status);
        }
    }, [validateForm]);
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
            console.log("isValid", isValid);
        }
    }, [isFirstGet]);
    console.log("data", data);
    return (
        <FormUploadImageMultipleStyle>
            {/* <GrowingLoading active={isLoadingRemove}></GrowingLoading> */}
            <FormGroup>
                {item.label && <Label for={item.name}>{item.label}</Label>}
                <input
                    className="d-none"
                    ref={refInput}
                    onChange={eventOnChangeInputFile}
                    type="file"
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
                        disabled={
                            item.max !== undefined && data.length === item.max
                                ? true
                                : false
                        }
                        onClick={eventOnClickImage}
                        className="box-image-img"
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
