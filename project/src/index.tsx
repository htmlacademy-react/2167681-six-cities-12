import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { CatalogCity } from './utils/consts';
import { arrayOffers, arrayReviews } from './mocks/render';
import {city} from './mocks/city';

const Settings = {
  isAuth: false,
  cityCatalog: CatalogCity,
  city: city
} as const;

const OfferDataSet = {
  offers: arrayOffers,
  reviews: arrayReviews,
} as const;


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App isAuth={Settings.isAuth} offers={OfferDataSet.offers}
      cityCatalog={CatalogCity} city={city} reviews={OfferDataSet.reviews}
    />
  </React.StrictMode>,
);
