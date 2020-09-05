import styled from "styled-components";

const FormUploadImageMultipleStyle = styled.div`
    .box-image {
        &-img {
            height: 120px;
            width: 120px;
            background: #fff;
            border: 1px dashed #4a4a4a;
            display: inline-block;
            border-radius: 12px;
            margin-right: 10px;
            margin-bottom: 0;
            cursor: pointer;
            position: relative;
            &.no-pointer {
                cursor: not-allowed;
            }
            &:focus {
                outline: none;
            }
            button {
                font-size: 12px;
                position: absolute;
                top: 5px;
                right: 2px;
                border-radius: 50%;
            }
            .loading {
                position: absolute;
                top: -14px;
                left: 4px;
                right: 0;
                bottom: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                .plus-icon {
                    font-size: 75px;
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

export default FormUploadImageMultipleStyle;
