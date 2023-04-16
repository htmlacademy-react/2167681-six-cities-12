/* eslint-disable no-mixed-spaces-and-tabs */
import { protoOffer} from '../types/types';
import { AppRoute, MAX_PERCENT_STARS_WIDTH, OfferPhotoSize, STARS_COUNT, OfferCardClassName } from '../utils/consts';
import { Link } from 'react-router-dom';

type offerProps = {
	place: OfferCardClassName;
	offer: protoOffer;
	onMouseEnter?: (id: number) => void;
	onMouseLeave?: () => void;
}

function Offer({
  offer,
  place,
  onMouseEnter = () => void 0,
  onMouseLeave = () => void 0
}: offerProps): JSX.Element {

  const handleMouseEnter = () => {
    onMouseEnter(offer.id);
  };

  return (
    <article className={`${place}__card place-card`} onMouseEnter={handleMouseEnter} onMouseLeave={onMouseLeave}>
      {offer.isPremium &&
				<div className="place-card__mark">
				   <span>Premium</span>
				</div>}
      <div className={`${place}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.Offer}/${offer.id}`}>
          <img className="place-card__image" src={offer.previewImage} width={ OfferPhotoSize.CommonWidth}
            height={ OfferPhotoSize.CommonHeight} alt="Place image"
          />
        </Link>
      </div>
      <div className={`${place === 'cities' ? '' : 'favorites__card-info'} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
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
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default Offer;
