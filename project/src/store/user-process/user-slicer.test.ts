import { logout, userSlicer, } from './user-slicer';
import { AuthorizationStatus } from '../../utils/consts';
import { fetchUserLogin, fetchUserStatus } from '../action';

const email = 'azazaz@gmail.com';

describe('Reducer: user-slicer', () => {
  it('without aditional parametrs should return default state', () => {
    expect(userSlicer.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        authorizationStatus: AuthorizationStatus.Unknown,
        user: ''
      });
  });

  it('should fetch authorization status', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.Unknown,
      user: ''
    };
    expect(userSlicer.reducer(state,{ type: fetchUserStatus.fulfilled.type, payload: email}))
      .toEqual({
        authorizationStatus: AuthorizationStatus.Auth,
        user: email
      });
    expect(userSlicer.reducer(state,{ type: fetchUserStatus.rejected.type}))
      .toEqual({
        authorizationStatus: AuthorizationStatus.NoAuth,
        user: ''
      });
  });

  it('should return login', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.Unknown,
      user: ''
    };
    expect(userSlicer.reducer(state, { type: fetchUserLogin.fulfilled.type, payload: email }))
      .toEqual({
        authorizationStatus: AuthorizationStatus.Auth,
        user: email
      });
  });

  it('should return logout', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.Unknown,
      user: ''
    };
    expect(userSlicer.reducer(state, logout()))
      .toEqual({
        authorizationStatus: AuthorizationStatus.NoAuth,
        user: ''
      });
  });
});
