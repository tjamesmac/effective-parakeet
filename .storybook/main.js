module.exports = {
  stories: [
    "../lib/front/components/**/*.stories.js",
  ],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-knobs",
    "@storybook/addon-notes",
    "@storybook/addon-viewport",
    "@storybook/addon-storysource",
    { name: "@storybook/addon-docs", options: { configureJSX: true } },
  ],
};
