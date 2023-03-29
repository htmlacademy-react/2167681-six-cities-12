import { createReducer } from '@reduxjs/toolkit';
import {City, protoOffer} from '../types/types';
import { setCity, setOffers } from './action';
import { cities } from '../mocks/city';
import { arrayOffers } from '../mocks/render';


export type CurrentCity = {
 city: City;
  offers: protoOffer[];
}

const initialState: CurrentCity = {
  city: cities[0],
  offers: arrayOffers
};


const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    });
});


export { reducer };
