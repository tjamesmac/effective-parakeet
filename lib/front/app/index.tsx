import * as React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import { theme } from '../Theme/index';

import ListItem from '../components/listItem/ListItem';

type ThemeType = typeof theme;

export const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
html {
  font-family: ${props => props.theme.font.family};
  font-size: ${props => props.theme.base.size};
}
`;

const App = () => {
  console.log('hello');
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div>Hello world</div>
        <ListItem
          title={'Hello'}
          url={'world.com'}
          selftext={'uh oh selftext'}
        />
      </ThemeProvider>
    </>
  );
};

export { App };
