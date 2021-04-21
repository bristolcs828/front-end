import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss'
import App from './App';
import * as serviceWorker from './serviceWorker';

function preventBehavior(e: any) {
  e.preventDefault();
};

document.addEventListener("touchmove", preventBehavior, { passive: false });
ReactDOM.render(
  <App />,
  document.getElementById('root')
);


serviceWorker.unregister();
