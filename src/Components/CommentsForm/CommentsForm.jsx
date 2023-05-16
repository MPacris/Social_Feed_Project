import React, {useState} from 'react';
import './CommentsForm.css'


const CommentsForm = ({ addNewComment }) => {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      const newComment = {
        name: name,
        comment: comment,
        like: false,
        dislike: false,
      };
  
      addNewComment(newComment);
      setName('');
      setComment('');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <div className='form-top-container'>
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
  
          <div className='form-bottom-container'>
            <div>
            <label className='comment-label'>Comment</label>
            <input
              className='comment-box'
              type="text"
              value={comment}
              onChange={(event) => setComment(event.target.value)}
            />
            </div>
         
  
          <div>
            <button type="submit" className='form-button'>Create</button>
          </div>
          </div>
          </div>
      </form>
    );
  };
  
  export default CommentsForm;