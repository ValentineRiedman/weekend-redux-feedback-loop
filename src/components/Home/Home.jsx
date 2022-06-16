import React from 'react';
import { useHistory } from 'react-router-dom';

function Home() {

  const history = useHistory();

  const start = ()=>{
    history.push( '/feeling');
  }
  return (
    <div>
      <h1>Welcome!</h1>
      <img src="https://freesvg.org/img/1547693317.png" width={500}/>
      <p>Please Leave your feedback.</p>
      <button onClick={start}>Start</button>
    </div>
  );
}

export default Home;
