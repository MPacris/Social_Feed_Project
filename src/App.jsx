import React, { useState } from "react";
import CommentsForm from "./Components/CommentsForm/CommentsForm";
import CommentsFeed from "./Components/CommentsFeed/CommentsFeed";
import './App.css';

function App() {
  const [comments, setComments] = useState([
    {
      id: 1,
      name: 'JJ Vega',
      comment: 'Its April Fools Day! Give this a dislike if you really like it. : )',
      like: false,
      dislike: false,
    },
    {
      id: 2,
      name: 'Nevin Seibel',
      comment: "My Rubik's cube is fully charged and ready for battle. Right after I eat my meal that has appeared from the magical hand from behind my curtain.",
      like: false,
      dislike: false,
    },
  ]);

  const addNewComment = (newComment) => {
    setComments((prevComments) => [newComment, ...prevComments]);
  };

  const handleLike = (id) => {
    setComments((prevComments) =>
      prevComments.map((comment) => {
        if (comment.id === id) {
          return {
            ...comment,
            like: true,
            dislike: false,
          };
        }
        return comment;
      })
    );
  };

  const handleDislike = (id) => {
    setComments((prevComments) =>
      prevComments.map((comment) => {
        if (comment.id === id) {
          return {
            ...comment,
            like: false,
            dislike: true,
          };
        }
        return comment;
      })
    );
  };

  return (
    <div className="container-all">
      <div className="container-top">
        <CommentsForm addNewComment={addNewComment} />
      </div>
      <div className="container-comments">
        <CommentsFeed
          parentComments={comments}
          onLike={handleLike}
          onDislike={handleDislike}
        />
      </div>
    </div>
  );
}

export default App;