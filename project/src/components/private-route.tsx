import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../utils/consts';
import { useAppSelector } from '../hooks';
import { getUserStatus } from '../store/user-process/user-selector';

type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute({children}: PrivateRouteProps): JSX.Element {

  const authorizationStatus = useAppSelector(getUserStatus);

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
