import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Counters } from './utils/consts';
import { renderArrayMocks } from './mocks/render';

const Settings = {
  countOffers: Counters.Count_offers,
  isAuth: true,
  offers: renderArrayMocks(Counters.Count_offers),
  favoritesOffers: renderArrayMocks(Counters.Favorites_offers)
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App countOffers={Settings.countOffers} isAuth={Settings.isAuth} /* offers={Settings.offers} *//>
  </React.StrictMode>,
);
