import React from "react";
import { FormGroup } from "reactstrap";
import ReactQuill from "react-quill";
import styled from "styled-components";

const Style = styled.div`
    .ql-editor {
        height: ${(props) =>
            props.height === undefined ? "200px" : `${props.height}px`};
    }
    .label-area {
        display: flex;
        align-items: center;
        justify-content: space-between;
        span {
            font-size: 12px;
            color: #aaa;
        }
    }
`;

const FormHTML = ({
    value,
    item,
    className,
    id,
    onGetValue = () => {},
    validateForm = true,
}) => {
    const [editorValue, setEditorValue] = React.useState(item.value);
    const [isValid, setValid] = React.useState(false);
    const module = {
        toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [
                { list: "ordered" },
                { list: "bullet" },
                { indent: "-1" },
                { indent: "+1" },
            ],
            [
                { align: "" },
                { align: "center" },
                { align: "right" },
                { align: "justify" },
            ],
            ["link"],
            ["clean"],
        ],
    };
    const format = [
        "background",
        "bold",
        "color",
        "font",
        "code",
        "italic",
        "link",
        "size",
        "strike",
        "script",
        "underline",
        "blockquote",
        "header",
        "indent",
        "list",
        "align",
        "direction",
        "code-block",
        "formula",
    ];
    const handleEditorChange = (content) => {
        setEditorValue(content);
        onGetValue({
            id: id,
            name: item.name,
            value: content,
            status:
                content.replace(/(<([^>]+)>)/gi, "").length >= item.maxLength
                    ? false
                    : true,
        });
        setValid(!item.status);
    };

    const handleSetValid = () => {
        if (!validateForm) {
            setValid(!item.status);
        }
    };
    const handleSetValidCallback = React.useCallback(handleSetValid);
    React.useEffect(() => {
        handleSetValidCallback();
    }, [handleSetValidCallback]);
    return (
        <Style height={item.height}>
            <FormGroup>
                <div className="label-area">
                    {item.label && (
                        <label htmlFor={item.id} className={item.labelClass}>
                            {item.label}
                            {item.required && (
                                <span className="text-danger">*</span>
                            )}
                        </label>
                    )}
                    {item.maxLength && (
                        <span
                            className={
                                editorValue.replace(/(<([^>]+)>)/gi, "")
                                    .length >
                                    item.maxLength - 1 && "text-danger"
                            }
                        >
                            {editorValue.replace(/(<([^>]+)>)/gi, "").length}/
                            {item.maxLength}
                        </span>
                    )}
                </div>
                <ReactQuill
                    theme="snow"
                    formats={format}
                    modules={module}
                    value={editorValue}
                    onChange={handleEditorChange}
                />
                {isValid ? (
                    <small className="text-danger">
                        <i>
                            {item.maxLength
                                ? `Maximal karakter ${item.maxLength}`
                                : item.valid}
                        </i>
                    </small>
                ) : (
                    false
                )}
            </FormGroup>
        </Style>
    );
};
export default FormHTML;
