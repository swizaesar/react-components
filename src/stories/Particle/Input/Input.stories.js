import React from "react";

import { InputStyle } from "./Input";

export default {
    title: "Example/Components/Input",
    component: InputStyle,
    argTypes: {
        backgroundColor: { control: "color" },
    },
};

const Template = (args) => <InputStyle {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    label: "InputStyle",
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: "InputStyle",
};

export const Large = Template.bind({});
Large.args = {
    size: "large",
    label: "InputStyle",
};

export const Small = Template.bind({});
Small.args = {
    size: "small",
    label: "InputStyle",
};
