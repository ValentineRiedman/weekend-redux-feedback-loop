import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import{useDispatch} from 'react-redux';

function Feeling( props ){
    const dispatch = useDispatch();
    const history = useHistory();
    const [ feeling, setFeeling ] = useState( '' )

    const changeFeeling = (event)=>{
        console.log(feeling);
        setFeeling(event.target.value);
    }

    const addFeeling = ()=>{
        dispatch({ type:'SEND_FEELING', payload: feeling})
        history.push( '/understanding');
      }
    return (
        <div>
            <h2>How are you feeling today?(1-5)</h2>
            <select onChange={changeFeeling}>
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