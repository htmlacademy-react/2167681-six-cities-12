import {Outlet} from 'react-router-dom';
import { useAppSelector, useAppDispatch} from '../hooks';
import { AuthorizationStatus } from '../utils/consts';
import { Link } from 'react-router-dom';
import { AppRoute } from '../utils/consts';
import { getUserStatus, getUser} from '../store/user-process/user-selector';
import LogoLink from './Logo-link';
import { getFavorite } from '../store/data-process/data-selector';
import { fetchUserStatus, redirectTo } from '../store/action';
import { logout } from '../store/user-process/user-slicer';

function Header (): JSX.Element {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(getUserStatus);
  const userEmail = useAppSelector(getUser);
  const favoriteOffers = useAppSelector(getFavorite);


  const handleLogoutClick = () => {
    if (isAuth === AuthorizationStatus.Auth) {
      dispatch(logout());
      dispatch(fetchUserStatus);
      dispatch(redirectTo(AppRoute.Main));
    }
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <LogoLink/>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                {isAuth === AuthorizationStatus.Auth ?
                  <>
                    <li className="header__nav-item user">
                      <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                        <div className="header__avatar-wrapper user__avatar-wrapper">
                        </div>
                        <span className="header__user-name user__name">{userEmail}</span>
                        <span className="header__favorite-count"> {favoriteOffers.length} </span>
                      </Link>
                    </li>
                    <li className="header__nav-item">
                      <Link className="header__nav-link" to="#" onClick={handleLogoutClick}>
                        <span className="header__signout">Sign out</span>
                      </Link>
                    </li>
                  </>
                  :
                  <li className="header__nav-item">
                    <Link to={`${AppRoute.Login}`}>
                      <span className="header__signout"> Sign up</span>
                    </Link>
                  </li>}
              </ul>
            </nav>
          </div>
        </div>
      </header>
      {/* место для блоков доступных после авторизации  */}
      <Outlet />
    </>
  );

}


export default Header;
