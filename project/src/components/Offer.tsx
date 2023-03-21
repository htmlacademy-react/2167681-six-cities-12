/* eslint-disable no-mixed-spaces-and-tabs */
import { protoOffer } from '../types/types';
import { ActivePage, AppRoute, MAX_PERCENT_STARS_WIDTH, OfferPhotoSize, STARS_COUNT } from '../utils/consts';
import { Link } from 'react-router-dom';

type offerProps = {
	typePage: ActivePage;
	offer: protoOffer;
}

function Offer({ offer, typePage }: offerProps): JSX.Element {

  return (
    <article className={`${typePage === ActivePage.Main ? 'cities__card' : 'favorites__card'} place-card`}>
      {offer.isPremium &&
				<div className="place-card__mark">
				  <span>Premium</span>
				</div>}
      <div className={`${typePage === ActivePage.Main ? 'cities__image-wrapper' : 'favorites__image-wrapper'} place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={offer.photo} width={typePage === ActivePage.Main ? OfferPhotoSize.CommonWidth : OfferPhotoSize.FavoritesWidth}
			 height={typePage === ActivePage.Main ? OfferPhotoSize.CommonHeight : OfferPhotoSize.FavoritesWidth} alt="Place image"
          />
        </a>
      </div>
      <div className={`${typePage === ActivePage.Main ? '' : 'favorites__card-info'} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.priceForNight}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${offer.isFavorite ? 'place-card__bookmark-button--active' : ''} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{
              width: `${MAX_PERCENT_STARS_WIDTH * offer.rating / STARS_COUNT}%`
            }}
            >
            </span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.typeOffer}</p>
      </div>
    </article>
  );
}

export default Offer;
