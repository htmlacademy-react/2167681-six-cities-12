import { combineReducers,} from '@reduxjs/toolkit';
import { offerSlicer } from './offerSlicer';


export const rootReducer = combineReducers({
  toolkit:offerSlicer.reducer
});

