import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';
import { useAppSelector, useAppDispatch } from '../hooks';
import { getFavorite } from '../store/data-process/data-selector';
import FavoritesLocationContainer from '../components/FavoritesLocationContainer';
import { City } from '../types/types';
import { fetchFavoriteOffers } from '../store/action';

function Favorites (): JSX.Element {
  const favoritesOffers = useAppSelector(getFavorite);
  const sortOffersToContainers = (city: City['name']) => favoritesOffers.filter((el) => el.city.name === city);
  const currentContainers = new Set(favoritesOffers.map((el) => el.city.name));
  const dispatch = useAppDispatch();

  dispatch(fetchFavoriteOffers);


  return (
    <>
      <Helmet>
        <title>Твои любимые места</title>
      </Helmet>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {favoritesOffers.length <= 0 ?
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
              </div>
            </section>
            :
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {
                  [...currentContainers].map((el) => (
                    <FavoritesLocationContainer
                      key={el}
                      offers={sortOffersToContainers(el)}
                      city={el}
                    />))
                }
              </ul>
            </section>}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Favorites;
