import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  framework: '@storybook/react-webpack5',
  addons: ['@storybook/addon-essentials', '@storybook/addon-docs'],
  stories: ['../packages/portfolio/**/*.stories.mdx', '../packages/portfolio/**/*.stories.@(js|jsx|ts|tsx)'],
  typescript: {
    check: true,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: prop => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
};

export default config;