import React, { useState } from "react";
import CommentsForm from "./Components/CommentsForm/CommentsForm";
import Comment from "./Components/Comment/Comment";
import CommentsFeed from "./Components/CommentsFeed/CommentsFeed";

function App() {
  const [comments, setComments] = useState([]);

  const addNewComment = (newComment) =>{
    setComments([newComment, ...comments]);


  };

  return (
    <div>
      <div>
        <CommentsForm addNewComment = {addNewComment} /> 
      </div>

      <div>
        <Comment parentComments = {comments}/>
      </div>


    </div>

    

  );
}

export default App;
