import React, {useState} from 'react';




const Comment = (props) => {


    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
  
    const HandleLike = () => {
      setLikes(likes + 1);
    };
  
    const HandleDislike = () => {
      setDislikes(dislikes + 1);
    };
  
  


  return ( 
    <table className="table">

    <tbody>
      {props.parentComments.map((newComment,index) => {
        return(
            <tr key= {index}>
              <tr><td>{newComment.name}</td></tr>
              <tr><td>{newComment.comment}</td></tr>
              <td><button onClick={HandleLike}>Like ({likes})</button>
              <button onClick={HandleDislike}>Dislike ({dislikes})</button></td>

         

            </tr>
        );
      })}
    </tbody>
  </table>


 );
}

export default Comment;