import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';
//import {filterOffers} from '../utils/util';
import { useAppSelector } from '../hooks';

function Favorites (): JSX.Element {
  const offers = useAppSelector((state) => state.offersPath.offers);
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);

  return (
    <>
      <Helmet>
        <title>Твои любимые места</title>
      </Helmet>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {favoriteOffers.length <= 0 ?
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
                {/*                 {
                  currentLocation.map((el) => (
                    <FavoritesLocationContainer
                      key={el}
                      offers={filterOffers(favoriteOffers, CurrentOfferKey.City, el )}
                      city={el}
                    />))
                } */}
              </ul>
            </section>}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Favorites;
