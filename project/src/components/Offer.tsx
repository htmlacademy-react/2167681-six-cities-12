/* eslint-disable no-mixed-spaces-and-tabs */
import { protoOffer } from '../utils/types';
import { ActivePage } from '../utils/consts';

type offerProps = {
	typePage: ActivePage;
	offer: protoOffer;
}

function Offer({ offer, typePage }: offerProps): JSX.Element {

  return (
    <article className={`${typePage === ActivePage.Main ? 'cities__card' : 'favorites__card'} place-card`}>{/*  класс - если вставлять в Favorites */}
      {offer.isPremium &&
				<div className="place-card__mark">
				  <span>Premium</span>
				</div>}
      <div className={`${typePage === ActivePage.Main ? 'cities__image-wrapper' : 'favorites__image-wrapper'} place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={offer.photo} width={typePage === ActivePage.Main ? 260 : 150} height={typePage === ActivePage.Main ? 200 : 110} alt="Place image" />
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
            <span style={{ width: '80%' }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{offer.title}</a>
        </h2>
        <p className="place-card__type">{offer.typeOffer}</p>
      </div>
    </article>
  );
}

export default Offer;
