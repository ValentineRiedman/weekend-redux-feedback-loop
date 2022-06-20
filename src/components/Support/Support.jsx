import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import{ useDispatch } from 'react-redux';

function Support( ){
    const [ support, setSupport ] = useState( null );
    const dispatch = useDispatch();
    const history = useHistory();
    

    const changeSupport = (event)=>{
        setSupport(event.target.value);
        console.log(support);
    }

    const addSupport = ()=>{
        if( support === null ){
            alert('Pick a number between 1 and 5');
        }
        else if( dispatch({ type: 'SEND_SUPPORT', payload: support}))
                history.push( '/comments' );
    }
    return (
        <div>
            <div> 
            <h2>How well are you being supported?(1-5)</h2>
            <select onChange={changeSupport}>
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </select> <button onClick={addSupport}>NEXT</button>
        </div>
        </div>
    );
}

export default Support;