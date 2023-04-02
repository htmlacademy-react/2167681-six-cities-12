import { createReducer } from '@reduxjs/toolkit';
import {City, protoOffer, Sorting,} from '../types/types';
import { setCity, setOffers, setSort,} from './action';
import { cities } from '../mocks/city';
import { arrayOffers } from '../mocks/render';
import { SortName } from '../utils/consts';


export type Store = {
  city: City;
  offers: protoOffer[];
  sorting: Sorting;
}

const initialState: Store = {
  city: cities[0],
  offers: arrayOffers,
  sorting: SortName.Popular,
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
    });
});


export { reducer };
