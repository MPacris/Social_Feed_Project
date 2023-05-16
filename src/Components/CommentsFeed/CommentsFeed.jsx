import React from 'react';
import Comment from '../Comment/Comment';
import LikeDislike from '../LikeDislike/LikeDislike';

const CommentsFeed = (props) => {
  return (
    <div className="">
      {props.parentComments.map((newComment, index) => {
        return (
          <div key={index} className="commentfeed-container">
            <div className="commentfeed-name">{newComment.name}</div>
            <div className="commentfeed-comment">{newComment.comment}</div>
            <div className="commentfeed-actions">
              <LikeDislike comment={props.comment} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CommentsFeed;