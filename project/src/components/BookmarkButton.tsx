import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchOffer, fetchOffers, postFavoriteOffer, fetchFavoriteOffers, fetchNearbyOffers } from '../store/action';
import type { favorireStatus } from '../types/types';
import { getOffer } from '../store/data-process/data-selector';


type BookMarkButtonProps = {
    type: 'thumbnails' | 'property';
    changeStatus: favorireStatus;
}

function BookMarkButton ({type, changeStatus}: BookMarkButtonProps):JSX.Element {
  const dispatch = useAppDispatch();
  const offer = useAppSelector(getOffer);

  const handleChangeStatus = () =>{
    dispatch(postFavoriteOffer(changeStatus));
    dispatch(fetchOffers());
    dispatch(fetchOffer(changeStatus.id));
    dispatch(fetchFavoriteOffers());

    if (offer) {
      dispatch(fetchNearbyOffers(offer.id));
    }

  };

  return (
    <button className={`${type === 'thumbnails' ? 'place-card' : 'property'}__bookmark-button ${changeStatus.isFavorite ? 'place-card__bookmark-button--active' : ''} button`} type="button"
      onClick={() => {handleChangeStatus();}}
    >
      <svg className="place-card__bookmark-icon" width={type === 'thumbnails' ? 18 : 31} height={type === 'thumbnails' ? 19 : 33}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">In bookmarks</span>
    </button>
  );
}


export default BookMarkButton;
