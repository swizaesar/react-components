import React, { useState, useRef, useEffect } from "react";
import { ImageUploadStyle } from "./index.style";
import { FormGroup } from "reactstrap";

const ImageUpload = ({ validateForm, item, isStatus, id, onGetValue }) => {
    const [isValid, setValid] = useState(false);
    const [image, setImage] = useState(item.value);
    const inputFileRef = useRef(null);
    const handleClickImage = () => {
        inputFileRef.current.click();
    };
    const handleOnChangeImage = async (e) => {
        e.preventDefault();
        const file = e.target.files[0];
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
                value === null || value === undefined || value === ""
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
                reader.onload = () => resolve(reader.result);
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
                {/* <div className="desc">
                Gambar (opsional) - Format jpeg/png, ukuran 2:3, max size 2:5mb
            </div> */}
                {isValid ? (
                    <small className="text-danger">
                        <i>{item.valid}</i>
                    </small>
                ) : (
                    false
                )}
            </FormGroup>
        </ImageUploadStyle>
    );
};

export default ImageUpload;
