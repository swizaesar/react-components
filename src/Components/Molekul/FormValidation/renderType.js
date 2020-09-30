import React from "react";
import FormText from "../../Particle/Form/FormText";

import FormEmail from "../../Particle/Form/FormEmail";
import UploadFile from "../../Particle/Form/UploadFile";
import ImageUpload from "../../Particle/Form/UploadImage";
import FormPrice from "../../Particle/Form/FormPrice";
import FormUploadImageMultiple from "../../Particle/FormUploadImageMutiple";
import InputRangeMultiple from "../../Particle/Form/InputRange";

const renderType = ({
    id,
    item,
    isStatus,
    onGetValue = () => {},
    validateEmail = () => {},
    validateForm = true,
}) => {
    return {
        text: () => {
            return (
                <FormText
                    validateForm={validateForm}
                    item={item}
                    isStatus={isStatus}
                    id={id}
                    onGetValue={onGetValue}
                />
            );
        },
        textarea: () => {
            return (
                <FormText
                    validateForm={validateForm}
                    item={item}
                    isStatus={isStatus}
                    id={id}
                    onGetValue={onGetValue}
                />
            );
        },
        email: () => {
            return (
                <FormEmail
                    validateForm={validateForm}
                    validateEmail={validateEmail}
                    item={item}
                    isStatus={isStatus}
                    id={id}
                    onGetValue={onGetValue}
                />
            );
        },
        file: () => {
            return (
                <UploadFile
                    validateForm={validateForm}
                    validateEmail={validateEmail}
                    item={item}
                    isStatus={isStatus}
                    id={id}
                    onGetValue={onGetValue}
                />
            );
        },
        uploadImage: () => {
            return (
                <ImageUpload
                    validateForm={validateForm}
                    validateEmail={validateEmail}
                    item={item}
                    isStatus={isStatus}
                    id={id}
                    onGetValue={onGetValue}
                />
            );
        },
        uploadImageMultiple: () => {
            return (
                <FormUploadImageMultiple
                    validateForm={validateForm}
                    item={item}
                    isStatus={isStatus}
                    id={id}
                    onGetValue={onGetValue}
                />
            );
        },
        price: () => {
            return (
                <FormPrice
                    validateForm={validateForm}
                    item={item}
                    isStatus={isStatus}
                    id={id}
                    onGetValue={onGetValue}
                />
            );
        },
        inputRange: () => {
            return (
                <InputRangeMultiple
                    validateForm={validateForm}
                    item={item}
                    isStatus={isStatus}
                    id={id}
                    onGetValue={onGetValue}
                />
            );
        },
    };
};
export default renderType;
