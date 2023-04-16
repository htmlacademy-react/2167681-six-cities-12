import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { protoOffer, Comment, User, userAuth, commentAuth} from '../types/types';
import type {AxiosInstance, AxiosError} from 'axios';
import { saveToken } from '../services/token';
import { AppRoute, ResponseCode, ApiRoutes } from '../utils/consts';
import { AppDispatch } from '../types/state';

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
  POST_COMMENT: 'userComment/fetch',
};

export const redirectTo = createAction<AppRoute>('userRoutes/redirect');
export const invalidRequest = createAction<AppRoute>('userRoutes/redirectNotFound');

//запросы за офферами;
export const fetchOffers = createAsyncThunk<protoOffer[], undefined, { extra: Extra }>(
  Action.FETCH_OFFERS,
  async (_, { extra }) => {
    const { api } = extra;
    const { data } = await api.get<protoOffer[]>(ApiRoutes.Offers);

    return data;
  });

export const fetchOffer = createAsyncThunk<protoOffer, protoOffer['id'], {extra: Extra; dispatch: AppDispatch}> (
  Action.FETCH_OFFER,
  async (id, { extra, dispatch}) => {
    const { api } = extra;
    try {
      const { data } = await api.get<protoOffer>(`${ApiRoutes.Offers}/${id}`);
      return data;

    } catch (err) {
      const axiosError = err as AxiosError;

      if(axiosError.response?.status === ResponseCode.NotFound) {
        dispatch(invalidRequest(AppRoute.NotFound));
      }
      return Promise.reject(axiosError);
    }
  });

export const fetchNearbyOffers = createAsyncThunk<protoOffer[], protoOffer['id'], {extra: Extra}> (
  Action.FETCH_NEARBY_OFFERS,
  async (id, { extra }) => {
    const { api } = extra;
    const { data } = await api.get<protoOffer[]>(`${ApiRoutes.Offers}/${id}/nearby`);

    return data;
  });

// запросы за комментариями;
export const fetchOfferComments = createAsyncThunk<Comment[], protoOffer['id'], {extra: Extra}> (
  Action.FETCH_OFFER_COMMENTS,
  async (id, { extra }) => {
    const { api } = extra;
    const { data } = await api.get<Comment[]>(`${ApiRoutes.Comments}/${id}`);

    return data;
  });

export const postCommet = createAsyncThunk<Comment[], commentAuth, {extra: Extra}> (
  Action.POST_COMMENT,
  async ({id, comment, rating}, {extra}) => {
    const {api} = extra;
    const {data} = await api.post<Comment[]>(`${ApiRoutes.Comments}/${id}`, {comment, rating});

    return data;
  }
);

// запросы аторизации
export const fetchUserStatus = createAsyncThunk<User, undefined, {extra: Extra}>(
  Action.FETCH_USER_STATUS,
  async (_, {extra}) => {
    const { api } = extra;
    const {data} = await api.get<User>(ApiRoutes.Login);

    return data;
  }
);

export const fetchUserLogin = createAsyncThunk<userAuth['email'], userAuth, {
	extra:Extra ;
   dispatch: AppDispatch;
    }>(
      Action.FETCH_USER_LOGIN,
      async ({email, password}, {extra, dispatch}) => {
        const {api} = extra;
        const {data} = await api.post<User>(ApiRoutes.Login, {email, password});
        const {token} = data;

        saveToken(token);
        dispatch(redirectTo(AppRoute.Main));

        return email;
      }
    );


