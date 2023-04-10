import ReviewItem from './ReviewItem';
import { Comment } from '../types/types';

type ReviewListProps = {
	comments: Comment[];
}

function ReviewsList ({comments}: ReviewListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {comments.map((comment) => <ReviewItem key={comment.id} comment={comment} />)}
    </ul>
  );

}


export default ReviewsList;
