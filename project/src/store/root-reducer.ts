import { combineReducers,} from '@reduxjs/toolkit';
import { userSlicer } from './user-process/user-slicer';
import {dataSlicer} from './data-process/data-slicer';
import { StoreSliceName } from '../utils/consts';
import { siteSlicer } from './site-process/site-silecer';

export const rootReducer = combineReducers({
  [StoreSliceName.DataProcess]: dataSlicer.reducer,
  [StoreSliceName.UserProcess]:  userSlicer.reducer,
  [StoreSliceName.SiteProcess]: siteSlicer.reducer
});

