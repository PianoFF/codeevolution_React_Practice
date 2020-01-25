import React, { Component } from "react";

class EventBind extends Component {
  state = {
    message: "Hello"
  };

  /*
  arrow functions makes these class properties which one can pass into render functions.
*/
  changeMessage = () => {
    this.setState(
      {
        message: this.state.message === "Hello" ? "Goodbye" : "Hello"
      },
      () => console.log(this.state.message)
    );
  };
  render() {
    return (
      <div>
        <h1> {this.state.message} </h1>
        <button onClick={this.changeMessage}>Click me!</button>
      </div>
    );
  }
}
export default EventBind;
