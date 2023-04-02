import { createReducer } from '@reduxjs/toolkit';
import {City, protoOffer, Sorting, OfferDetails} from '../types/types';
import { setCity, setOffers, setSort, setOfferDetails } from './action';
import { cities } from '../mocks/city';
import { arrayOffers } from '../mocks/render';
import { SortName } from '../utils/consts';


export type Store = {
  city: City;
  offers: protoOffer[];
  sorting: Sorting;
  offerDetails: OfferDetails;
}

const initialState: Store = {
  city: cities[0],
  offers: arrayOffers,
  sorting: SortName.Popular,
  // изначально я хотел, чтобы это был пустой массив, но не сложилось))0)0)
  offerDetails: {
    currentOffer: arrayOffers[0],
    nearbyOffers: arrayOffers.filter((el) => el !== arrayOffers[0] && el.city === arrayOffers[0].city)
  },
};


const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setSort, (state, action) => {
      state.sorting = action.payload;
    })
    .addCase(setOfferDetails, (state, action) => {
      state.offerDetails = action.payload;
    });
});


export { reducer };
