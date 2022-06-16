import { useState } from 'react';

function Support( props ){
    const [ hook, setHook ] = useState( null )
    return (
        <div>
            <h2>Support</h2>
            <p>Props: { JSON.stringify( props ) }</p>
        </div>
    );
}

export default Support;