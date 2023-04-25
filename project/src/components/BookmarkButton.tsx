import { useAppDispatch } from '../hooks';
import { postFavoriteOffer } from '../store/action';
import type { favorireStatus } from '../types/types';

type BookMarkButtonProps = {
    type: 'thumbnails' | 'property';
    changeStatus: favorireStatus;
}

function BookMarkButton ({type, changeStatus}: BookMarkButtonProps):JSX.Element {
  const dispatch = useAppDispatch();


  const handleChangeStatus = () =>{
    dispatch(postFavoriteOffer(changeStatus));
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
