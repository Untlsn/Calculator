const aliases = require('../.storybook/aliases')

module.exports = {
  webpackFinal: async(config) => {
    config.resolve.alias = aliases
    return config;
  },
  stories: [
    '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../src/**/stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
}