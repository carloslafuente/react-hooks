import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CounterApp from './CounterApp';
import './index.css';

const root = document.querySelector('#root');
const res = (
  <Fragment>
    <App title='App' />
    <CounterApp value={10} />
  </Fragment>
);

ReactDOM.render(res, root);
