import React, { useState } from "react";
import Comment from "./Components/Comment/Comment";
import CommentsFeed from "./Components/CommentsFeed/CommentsFeed";

function App() {
  const [comments, setComments] = useState([
    {
      name: "Nevin Seibel",
      post: "My Rubik's cube is fully charged and ready for battle. Right after I eat my meal that has appeared from the magical hand from behind my curtain.",
    },
  ]);

  return (
    <div>
      <CommentsFeed parentComments= {comments}/>
      {/* <Comment parentComments = {comments}/> */}
    </div>
  );
}

export default App;
