import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { arrayOffers, arrayReviews } from './mocks/render';
import {city} from './mocks/city';
import { Provider } from 'react-redux';
import {store} from '../src/store/index';

const Settings = {
  isAuth: false,
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
    <Provider store={store}>
      <App isAuth={Settings.isAuth} offers={OfferDataSet.offers}
        city={city} reviews={OfferDataSet.reviews}
      />
    </Provider>

  </React.StrictMode>,
);
