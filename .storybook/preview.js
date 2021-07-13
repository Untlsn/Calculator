import CombineProvider from '../../../React/Portfolio/src/providers/StyleProvider';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
      <CombineProvider>
        <Story />
      </CombineProvider>
  )
]