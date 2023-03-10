/* eslint-disable react/jsx-closing-bracket-location */
import MainPage from '../../pages/Main';
import Favorites from '../../pages/Favorites';
import Header from '../Header';
import PrivateRoute from '../private-route';
import Login from '../../pages/Login';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import NotFound from '../NotFound';
import { AppRoute, AuthorizationStatus } from '../../utils/consts';
import { HelmetProvider } from 'react-helmet-async';


type offerProps = {
	id: string;
	city: string;
	photo: string;
	title: string;
	typeOffer: string;
	description: string;
	countBedRoom: string;
	priceForNight: string;
	countGuests: string;
}

type AppScreenProps = {
	countOffers: number;
	isAuth: boolean;
	offers: offerProps[];
	cityCatalog: string[];
};


function App({ countOffers, isAuth, offers, cityCatalog }: AppScreenProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<Header isAuth={isAuth} />}>
            <Route index element={<MainPage countsOffers={countOffers} offers={offers}
              cityCatalog={cityCatalog} />}
            />
            <Route path={AppRoute.Login} element={<Login />} />
            <Route path='/*' element={<NotFound />} />

            <Route path={AppRoute.Favorites} element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                <Favorites />
              </PrivateRoute>
            } />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>

  );
}


export default App;
