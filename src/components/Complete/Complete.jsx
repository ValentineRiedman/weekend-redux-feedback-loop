import { useState } from 'react';
import{ useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';

function Complete(){
    const [ hook, setHook ] = useState( null )
    const history = useHistory();
    const dispatch = useDispatch();

    const anotherOne = () =>{
        dispatch({ type: 'CLEAR_FORM', state:'' })
        history.push('/');
    }
    return (
        <div>
            <h2>Feedback Complete!</h2>
            <p>Click to add feedback again</p>
            <button onClick={anotherOne}>Another One!</button>
        </div>
    );
}

export default Complete;