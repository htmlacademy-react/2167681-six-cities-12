import { combineReducers,} from '@reduxjs/toolkit';
import { offerSlicer } from './offerSlicer';
import { userSlicer } from './userSlicer';

export const rootReducer = combineReducers({
  offersPath:offerSlicer.reducer,
  userAuthPath: userSlicer.reducer
});

