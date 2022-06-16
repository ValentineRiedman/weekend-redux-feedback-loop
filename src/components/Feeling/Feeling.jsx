import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Feeling( props ){

    const history = useHistory();
    const [ hook, setHook ] = useState( null )

    const next = ()=>{
        history.push( '/understanding');
      }
    return (
        <div>
            <h2>How are you feeling today?(1-5)</h2>
            <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </select> <button onClick={next}>NEXT</button>
        </div>
    );
}

export default Feeling;