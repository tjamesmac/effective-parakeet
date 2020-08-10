import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './app/index';

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.render(<App />, rootElement);
}
