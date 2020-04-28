import React from 'react';
import './App.css';
import VegContainer from './VegContainer'

function App() {
	console.log(process.env);
  return (
    <div className="App">
      <VegContainer />
    </div>
  );
}

export default App;
