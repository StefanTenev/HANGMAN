
import './App.css';
import Letters from './components/Letters';
import Rules from './components/Rules';


import React, { useState } from "react";

function App() {
  const [readRules, setReadRules] = useState(false)

  //toggle rules will be called on clicking the read rules button - making rules be either true or false - depending of the rules are shown or not
  function toggleRules(){
    if(readRules){
      setReadRules(false)
    }else{
      setReadRules(true)
    }
  }
  //rules will show/hide on press
  return (
    <div className="App">
      <Rules read={readRules} />
      <button onClick={event => { window.location.reload()}}>Restart Game</button>
      <button onClick={toggleRules}>{readRules? 'Hide Rules' :  'Read Rules'}</button>
      <Letters />
      
    </div>
  );
}

export default App;
