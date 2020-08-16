import * as React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../lib/front/Theme/index.ts';
import { GlobalStyle } from '../lib/front/app/index.tsx';

// const ThemeWrapper = storyFn => (
//   // <ThemeProvider theme={theme}>
//   <>
//     <GlobalStyle />
//     {storyFn()}
//   </>
//   // </ThemeProvider>
// );

// addDecorator(ThemeWrapper);
