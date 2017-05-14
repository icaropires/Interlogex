import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import "../node_modules/react-mdl/extra/material.css";
import "../node_modules/react-mdl/extra/material.js";

window.onload = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
}
