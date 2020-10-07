import React from 'react';
import ReactDOM from 'react-dom';
import './css/global.css';
import App from './routes/main';
import Provider from './context/ContextAuth';
import { ToastProvider } from 'react-toast-notifications'

ReactDOM.render(
  <Provider>
    <ToastProvider
      autoDismiss
      autoDismissTimeout={4000}
      placement="top-right">
      <App />
    </ToastProvider>
  </Provider>,
  document.getElementById('root')
);


