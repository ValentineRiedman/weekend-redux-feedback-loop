import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import{ useDispatch } from 'react-redux';

function Understanding( ){
    const [ understanding, setUnderstanding ] = useState( null );
    const dispatch = useDispatch();
    const history = useHistory();
    

    const changeUnderstanding = (event)=>{
        setUnderstanding(event.target.value);
        console.log(understanding);
    }

    const addUnderstanding = ()=>{
        if( understanding === null ){
            alert('Pick a number between 1 and 5');
        }
        else if( dispatch({ type: 'SEND_UNDERSTANDING', payload: understanding}))
                history.push( '/support' );
    }
    return (
        <div>
            <div>  
            <h2>How well are you understanding the content?(1-5)</h2>
            <select onChange={changeUnderstanding}>
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </select> <button onClick={addUnderstanding}>NEXT</button>
        </div>
        </div>
    );
}

export default Understanding;