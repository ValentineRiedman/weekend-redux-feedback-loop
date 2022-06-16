import { useState } from 'react';

function Understanding( props ){
    const [ hook, setHook ] = useState( null )
    return (
        <div>
            <div>
            <h2>How well are you understanding the content?(1-5)</h2>
            <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </select> <button>NEXT</button>
        </div>
        </div>
    );
}

export default Understanding;