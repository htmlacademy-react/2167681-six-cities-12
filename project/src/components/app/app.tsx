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
import { protoOffer } from '../../utils/types';


type AppScreenProps = {
	isAuth: boolean;
	offers: protoOffer[];
	cityCatalog: string[];
};


function App({ isAuth, offers, cityCatalog }: AppScreenProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<Header isAuth={isAuth} />}>
            <Route index element={<MainPage offers={offers}
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
