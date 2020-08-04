import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../lib/front/Theme';

const ThemeWrapper = (storyFn) => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

addDecorator(ThemeWrapper);
