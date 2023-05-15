import React, {useState} from 'react';


const CommentsForm = ({addNewComment}) => {

    const [name, setName] = useState('');
    const [comment, setComment] = useState ('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            name: name,
            comment: comment,
        };

        addNewComment(data);
        setName('');
        setComment('');
    };


    return ( <form onSubmit={handleSubmit}>
    <div>
        <label>name</label>
        <input type='text' value = {name} onChange={(event) => setName(event.target.value)} />
    </div>

    <div>
        <label>comment</label>
        <input type='text' value = {comment} onChange={(event) => setComment(event.target.value)} />
    </div>

    <div>
        <button type='submit'>Create</button>
    </div>

    </form> 
    
    );
}
 
export default CommentsForm;