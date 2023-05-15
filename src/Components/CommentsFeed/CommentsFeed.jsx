import React, {useState} from 'react';
import CommentsForm from '../CommentsForm/CommentsForm';    
import Comment from '../Comment/Comment';


const CommentsFeed = (props) => {

    
    return ( 
        <table className="table">
        <thead>

        </thead>
        <tbody>
          {props.parentComments.map((newComment,index) => {
            return(
                <tr key= {index}>
                  <tr><td>{newComment.name}</td></tr>
                  <tr><td>{newComment.comment}</td></tr>
                </tr>
            );
          })}
        </tbody>
      </table>


     );
}

export default CommentsFeed;