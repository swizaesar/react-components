// module.exports = {
//     stories: [
//         // "../src/Components/**/*.stories.mdx",
//         "../src/**/*.stories.@(js|jsx|ts|tsx)",
//     ],
//     addons: [
//         "@storybook/addon-links",
//         "@storybook/addon-essentials",
//         "@storybook/preset-create-react-app",
//     ],
// };
module.exports = {
    stories: ["../src/**/*.stories.@(js|mdx)"],
    addons: ["@storybook/addon-essentials"],
};
