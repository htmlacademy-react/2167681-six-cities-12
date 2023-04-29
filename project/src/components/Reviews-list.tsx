import ReviewItem from './Review-item';
import { Comment } from '../types/types';

type ReviewListProps = {
	comments: Comment[];
}

function ReviewsList ({comments}: ReviewListProps): JSX.Element {

  const reversedComments = [...comments].reverse().slice(0, 10);


  return (
    <ul className="reviews__list">
      {reversedComments.map((comment) => <ReviewItem key={comment.id} comment={comment} />)}
    </ul>
  );

}

export default ReviewsList;
