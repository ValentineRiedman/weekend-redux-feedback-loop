import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers} from 'redux';
import { Provider } from 'react-redux';

const sendFeeling = ( state= null, action )=>{
    console.log( 'in sendFeeling:', action );
    if ( action.type === 'SEND_FEELING'){
        state = action.payload;           
    }
    return state;
}

const sendUnderstanding = ( state = null , action )=>{
    console.log( 'in sendUnderstanding:', action );
    if ( action.type === 'SEND_UNDERSTANDING'){
        state = action.payload;
    }
    return state;
}

const sendSupport =( state = null, action )=>{
    console.log( ' in sendSupport:', action );
    if ( action.type === 'SEND_SUPPORT'){
        state = action.payload;
    }
    return state;
}

const sendComments =( state = '', action)=>{
    console.log( 'in sendComments:', action);
    if ( action.type === 'SEND_COMMENTS'){
        state = action.payload;
    }
    return state;
}


const store = createStore(
    combineReducers({
        sendFeeling,
        sendUnderstanding,
        sendSupport,
        sendComments,
    })
)


ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

