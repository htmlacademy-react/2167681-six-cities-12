import Footer from '../components/Footer';
import FavoritesLocationContainer from '../components/FavoritesLocationContainer';
import { Helmet } from 'react-helmet-async';
import { ActivePage, CurrentOfferKey } from '../utils/consts';
import { protoOffer } from '../utils/types';
import {filterOffers} from '../utils/util';

type FvoritesProps = {
	typePage: ActivePage;
	offers: protoOffer[];
}

function Favorites ({typePage, offers} : FvoritesProps): JSX.Element {

  const favoriteOffers = filterOffers(offers, CurrentOfferKey.IsFavorite, true);
  const offerLocation = favoriteOffers.map((el) => el.city);
  const preCurrentLocation = new Set<string>(offerLocation);
  const currentLocation = [...preCurrentLocation];

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
                {
                  currentLocation.map((el) => (
                    <FavoritesLocationContainer
                      key={el}
                      offers={filterOffers(favoriteOffers, CurrentOfferKey.City, el )}
                      typePage={typePage}
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
