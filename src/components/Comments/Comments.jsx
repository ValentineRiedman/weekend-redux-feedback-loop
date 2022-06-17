import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import './Comments.css';

function Comments( ){
    const [ comments, setComments ] = useState( null );
    const dispatch = useDispatch();
    const history = useHistory();
    const sendFeeling = useSelector( store => store.sendFeeling );
    const sendUnderstanding = useSelector( store => store.sendUnderstanding );
    const sendSupport = useSelector( store => store.sendSupport);
    const sendComments = useSelector( store => store.sendComments );

    const changeComments = (event)=>{
        setComments(event.target.value);
        console.log(comments);
    }

    const addComments = ()=>{
        if( comments === null ){
            alert('Pick a number between 1 and 5');
        }
        else if( dispatch({ type: 'SEND_COMMENTS', payload: comments}))
                history.push( '/comments' );
    }
    return (
        <div>
            <div>
            <p>{sendFeeling}</p>
            <p>{sendUnderstanding}</p>
            <p>{sendSupport}</p>
            <p>{sendComments}</p>    
            <h2>Any comments you want to leave?</h2>
            <input style={{width: "370px"}} className="comment" onChange={changeComments}></input>
                 <button onClick={addComments}>NEXT</button>
        </div>
        </div>
    );
}

export default Comments;