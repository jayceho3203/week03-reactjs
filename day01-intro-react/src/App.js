import React from 'react';
import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
  return (
    <div className="App">
      <HelloWorld 
        name="John" 
        age={25} 
        greeting="Welcome"
      />
      <HelloWorld 
        name="Alice" 
        age={30}
      />
    </div>
  );
}

export default App;
