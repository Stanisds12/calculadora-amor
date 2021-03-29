import React from 'react';

import './App.css';
import InputText from './components/InputText';

function App() {
  
  return (
    <div className="App">
      <nav className="navbar navbar-light bg-dark">
        <a className="navbar-brand text-danger" href={"/"}>Stani DEV</a>
      </nav>
      <InputText />
     
    </div>
  );
}

export default App;
