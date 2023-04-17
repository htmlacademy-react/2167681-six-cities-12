/* eslint-disable no-mixed-spaces-and-tabs */
import CommentForm from '../components/CommentForm';
import ReviewsList from '../components/ReviewsList';
import Map from '../components/Map';
import { MapClassName, OfferCardClassName } from '../utils/consts';
import Offer from '../components/Offer';
import { STARS_COUNT, MAX_PERCENT_STARS_WIDTH, AuthorizationStatus} from '../utils/consts';
import { useAppDispatch, useAppSelector } from '../hooks';
import { useParams } from 'react-router-dom';
import { fetchNearbyOffers, fetchOffer, fetchOfferComments, postCommet } from '../store/action';
import { useEffect } from 'react';
import Spinner from '../components/Spinner';
import { commentAuth } from '../types/types';

function OfferId (): JSX.Element |null {
  const params = useParams();
  const dispatch = useAppDispatch();
  const offer = useAppSelector((state) => state.offersPath.offer);
  const isOfferLoading = useAppSelector((state) => state.offersPath.isOfferLoading);
  const nearbyOffers = useAppSelector((state) => state.offersPath.nearbyOffers);
  const comments = useAppSelector((state) => state.offersPath.comments);
  const authorizationStatus = useAppSelector((state) => state.userAuthPath.authorizationStatus);

  useEffect(() => {
    const {id} = params;

    if (id) {
      const parsedId = Number(id);
      dispatch(fetchOffer(parsedId));
      dispatch(fetchNearbyOffers(parsedId));
      dispatch(fetchOfferComments(parsedId));
    }

  }, [params, dispatch]);

  if (!offer) {
    return null;
  }

  if (isOfferLoading) {
    return <Spinner/>;
  }

  const {id, city, title, type, description, bedrooms, price, host, images, maxAdults,
    isPremium, goods, rating, location } = offer;

  const locations = nearbyOffers.map(({id: nearbyId, location: nearbyLocation}) => ({id: nearbyId, ...nearbyLocation}));
  locations.push({id, ...location});

  const onFormSubmit = (formData: Omit<commentAuth, 'id'>) => {

    dispatch(postCommet({id, ...formData}));
  };

  return (
    <div>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {
                (images.slice(0,6).map((image) => (
                  <div key={image} className="property__image-wrapper">
                    <img className="property__image" key={image} src={`${image}`} alt="Photo studio" />
                  </div>
                )))
              }
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium &&
					<div className="property__mark">
					  <span>Premium</span>
					</div>}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
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
                    width: `${MAX_PERCENT_STARS_WIDTH * rating / STARS_COUNT}%`
                  }}
                  >
                  </span>
                  <span className="visually-hidden">{rating}</span>
                </div>
                <span className="property__rating-value rating__value">rating</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms}
                </li>
                <li className="property__feature property__feature--adults">
                  {maxAdults}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {(goods.map((good) => ( <li key={good} className="property__inside-item">{good}</li>)))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                  {host.isPro &&
						<span className="property__user-status">
                    Pro
						</span>}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                  <p className="property__text">
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                {/* Лист с комментариями */}
                <ReviewsList comments={comments} />
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
                {/* Место для формы отправки коммментариев */}
                { authorizationStatus === AuthorizationStatus.Auth &&
						<CommentForm onSubmit={onFormSubmit}/>}
              </section>
            </div>
          </div>
          {/* место для карты города (отображаются предложения по соседству) */}
          <Map className={MapClassName.offerId} activeOfferId={id} coordinates={locations} city={city}/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {/* место для предложенй */}
              {nearbyOffers.map((el) => <Offer key={el.id} offer={el} place={OfferCardClassName.offerId}/>)}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}


export default OfferId;
