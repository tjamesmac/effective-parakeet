module.exports = {
  stories: ['../lib/front/components/**/*.stories.(ts|tsx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs',
    '@storybook/addon-notes',
    '@storybook/addon-viewport',
    '@storybook/addon-storysource',
    { name: '@storybook/addon-docs', options: { configureJSX: true } }
  ],
  typescript: {
    check: false,
    checkOptions: {}
    // reactDocgen: 'react-docgen-typescript',
    // reactDocgenTypescriptOptions: {
    //   shouldExtractLiteralValuesFromEnum: true,
    //   propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    // },
  }
};
