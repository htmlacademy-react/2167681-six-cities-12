import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const Settings = {
  countOffers: 8888,
  isAuth: false,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App countOffers={Settings.countOffers} isAuth={Settings.isAuth}/>
  </React.StrictMode>,
);
