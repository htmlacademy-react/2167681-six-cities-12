import {configureStore} from '@reduxjs/toolkit';
import { createAPI } from '../services/api';
import {rootReducer} from './root-reducer';
import { fetchFavoriteOffers, fetchOffers, fetchUserStatus } from './action';
import { redirect } from '../middlewares/redirect';

const api = createAPI();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: {api}
    },
  }).concat(redirect),
});

store.dispatch(fetchOffers());
store.dispatch(fetchUserStatus());
store.dispatch(fetchFavoriteOffers());
