import React from 'react';
import LikeDislike from '../LikeDislike/LikeDislike';

const Comment = ({ comment, onLike, onDislike }) => {
  const handleLike = () => {
    onLike(comment.id);
  };

  const handleDislike = () => {
    onDislike(comment.id);
  };

  let likeStatus = 'inactive';
  if (comment.like) {
    likeStatus = 'like';
  } else if (comment.dislike) {
    likeStatus = 'dislike';
  }

  return (
    <div className="commentfeed-container">
      <div className="commentfeed-name">{comment.name}</div>
      <div className="commentfeed-comment">{comment.comment}</div>
      <div className="commentfeed-actions">
        <LikeDislike
          likeStatus={likeStatus}
          onLike={handleLike}
          onDislike={handleDislike}
        />
      </div>
    </div>
  );
};

export default Comment;