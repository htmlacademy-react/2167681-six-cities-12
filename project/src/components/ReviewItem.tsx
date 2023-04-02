import { Review } from '../types/types';
import { STARS_COUNT, MAX_PERCENT_STARS_WIDTH, DateFormant } from '../utils/consts';
import {dateFormatting} from '../utils/util';


type ReviewItemProps = {
	review: Review;
}

function ReviewItem({review}: ReviewItemProps): JSX.Element {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.avatar} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {review.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{
              width: `${MAX_PERCENT_STARS_WIDTH * review.rating / STARS_COUNT}%`
            }}
            >
            </span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.discription}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{dateFormatting(review.date, DateFormant.CommentDate)}</time>
      </div>
    </li>
  );
}

export default ReviewItem;
