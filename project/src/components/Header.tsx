import {Outlet} from 'react-router-dom';
import { useAppSelector} from '../hooks';
import { AuthorizationStatus } from '../utils/consts';
import { Link } from 'react-router-dom';
import { AppRoute } from '../utils/consts';
import { getUserStatus, getUser} from '../store/user-process/user-selector';
import LogoLink from './LogoLink';

function Header (): JSX.Element {

  const isAuth = useAppSelector(getUserStatus);
  const userEmail = useAppSelector(getUser);
  //const favoriteOffers = useAppSelector(getOffer.filter((el) => el.isFavorite));
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
                      <a className="header__nav-link header__nav-link--profile" href="#">
                        <div className="header__avatar-wrapper user__avatar-wrapper">
                        </div>
                        <span className="header__user-name user__name">{userEmail}</span>
                        <span className="header__favorite-count">{/* {favoriteOffers.length} */}</span>
                      </a>
                    </li>
                    <li className="header__nav-item">
                      <a className="header__nav-link" href="#">
                        <span className="header__signout">Sign out</span>
                      </a>
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
