import React from 'react';
import type { Preview, StoryFn } from "@storybook/react";
import { ChakraProvider, extendTheme } from '@chakra-ui/react';


const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  (Story: StoryFn) => (
    <ChakraProvider>
      <Story />
    </ChakraProvider>
  )
]

export default preview;
