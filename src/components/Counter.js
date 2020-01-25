import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };
  // setState(updater[, callback]) => use componentDidUpdate or a setState callback (setState(updater, callback)),
  //either of which are guaranteed to fire after the update has been applied.

  // observe the asyncrhrony with the two console.log
  // increaseCount = () => {
  //   this.setState(
  //     {
  //       count: this.state.count + 1
  //     },
  //     () => console.log("Callback Value:", this.state.count)
  //   );
  //   // console.log(this.state.count); ==> if you want to see what's going on after the state has changed, place it as the 2nd parameters of setState()
  // };

  // in order to increase by 5, will the code below work? observe what happens in the log with the increaseCount() above vs. below.
  //Think of setState() as a request rather than an immediate command to update the component.
  // For better perceived performance, React may delay it, and then update several components in a single pass.
  // React does not guarantee that the state changes are applied immediately.
  increaseByFive = () => {
    this.increaseCount();
    this.increaseCount();
    this.increaseCount();
    this.increaseCount();
    this.increaseCount();
  };

  // setState w/ an updater
  increaseCount = () => {
    this.setState(
      (prevState) => ({
        count: prevState.count + 1
      }),
      () => console.log(this.state.count)
    );
    console.log(this.state.count);
  };
  render() {
    return (
      <div>
        <div>count - {this.state.count} </div>
        <button onClick={this.increaseByFive}> Increment </button>
      </div>
    );
  }
}
export default Counter;
