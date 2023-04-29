import { Comment } from '../types/types';
import { STARS_COUNT, MAX_PERCENT_STARS_WIDTH, DateFormant} from '../utils/consts';
import {dateFormatting} from '../utils/util';

type propsComment = {
	comment: Comment;
}

function ReviewItem({comment}: propsComment): JSX.Element {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={comment.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {comment.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{
              width: `${MAX_PERCENT_STARS_WIDTH * comment.rating / STARS_COUNT }%`
            }}
            >
            </span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment.comment}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{dateFormatting(comment.date, DateFormant.CommentDate)}</time>
      </div>
    </li>
  );
}

export default ReviewItem;
