import MainPage from '../../pages/Main';
import Favorites from '../../pages/Favorites';
import Header from '../Header';
import Login from '../../pages/Login';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import NotFound from '../NotFound';
import { AppRoutes } from '../../utils/consts';

 type AppScreenProps = {
	countOffers: number;
	isAuth: boolean;
};

type offerProps = {
	city: string;
	photo: string;
	title: string;
	typeOffer: string;
	description: string;
	countBedRoom: string;
	priceForNight: string;
	countGuests: string;
}

function App( {countOffers, isAuth} : AppScreenProps, offers : offerProps, favoritesOffers :
	offerProps): JSX.Element {
  return(
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.Main } element={<Header isAuth={isAuth}/>}>
          <Route index element={<MainPage countsOffers={countOffers}/*  offers={offers} *//>} />
          <Route path={AppRoutes.Login} element={<Login />}/>
          <Route path='/*' element={<NotFound />}/>
          <Route path={AppRoutes.Favorites} element={isAuth ? <Favorites /> : <Navigate to={AppRoutes.Login} />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
