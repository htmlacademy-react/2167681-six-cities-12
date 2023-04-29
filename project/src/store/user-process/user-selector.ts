import { AuthorizationStatus } from '../../utils/consts';
import { StoreSliceName } from '../../utils/consts';
import { State } from '../../types/state';
import type { User } from '../../types/types';


export const getUserStatus = ({[StoreSliceName.UserProcess]: USER_PROCESS}: State): AuthorizationStatus => USER_PROCESS.authorizationStatus;
export const getUser = ({[StoreSliceName.UserProcess]: USER_PROCESS}: State): User['email'] => USER_PROCESS.user;
