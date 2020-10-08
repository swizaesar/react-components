import React, { useState } from "react";
import { FormGroup, Label, FormFeedback, FormText } from "reactstrap";
import NumberFormat from "react-number-format";
import FormStyle from "../index.style";

const FormNumberPhone = (props) => {
    const {
        help = false,
        label = "",
        name = "input-phone",
        error = false,
    } = props;
    const [value, setValue] = useState("");

    return (
        <FormStyle>
            <FormGroup>
                <Label for={name}>{label}</Label>
                <NumberFormat
                    id={name}
                    name={name}
                    className={
                        error
                            ? "is-invalid form-control"
                            : "form-control-alternative form-control"
                    }
                    format="(####) ####-####"
                    onValueChange={(vals) =>
                        setValue({ value: vals.formattedValue })
                    }
                    value={value}
                    mask="_"
                    {...props}
                ></NumberFormat>
                {error && <FormFeedback>{error}</FormFeedback>}
                {help && <FormText>{help}</FormText>}
            </FormGroup>
        </FormStyle>
    );
};

export default FormNumberPhone;
