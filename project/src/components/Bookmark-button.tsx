import { useAppDispatch } from '../hooks';
import { fetchUserStatus, postFavoriteOffer } from '../store/action';
import type { favorireStatus, TimeOut } from '../types/types';
import { useRef } from 'react';


type BookMarkButtonProps = {
    type: 'thumbnails' | 'property';
    changeStatus: favorireStatus;
}

function BookMarkButton ({type, changeStatus}: BookMarkButtonProps):JSX.Element {
  const dispatch = useAppDispatch();

  const timerDebounceRef = useRef<TimeOut>();

  const handleChangeStatus = () =>{
    dispatch(fetchUserStatus);
    dispatch(postFavoriteOffer(changeStatus));
  };

  function handleDebounceCLick () {
    if(timerDebounceRef.current) {
      clearTimeout(timerDebounceRef.current);
    }

    timerDebounceRef.current = setTimeout(() => {
      handleChangeStatus();
    }, 300);
  }

  return (
    <button className={`${type === 'thumbnails' ? 'place-card' : 'property'}__bookmark-button ${changeStatus.isFavorite ? 'place-card__bookmark-button--active' : ''} button`} type="button"
      onClick={() => {handleDebounceCLick();}}
    >
      <svg className="place-card__bookmark-icon" width={type === 'thumbnails' ? 18 : 31} height={type === 'thumbnails' ? 19 : 33}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">In bookmarks</span>
    </button>
  );
}


export default BookMarkButton;
