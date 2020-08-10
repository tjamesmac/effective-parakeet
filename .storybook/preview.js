import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../lib/front/Theme';
import { GlobalStyle } from '../lib/front/app';

const ThemeWrapper = storyFn => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {storyFn()}
  </ThemeProvider>
);

addDecorator(ThemeWrapper);
