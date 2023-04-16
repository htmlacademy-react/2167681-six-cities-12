import MainPage from '../../pages/Main';
import Favorites from '../../pages/Favorites';
import Header from '../Header';
import PrivateRoute from '../privateRoute';
import Login from '../../pages/Login';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import NotFound from '../NotFound';
import { AppRoute } from '../../utils/consts';
import { HelmetProvider } from 'react-helmet-async';
import OfferId from '../../pages/OfferId';

function App(): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<Header />}>
            <Route index element={<MainPage />}/>
            <Route path={AppRoute.Login} element={<Login />} />
            <Route path={AppRoute.Favorites}
              element={
                <PrivateRoute >
                  <Favorites />
                </PrivateRoute>
              }
            />
            <Route path={`${AppRoute.Offer}/:id`} element={<OfferId />}/>
            <Route path={'/*'} element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}


export default App;


