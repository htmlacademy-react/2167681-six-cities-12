import { createSlice } from '@reduxjs/toolkit';
import { UserStore } from '../../types/state';
import { fetchUserLogin, fetchUserStatus} from '../action';
import { AuthorizationStatus, StoreSliceName } from '../../utils/consts';
import { dropToken } from '../../services/token';

const initialState: UserStore = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: '',
};

export const userSlicer = createSlice({
  name: StoreSliceName.UserProcess,
  initialState,
  reducers: {
    logout: (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
      state.user = '';
      dropToken();
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUserStatus.fulfilled, (state, action) => {
        state.user = action.payload;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(fetchUserStatus.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(fetchUserLogin.fulfilled, (state, action) => {
        state.user = action.payload;
        state.authorizationStatus = AuthorizationStatus.Auth;
      });
  }
});

export const {logout} = userSlicer.actions;

