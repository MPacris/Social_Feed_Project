import React, { useState } from 'react';
import Comment from '../Comment/Comment';
import LikeDislike from '../LikeDislike/LikeDislike';



const CommentsFeed = ({ parentComments }) => {
  return (
    <div>
      {parentComments.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
    </div>
  );
};

export default CommentsFeed;