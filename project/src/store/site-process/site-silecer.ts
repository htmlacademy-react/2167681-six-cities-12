import { createSlice,PayloadAction } from '@reduxjs/toolkit';
import { SiteStore } from '../../types/state';
import { Sorting, City} from '../../types/types';
import { cities, SortName } from '../../utils/consts';
import { StoreSliceName } from '../../utils/consts';

const initialState: SiteStore = {
  city: cities[0],
  sorting: SortName.Popular

};

export const siteSlicer = createSlice({
  name: StoreSliceName.SiteProcess,
  initialState,
  reducers:{
    setSort: (state, action: PayloadAction<Sorting>) => {
      state.sorting = action.payload;
    },
    setCity: (state, action: PayloadAction<City>) => {
      state.city = action.payload;
    }
  }
});


export const {setCity, setSort} = siteSlicer.actions;
