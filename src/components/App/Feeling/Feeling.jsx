import { useState } from 'react';

function Feeling( props ){
    const [ hook, setHook ] = useState( null )
    return (
        <div>
            <h2>How are you feeling today?(1-5)</h2>
            <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </select> <button>NEXT</button>
        </div>
    );
}

export default Feeling;