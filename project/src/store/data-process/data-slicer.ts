import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PendingStatus, StoreSliceName } from '../../utils/consts';
import { DataStore } from '../../types/state';
import { fetchOffer, fetchOfferComments, fetchNearbyOffers, fetchOffers, fetchFavoriteOffers, postCommet, postFavoriteOffer } from '../action';

// получение и отправка комментария/ получение оффера, ближайших, всех офферов
const initialState: DataStore = {
  offers: [],
  isOffersLoading: false,
  offer: null,
  nearbyOffers:[],
  comments: [],
  isOfferLoading: false,
  isFavoritesLoading: false,
  favorites: [],
  isCommentPending: PendingStatus.Inactive
};

export const dataSlicer = createSlice({
  name: StoreSliceName.DataProcess,
  initialState,
  reducers:{
    setIsCommentPending: (state, action: PayloadAction<PendingStatus>) => {
      state.isCommentPending = action.payload;
    }
  },
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
      .addCase(postCommet.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.isCommentPending = PendingStatus.Fulfilled;
      })
      .addCase(postCommet.pending, (state) => {
        state.isCommentPending = PendingStatus.Loading;
      })
      .addCase(postCommet.rejected, (state) => {
        state.isCommentPending = PendingStatus.Error;
      })
      // "избранное"
      .addCase(fetchFavoriteOffers.fulfilled, (state, action) => {
        state.favorites = action.payload;
        state.isFavoritesLoading = false;
      })
      .addCase(fetchFavoriteOffers.pending, (state) => {
        state.isFavoritesLoading = true;
      })
      .addCase(fetchFavoriteOffers.rejected, (state) => {
        state.isFavoritesLoading = false;
      })
      .addCase(postFavoriteOffer.fulfilled, (state, action) => {
        const updatedOffer = action.payload;
        state.offers = state.offers.map((offer) => offer.id === updatedOffer.id ? updatedOffer : offer);
        if (state.offer && state.offer.id === updatedOffer.id) {
          state.offer = updatedOffer;
        }
        if (updatedOffer.isFavorite) {
          state.favorites = state.favorites.concat(updatedOffer);
        } else {
          state.favorites = state.favorites.filter((favoriteOffer) => favoriteOffer.id !== updatedOffer.id);
        }
        if (state.nearbyOffers) {
          state.nearbyOffers = state.nearbyOffers.map((offer) => offer.id === updatedOffer.id ? updatedOffer : offer);
        }
      });
  }
});

export const {setIsCommentPending} = dataSlicer.actions;
