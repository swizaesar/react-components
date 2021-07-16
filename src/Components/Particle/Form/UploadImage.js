import React, { useState, useRef, useEffect } from "react";
import { ImageUploadStyle } from "./index.style";
import { FormGroup } from "reactstrap";

const ImageUpload = ({ validateForm, item, id, onGetValue }) => {
    const [isValid, setValid] = useState(false);
    // const [errorInput, setValueText] = useState(true);
    const [image, setImage] = useState(item.value);
    const [invalidSetting, setInvalidSetting] = React.useState(false);
    const inputFileRef = useRef(null);
    const handleClickImage = () => {
        inputFileRef.current.click();
    };
    const handleOnChangeImage = (e) => {
        var _URL = window.URL || window.webkitURL;
        setInvalidSetting(true);
        var file, img;
        if ((file = e.target.files[0])) {
            console.log(item.setting);

            img = new Image();
            var objectUrl = _URL.createObjectURL(file);
            img.onload = function () {
                if (item.setting) {
                    if (
                        Number(this.width) === item.setting.width &&
                        Number(this.height) === item.setting.height
                    ) {
                        handleOnChangeImageAction(file);
                    } else {
                        onGetValue({
                            id: id,
                            name: item.name,
                            value: "",
                            status: false,
                        });
                    }
                } else {
                    handleOnChangeImageAction(file);
                }
                _URL.revokeObjectURL(objectUrl);
                setValid(!item.status);
            };
            img.src = objectUrl;
        }
    };
    const handleOnChangeImageAction = async (file) => {
        let value = "";
        if (item.normalData) {
            value = file;
        } else {
            value = await toBase64(file);
        }
        setImage(URL.createObjectURL(file));
        onGetValue({
            id: id,
            name: item.name,
            value: value,
            status:
                (value === null && item.required) ||
                (value === undefined && item.required) ||
                (value === "" && item.required)
                    ? false
                    : true,
        });
        setValid(!item.status);
    };

    const toBase64 = (file) =>
        new Promise((resolve, reject) => {
            if (file !== undefined) {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    return resolve(reader.result);
                };
                reader.onerror = (error) => reject(error);
            }
        });
    const handleSetValid = () => {
        if (!validateForm) {
            setValid(!item.status);
        }
    };
    const handleSetValidCallback = React.useCallback(handleSetValid);
    useEffect(() => {
        handleSetValidCallback();
    }, [handleSetValidCallback]);
    return (
        <ImageUploadStyle
            avatar={item.avatar}
            height={item.heightStyle}
            width={item.widthStyle}
        >
            <FormGroup>
                {item.label && (
                    <label htmlFor="">
                        {item.label}
                        {item.required && (
                            <span className="text-danger">*</span>
                        )}
                    </label>
                )}
                <input
                    id={item.name}
                    name={item.name}
                    ref={inputFileRef}
                    onChange={handleOnChangeImage}
                    type="file"
                    accept="image/x-png,image/gif,image/jpeg, image/jpg"
                />
                <div className="image" onClick={handleClickImage}>
                    {image && <img src={image} alt="" />}

                    <div className="label-title">
                        <span>{item.placeholder}</span>
                    </div>
                </div>
                {isValid ? (
                    <small className="text-danger">
                        <i>
                            {item.setting && invalidSetting
                                ? item.setting.valid
                                : item.valid}
                        </i>
                    </small>
                ) : (
                    false
                )}
            </FormGroup>
        </ImageUploadStyle>
    );
};

export default ImageUpload;
