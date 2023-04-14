import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {City, Sorting} from '../types/types';
import { fetchNearbyOffers, fetchOffer, fetchOfferComments, fetchOffers} from './action';
import { SortName, cities } from '../utils/consts';
import { Store } from '../types/state';

const initialState: Store = {
  city: cities[0],
  offers: [],
  sorting: SortName.Popular,
  isOffersLoading: false,
  offer: null,
  nearbyOffers:[],
  comments: [],
  isOfferLoading: false
};


const offerSlicer = createSlice({
  name: 'offers',
  initialState,
  reducers:{
    setSort: (state, action: PayloadAction<Sorting>) => {
      state.sorting = action.payload;
    },
    setCity: (state, action: PayloadAction<City>) => {
      state.city = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
    // массив предложениий
      .addCase(fetchOffers.pending, (state, action) => {
        state.isOffersLoading = true;
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersLoading = false;
      })
      .addCase(fetchOffers.rejected, (state, action) => {
        state.isOffersLoading = false;
      })
    // одно предложение
      .addCase(fetchOffer.pending, (state, action) => {
        state.isOfferLoading = true;
      })
      .addCase(fetchOffer.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.isOfferLoading = false;
      })
      .addCase(fetchOffer.rejected, (state, action) => {
        state.isOfferLoading = false;
      })
    // предложения по соседству
      .addCase(fetchNearbyOffers.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;

      })
    //комментарии
      .addCase(fetchOfferComments.fulfilled, (state, action) => {
        state.comments = action.payload;
      });
  }
});

export const {setSort, setCity} = offerSlicer.actions;

export { offerSlicer };
