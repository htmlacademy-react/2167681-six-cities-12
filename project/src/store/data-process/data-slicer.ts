import { createSlice } from '@reduxjs/toolkit';
import { StoreSliceName } from '../../utils/consts';
import { DataStore } from '../../types/state';
import { fetchOffer, fetchOfferComments, fetchNearbyOffers, fetchOffers, fetchFavoriteOffers } from '../action';

// получение и отправка комментария/ получение оффера, ближайших, всех офферов
const initialState: DataStore = {
  offers: [],
  isOffersLoading: false,
  offer: null,
  nearbyOffers:[],
  comments: [],
  isOfferLoading: false,
  favorites: []
};

const dataSlicer = createSlice({
  name: StoreSliceName.DataProcess,
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder
      // массив предложениий
      .addCase(fetchOffers.pending, (state) => {
        state.isOffersLoading = true;
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersLoading = false;
      })
      .addCase(fetchOffers.rejected, (state) => {
        state.isOffersLoading = false;
      })
      // одно предложение
      .addCase(fetchOffer.pending, (state) => {
        state.isOfferLoading = true;
      })
      .addCase(fetchOffer.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.isOfferLoading = false;
      })
      .addCase(fetchOffer.rejected, (state) => {
        state.isOfferLoading = false;
      })
      // предложения по соседству
      .addCase(fetchNearbyOffers.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;

      })
      //комментарии
      .addCase(fetchOfferComments.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(fetchFavoriteOffers.fulfilled, (state, action) =>{
        state.favorites = action.payload;
      });
  }
});

export {dataSlicer};
