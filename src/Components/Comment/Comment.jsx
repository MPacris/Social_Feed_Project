import React from 'react';

const Comment = (props) => {
  return ( 
    <table className="table">

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

export default Comment;