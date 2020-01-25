import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Greet } from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Counter />
      {/* <Message />  */}
      {/* <Greet name='John' heroName='Superman'>
        <p> This is a children element </p> 
      </Greet>
      <Welcome name="Bruce" heroName="Batman"/> */}
    </div>
  );
}

export default App;
