import React from 'react';
import ReactDOM from 'react-dom';
import './css/global.css';
import App from './routes/main';
import Provider from './context/ContextAuth';


ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);


