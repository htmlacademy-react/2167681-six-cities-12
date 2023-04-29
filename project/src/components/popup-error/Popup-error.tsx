import './popup-error.css';
import { PendingStatus } from '../../utils/consts';
import { useAppDispatch } from '../../hooks';
import { setIsCommentPending } from '../../store/data-process/data-slicer';

type PopupErrorProps = {
  pendingStatus: PendingStatus;
}

function PopupError ({pendingStatus}: PopupErrorProps): JSX.Element {

  const dispatch = useAppDispatch();

  const handleRefreshStatus = () => {
    dispatch(setIsCommentPending(PendingStatus.Inactive));
  };

  return (
    <div className={`popup__error ${pendingStatus !== PendingStatus.Error ? 'visually-hidden' : ''}`}>
      <div className="popup__error__body">
        <div className="popup__error__title">
                    Что-то пошло не так. Попробуйте еще раз.
        </div>
        <button className='popup__error__button' onClick={handleRefreshStatus}>
                Ок
        </button>
      </div>
    </div>
  );
}

export default PopupError;
