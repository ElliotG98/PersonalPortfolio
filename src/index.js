import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Landing from './Components/Landing.js';
import About from './Components/About.js';
import Work from './Components/Work.js';

ReactDOM.render(
  <React.StrictMode>
    <Landing />
    <About />
    <Work />
  </React.StrictMode>,
  document.getElementById('root')
);
