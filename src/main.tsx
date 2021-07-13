import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { StyleProvider } from '@providers';

ReactDOM.render(
  <React.StrictMode>
    <StyleProvider>
      <App />
    </StyleProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);