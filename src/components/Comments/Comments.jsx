import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import './Comments.css';

function Comments( ){
    const [ comments, setComments ] = useState( null );
    const dispatch = useDispatch();
    const history = useHistory();


    const changeComments = (event)=>{
        setComments(event.target.value);
        console.log(comments);
    }

    const addComments = ()=>{
      ( dispatch({ type: 'SEND_COMMENTS', payload: comments}))
                history.push( '/review' );
    }
    return (
        <div>
            <div>    
            <h2>Any comments you want to leave?</h2>
            <input style={{width: "370px"}} className="comment" onChange={changeComments}></input>
                 <button onClick={addComments}>NEXT</button>
        </div>
        </div>
    );
}

export default Comments;