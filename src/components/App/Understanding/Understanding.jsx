import { useState } from 'react';

function Understanding( props ){
    const [ hook, setHook ] = useState( null )
    return (
        <div>
            <h2>Understanding</h2>
            <p>Props: { JSON.stringify( props ) }</p>
        </div>
    );
}

export default Understanding;