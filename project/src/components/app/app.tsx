/* eslint-disable react/jsx-closing-bracket-location */
import MainPage from '../../pages/Main';
import Favorites from '../../pages/Favorites';
import Header from '../Header';
import PrivateRoute from '../private-route';
import Login from '../../pages/Login';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import NotFound from '../NotFound';
import { AppRoute, AuthorizationStatus, ActivePage } from '../../utils/consts';
import { HelmetProvider } from 'react-helmet-async';
import { protoOffer, City, Review } from '../../types/types';
import OfferId from '../../pages/OfferId';

type AppScreenProps = {
	isAuth: boolean;
	offers: protoOffer[];
	cityCatalog: string[];
	city: City;
	reviews: Review[];
};


function App({ isAuth, offers, cityCatalog, city, reviews}: AppScreenProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<Header isAuth={isAuth} />}>
            <Route index element={<MainPage offers={offers}
              cityCatalog={cityCatalog} typePage={ActivePage.Main} city={city} />}
            />
            <Route path={AppRoute.Login} element={<Login />} />

            <Route path={AppRoute.Favorites} element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <Favorites offers={offers}/>
              </PrivateRoute>
            } />

            <Route path={`${AppRoute.Offer}/:id`} element={<OfferId offers={offers} city={city} reviews={reviews}/>}/>
            <Route path='/*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>

  );
}


export default App;
