import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet'
import Welcome from './components/Welcome'

function App() {

  return (
    <div className="App">
      <Greet name='Fangfei' profession="programmer">
        <p> This is a children component.</p>
      </Greet>

      <Greet name='Fangfei_2' profession="artist"> 
        <button> Action </button>
      </Greet>

      <Greet name='Fangfei_3' profession="musician"/>
      {/* */}
      <Welcome name='Fangfei' profession="programmer">
        <p> I'm a children component again</p>
      </Welcome>
      {/* passing children tags/componenets as props ==> 
        a way to pass in dynamiv HTML content
      */}
      <Welcome name='Fangfei_2' profession="artist"> 
        <Greet name="I'm a test" profession="childrenElement"/>
      </Welcome>

      <Welcome name='Fangfei_3' profession="musician"/>
    </div>
  );
}

export default App;
