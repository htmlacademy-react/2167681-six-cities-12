import { createSlice } from '@reduxjs/toolkit';
import { StoreSliceName } from '../../utils/consts';
import { DataStore } from '../../types/state';
import { fetchOffer, fetchOfferComments, fetchNearbyOffers, fetchOffers } from '../action';

// получение и отправка комментария/ получение оффера, ближайших, всех офферов
const initialState: DataStore = {
  offers: [],
  isOffersLoading: false,
  offer: null,
  nearbyOffers:[],
  comments: [],
  isOfferLoading: false
};

const dataSlicer = createSlice({
  name: StoreSliceName.DataProcess,
  initialState,
  reducers:{},
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

export {dataSlicer};
