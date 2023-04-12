import { createSlice } from '@reduxjs/toolkit';
import { UserPath } from '../types/state';
import { fetchUserLogin, fetchUserStatus, } from './action';
import { AuthorizationStatus } from '../utils/consts';

const initialState: UserPath = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: ''
};


const userSlicer = createSlice({
  name: 'user-auth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUserStatus.fulfilled, (state, action) => {
        state.user = action.payload.email;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(fetchUserStatus.rejected, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(fetchUserLogin.fulfilled, (state, action) => {
        state.user = action.payload;
        state.authorizationStatus = AuthorizationStatus.Auth;
      });
  }
});


export {userSlicer};
