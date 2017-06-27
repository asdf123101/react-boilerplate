import React from 'react';
import ReactDOM from 'react-dom';

const title = <h2>Test setup</h2>;

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();