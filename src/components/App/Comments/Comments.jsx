import { useState } from 'react';

function Comments( props ){
    const [ hook, setHook ] = useState( null )
    return (
        <div>
            <h2>Comments</h2>
            <p>Props: { JSON.stringify( props ) }</p>
        </div>
    );
}

export default Comments;