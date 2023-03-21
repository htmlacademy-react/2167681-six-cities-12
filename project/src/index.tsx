import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Counter, CatalogCity } from './utils/consts';
import { renderArrayMocks } from './mocks/render';
import {city} from './mocks/city';

const Settings = {
  isAuth: false,
  cityCatalog: CatalogCity,
  city: city
} as const;

const OfferDataSet = {
  offers: renderArrayMocks(Counter.Offers),
} as const;


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App isAuth={Settings.isAuth} offers={OfferDataSet.offers}
      cityCatalog={CatalogCity} city={city}
    />
  </React.StrictMode>,
);
