import {configureStore} from '@reduxjs/toolkit';
import { createAPI } from '../services/api';
import {rootReducer} from './root-reducer';
import { fetchOffers } from './action';

const api = createAPI();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: {api}
    },
  }),
});


store.dispatch(fetchOffers());
