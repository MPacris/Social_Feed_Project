import React, { useState } from "react";
import CommentsForm from "./Components/CommentsForm/CommentsForm";
import Comment from "./Components/Comment/Comment";
import CommentsFeed from "./Components/CommentsFeed/CommentsFeed";

function App() {
  const [comments, setComments] = useState([]);

  const addNewComment = (newComment) =>{
    setComments([...comments, newComment]);

  };

  return (
    <div>
      <CommentsForm addNewComment = {addNewComment} /> 
    </div>

  );
}

export default App;
