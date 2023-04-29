import { useState, ChangeEvent, Fragment, useEffect } from 'react';
import { PendingStatus, STARS_COUNT } from '../utils/consts';
import { FormEvent } from 'react';
import { commentAuth } from '../types/types';

 type FormProps = {
	onSubmit: (formData: Omit<commentAuth, 'id'>) => void;
  pendingCommentStatus: PendingStatus;
 }

function CommentForm({onSubmit, pendingCommentStatus}: FormProps): JSX.Element {
  const [comment, setComment] = useState<string>('');
  const [rating, setRating] = useState<number>(0);

  const onSubmitDisabled = () => !!((comment.length < 50 || comment.length > 300) || rating === 0 || pendingCommentStatus === PendingStatus.Loading );

  const handleTextareaChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(evt.target.value);
  };

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(evt.target.value));
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit({
      comment: comment,
      rating,
    });

  };

  useEffect(() => {
    if (pendingCommentStatus === PendingStatus.Fulfilled) {
      setComment('');
      setRating(0);
    }
  }, [pendingCommentStatus]);


  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleFormSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        { [...Array <number>(STARS_COUNT)].map((_, index) => (
          <Fragment key={`Star ${STARS_COUNT - index}`}>
            <input className="form__rating-input visually-hidden"
              name="rating"
              value={STARS_COUNT - index}
              id={`${STARS_COUNT - index}-stars`}
              type="radio"
              checked={STARS_COUNT - index === rating}
              onChange={handleInputChange}
            />
            <label htmlFor={`${STARS_COUNT - index}-stars`}
              className="reviews__rating-label form__rating-label"
              title="perfect"
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea className="reviews__textarea form__textarea"
        id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={comment}
        onChange={handleTextareaChange}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
					To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={onSubmitDisabled()}>Submit</button>
      </div>
    </form>
  );
}

export default CommentForm;
