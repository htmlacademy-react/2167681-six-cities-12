import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Counter, City } from './utils/consts';
import { renderArrayMocks } from './mocks/render';

const Settings = {
  countOffers: Counter.Count_offers,
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
    <App countOffers={Settings.countOffers} isAuth={Settings.isAuth} offers={OfferDataSet.offers}
      cityCatalog={City}
    />
  </React.StrictMode>,
);
