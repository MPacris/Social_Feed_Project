import React from 'react';
import LikeDislike from '../LikeDislike/LikeDislike';

const Comment = ({ comment }) => {
  const handleLike = () => {
    comment.like = true;
    comment.dislike = false;
  };

  const handleDislike = () => {
    comment.like = false;
    comment.dislike = true;
  };

  return (
    <div className="commentfeed-container">
      <div className="commentfeed-name">{comment.name}</div>
      <div className="commentfeed-comment">{comment.comment}</div>
      <div className="commentfeed-actions">
        <LikeDislike
          likeStatus={comment.like ? 'like' : comment.dislike ? 'dislike' : 'inactive'}
          onLike={handleLike}
          onDislike={handleDislike}
        />
      </div>
    </div>
  );
};

export default Comment;