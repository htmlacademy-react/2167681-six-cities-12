import MainPage from '../../pages/Main';
import Favorites from '../../pages/Favorites';
import Header from '../Header';
import PrivateRoute from '../Private-route';
import Login from '../../pages/Login';
import { Routes, Route} from 'react-router-dom';
import NotFound from '../Not-found';
import { AppRoute } from '../../utils/consts';
import { HelmetProvider } from 'react-helmet-async';
import OfferId from '../../pages/Offer-id';
import HistoryRouter from '../History-router';
import browserHistory from '../../browser-history';

function App(): JSX.Element {
  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
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
      </HistoryRouter>
    </HelmetProvider>
  );
}


export default App;


