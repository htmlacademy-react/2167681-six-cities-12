import { Link } from 'react-router-dom';
import { AppRoute } from '../utils/consts';

function LogoLink (): JSX.Element {
  return (
    <Link to={AppRoute.Main} className="header__logo-link">
      <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
    </Link>
  );
}

export default LogoLink;

