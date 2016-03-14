import React from 'react';
import ReactDom from 'react-dom';
import Root from './containers/Root';

const appRoot = document.createElement('div');
document.body.appendChild(appRoot);

ReactDom.render(<Root />, appRoot);
