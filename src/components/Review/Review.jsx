import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector} from 'react-redux';
import axios from 'axios';

function Review(){
    const history = useHistory();
    const [ hook, setHook ] = useState( null )
    const sendFeeling = useSelector( store => store.sendFeeling );
    const sendUnderstanding = useSelector( store => store.sendUnderstanding );
    const sendSupport = useSelector( store => store.sendSupport);
    const sendComments = useSelector( store => store.sendComments );

    const addReview = ()=>{
        console.log('in addReview');
            axios.post('/feedback', {
                feelings: sendFeeling,
                understanding: sendUnderstanding,
                supported: sendSupport,
                comments: sendComments
            }).then(response => {
                console.log(response);
                history.push('/complete')
            }).catch(error => {
                console.log(error);
                alert(`Error Found: ${error}`);
            })
        }
    
    return (
        <div>
            <h2>Review</h2>
            <p>Feeling: {sendFeeling}</p>
            <p>Understanding: {sendUnderstanding}</p>
            <p>Support: {sendSupport}</p>
            <p>Comments: {sendComments}</p>
            <button onClick={addReview}>Submit</button>
        </div>
    );
}

export default Review;