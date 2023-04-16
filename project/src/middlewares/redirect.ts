import { PayloadAction } from '@reduxjs/toolkit';
import browserHistory from '../browser-history';
import { Middleware } from '@reduxjs/toolkit';
import { rootReducer } from '../store/root-reducer';

type Reducer = ReturnType<typeof rootReducer>;

export const redirect: Middleware<unknown, Reducer> =
(_store) =>
  (next) =>
    (action: PayloadAction<string>) => {
      if(action.type === 'userRoutes/redirect') {
        browserHistory.back();
      }
      if (action.type === 'userRoutes/redirectNotFound') {
        browserHistory.push(action.payload);
      }
      return next(action);
    };
