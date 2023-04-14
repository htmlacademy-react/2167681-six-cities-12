import { createAsyncThunk } from '@reduxjs/toolkit';
import { protoOffer, Comment, User, userAuth} from '../types/types';
import type {AxiosInstance} from 'axios';
import { saveToken } from '../services/token';


type Extra = {
	api: AxiosInstance;
}

export const Action = {
  FETCH_OFFERS: 'offers/fetch',
  FETCH_OFFER: 'offer/fetch',
  FETCH_NEARBY_OFFERS: 'nearbyOffers/fetch',
  FETCH_OFFER_COMMENTS: 'comments/fetch',
  FETCH_USER_STATUS: 'userStatus/fetch',
  FETCH_USER_LOGIN: 'userLogin/fetch',
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

// запросы аторизации
export const fetchUserStatus = createAsyncThunk<User, undefined, {extra: Extra}>(
  Action.FETCH_USER_STATUS,
  async (_, {extra}) => {
    const { api } = extra;
    const {data} = await api.get<User>('/login');

    return data;
  }
);

export const fetchUserLogin = createAsyncThunk<userAuth['email'], userAuth, {extra:Extra}>(
  Action.FETCH_USER_LOGIN,
  async ({email, password}, {extra}) => {
    const {api} = extra;
    const {data} = await api.post<User>('/login', {email, password});
    const {token} = data;

    saveToken(token);

    return token;

  }
);


