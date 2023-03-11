import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Counter, City } from './utils/consts';
import { renderArrayMocks } from './mocks/render';

const Settings = {
  isAuth: false,
  cityCatalog: City,
} as const;

const OfferDataSet = {
  offers: renderArrayMocks(Counter.Offers),
  favoritesOffers: renderArrayMocks(Counter.Favorites_offers)
} as const;


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App isAuth={Settings.isAuth} offers={OfferDataSet.offers}
      cityCatalog={City}
    />
  </React.StrictMode>,
);
