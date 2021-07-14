import React from 'react';
import StyleProvider from '../src/providers/StyleProvider';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => React.createElement(
      StyleProvider,
      null,
      React.createElement(Story)
  ),
];