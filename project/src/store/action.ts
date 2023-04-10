import { createAsyncThunk } from '@reduxjs/toolkit';
import { protoOffer, Comment} from '../types/types';
import type {AxiosInstance} from 'axios';

type Extra = {
	api: AxiosInstance;
}

export const Action = {
  FETCH_OFFERS: 'offers/fetch',
  FETCH_OFFER: 'offer/fetch',
  FETCH_NEARBY_OFFERS: 'nearbyOffers/fetch',
  FETCH_OFFER_COMMENTS: 'comments/fetch'
};


//запросы за офферами;
export const fetchOffers = createAsyncThunk<protoOffer[], undefined, { extra: Extra }>(
  Action.FETCH_OFFERS,
  async (_, { extra }) => {
    const { api } = extra;
    const { data } = await api.get<protoOffer[]>('/hotels');

    return data;
  });

export const fetchOffer = createAsyncThunk<protoOffer, protoOffer['id'], {extra: Extra}> (
  Action.FETCH_OFFER,
  async (id, { extra }) => {
    const { api } = extra;
    const { data } = await api.get<protoOffer>(`hotels/${id}`);

    return data;
  });

export const fetchNearbyOffers = createAsyncThunk<protoOffer[], protoOffer['id'], {extra: Extra}> (
  Action.FETCH_NEARBY_OFFERS,
  async (id, { extra }) => {
    const { api } = extra;
    const { data } = await api.get<protoOffer[]>(`hotels/${id}/nearby`);

    return data;
  });

// запросы за комментариями;
export const fetchOfferComments = createAsyncThunk<Comment[], protoOffer['id'], {extra: Extra}> (
  Action.FETCH_OFFER_COMMENTS,
  async (id, { extra }) => {
    const { api } = extra;
    const { data } = await api.get<Comment[]>(`comments/${id}`);

    return data;
  });
