import CommentForm from '../components/CommentForm';
import ReviewsList from '../components/ReviewsList';
import Map from '../components/Map';
import { MapClassName, OfferCardClassName } from '../utils/consts';
import { City, protoOffer, Review} from '../types/types';
import Offer from '../components/Offer';
import { useAppSelector } from '../hooks';
import { STARS_COUNT, MAX_PERCENT_STARS_WIDTH } from '../utils/consts';

type OfferIdProps = {
		offers: protoOffer[];
		city: City;
		reviews: Review[];
}

function OfferId ({offers, city, reviews}: OfferIdProps): JSX.Element {

  const dataToDetails = useAppSelector((state) => state.offerDetails);

  const {currentOffer, /* nearbyOffers */} = dataToDetails;

  return (
    <div>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              <div className="property__image-wrapper">
                <img className="property__image" src="img/room.jpg" alt="Photo studio" />
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/apartment-01.jpg" alt="Photo studio" />
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/apartment-02.jpg" alt="Photo studio" />
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/apartment-03.jpg" alt="Photo studio" />
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/studio-01.jpg" alt="Photo studio" />
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/apartment-01.jpg" alt="Photo studio" />
              </div>
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {currentOffer.isPremium ?
                <div className="property__mark">
                  <span>Premium</span>
                </div> : <> </>}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {currentOffer.title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{
                    width: `${MAX_PERCENT_STARS_WIDTH * currentOffer.rating / STARS_COUNT}%`
                  }}
                  >
                  </span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{currentOffer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {currentOffer.typeOffer}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {currentOffer.countBedRoom}
                </li>
                <li className="property__feature property__feature--adults">
                  {currentOffer.countGuests}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{currentOffer.priceForNight}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  <li className="property__inside-item">
                    Wi-Fi
                  </li>
                  <li className="property__inside-item">
                    Washing machine
                  </li>
                  <li className="property__inside-item">
                    Towels
                  </li>
                  <li className="property__inside-item">
                    Heating
                  </li>
                  <li className="property__inside-item">
                    Coffee machine
                  </li>
                  <li className="property__inside-item">
                    Baby seat
                  </li>
                  <li className="property__inside-item">
                    Kitchen
                  </li>
                  <li className="property__inside-item">
                    Dishwasher
                  </li>
                  <li className="property__inside-item">
                    Cabel TV
                  </li>
                  <li className="property__inside-item">
                    Fridge
                  </li>
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    Angelina
                  </span>
                  <span className="property__user-status">
                    Pro
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {currentOffer.description}
                  </p>
                  <p className="property__text">
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                {/* Лист с комментариями */}
                <ReviewsList reviews={currentOffer.reviews} />
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{currentOffer.reviews.length}</span></h2>
                {/* Место для формы отправки коммментариев */}
                <CommentForm/>
              </section>
            </div>
          </div>
          {/* место для карты города (отображаются предложения по соседству) */}
          <Map className={MapClassName.offerId} activeOfferId={currentOffer.id} coordinates={offers.map(({id, coordinates}) =>({id, ...coordinates }))} city={city}/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {/* место для предложенй */}
              {offers.map((offer) => <Offer key={offer.id} offer={offer} place={OfferCardClassName.offerId}/>)}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}


export default OfferId;
