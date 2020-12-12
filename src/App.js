import React from 'react';
import Snake from './components/Snake/Snake';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Snake 
        color1="#248ec2"
        color2="#1d355e"
        backgroundColor="#ebebeb"
        />
    </div>
  );
}

export default App;
