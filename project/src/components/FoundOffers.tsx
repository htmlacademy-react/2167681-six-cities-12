import Offer from './Offer';
import { MapClassName, OfferCardClassName} from '../utils/consts';
import Map from './Map';
import { useAppSelector} from '../hooks';
import PlacesSorts from './placesSorts';
import { sortingMethods } from '../utils/consts';
import { useState } from 'react';

function FoundOffers(): JSX.Element {

  const currentCity = useAppSelector((state) => state.offersPath.city);
  const currentSort = useAppSelector((state) => state.offersPath.sorting);
  const currentOffers = useAppSelector((state) => state.offersPath.offers.filter((offer) => offer.city.name === state.offersPath.city.name ).sort(sortingMethods[currentSort]));
  const [activeOffer, setActiveOffer] = useState<number | null>(null);
  const onMouseEnterId = (id: number) => setActiveOffer(id);
  const onMouseLeave = () => setActiveOffer(null);

  return (
    <div className="cities">
      <div className={`cities__places-container ${currentOffers.length === 0 ? 'cities__places-container--empty' : ''} container`}>
        <section className={`${currentOffers.length === 0 ? 'cities__no-places' : 'cities__places '} places`}>
          {/* пустой контейнер */}
          {currentOffers.length === 0 ?
            <div className="cities__status-wrapper tabs__content">
              <b className="cities__status">No places to stay available</b>
              <p className="cities__status-description">We could not find any property available at the moment in {currentCity.name}</p>
            </div>
            :
            <>{/* контейнер с предложениями */}
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{currentOffers.length} places to stay in {currentCity.name}</b>
              {/* меню с сортировками */}
              <PlacesSorts />
              <div className="cities__places-list places__list tabs__content">
                {/* Блок для карточек с недвижимостью */}
                {currentOffers.map((el) => (<Offer onMouseEnter={onMouseEnterId} onMouseLeave={onMouseLeave} key={el.id} offer={el} place={OfferCardClassName.main}/>
                ))}
              </div>
            </>}
        </section>
        <div className="cities__right-section">
          {currentOffers.length === 0 ?
          /* заставка пустого экрана */
            <img className="no-places" src="img/no-places.png" alt="" /> :
          /* карта города */
            <Map activeOfferId={activeOffer} city={currentCity} coordinates={currentOffers.map(({id: idid, location: lolo}) => ( {id: idid, ...lolo}) )} className={MapClassName.main}/>}
        </div>
      </div>
    </div>);

}

export default FoundOffers;
