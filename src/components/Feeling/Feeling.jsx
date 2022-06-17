import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {useDispatch} from 'react-redux';

function Feeling( ){
    const dispatch = useDispatch();
    const history = useHistory();
    const [ feeling, setFeeling ] = useState( null );

    const changeFeeling = (event)=>{
        console.log(feeling);
        setFeeling(event.target.value);
    }

    const addFeeling = ()=>{
        if( feeling === null){
            alert('Pick a number between 1 and 5');
        }
        
        else if (dispatch({ type:'SEND_FEELING', payload: feeling}))
                history.push( '/understanding');
      }
    return (
        <div>
            <h2>How are you feeling today?(1-5)</h2>
            <select onChange={changeFeeling}>
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </select> <button onClick={addFeeling}>NEXT</button>
        </div>
    );
}

export default Feeling;