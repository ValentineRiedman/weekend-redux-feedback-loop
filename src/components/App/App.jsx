import React from 'react';
import axios from 'axios';
import './App.css';
import { Route, HashRouter } from 'react-router-dom';

import Home from '../Home/Home';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <HashRouter>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/feeling">
          <Feeling/>
        </Route>
        <Route path="/understanding">
          <Understanding/>
        </Route>
        <Route path="/support">
          <Support/>
        </Route>
        <Route path="/comments">
          <Comments/>
        </Route>
      </HashRouter>
    </div>
  );
}

export default App;
