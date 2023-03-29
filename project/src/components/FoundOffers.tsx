/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable no-mixed-spaces-and-tabs */
import Offer from './Offer';
import { MapClassName, OfferCardClassName } from '../utils/consts';
import Map from './Map';
import { useAppSelector } from '../hooks';

function FoundOffers(): JSX.Element {

  const currentCity = useAppSelector((state) => state.city);
  const currentOffers = useAppSelector((state) => state.offers.filter((offer) => offer.city === state.city.title ));

  return (
    <div className="cities">
      <div className={`cities__places-container ${currentOffers.length === 0 ? 'cities__places-container--empty' : ''} container`}>
        <section className={`${currentOffers.length === 0 ? 'cities__no-places' : 'cities__places '} places`}>
          {/* пустой контейнер */}
          {currentOffers.length === 0 ?
            <div className="cities__status-wrapper tabs__content">
              <b className="cities__status">No places to stay available</b>
              <p className="cities__status-description">We could not find any property available at the moment in {currentCity.title}</p>
            </div>
            :
            <>{/* контейнер с предложениями */}
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{currentOffers.length} places to stay in {currentCity.title}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>y
									Popular
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                {/* Блок для карточек с недвижимостью */}
                {currentOffers.map((el) => (<Offer key={el.id} offer={el} place={OfferCardClassName.main}/>
                ))}
              </div>
            </>}

        </section>
        <div className="cities__right-section">
          {currentOffers.length === 0 ?
			 /* заставка пустого экрана */
            <img className="no-places" src="img/no-places.png" alt="" /> :
          /* карта города */
            <Map city={currentCity} coordinates={currentOffers.map((el) => el.coordinates )} className={MapClassName.main}/>}
        </div>
      </div>
    </div>);

}

export default FoundOffers;
