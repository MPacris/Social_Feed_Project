import React, {useState} from 'react';
import LikeDislike from '../LikeDislike/LikeDislike';




const Comment = (props) => {

  return ( 
    <table className="table">

    <tbody>
      {props.parentComments.map((newComment,index) => {
        return(
            <tr key= {index}>
              <td>{newComment.name}</td>             
              <td>{newComment.comment}</td>
              <td><LikeDislike comment = {props.comment}/></td>      
            </tr>
        );
      })}
    </tbody>
  </table>


 );
}

export default Comment;