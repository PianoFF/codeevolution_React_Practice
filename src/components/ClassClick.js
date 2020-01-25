import React, { Component } from "react";

class ClassClick extends Component {
  clickHandler = () => {
    console.log("clicked on the click");
  };

  render() {
    return <button onClick={this.clickHandler}> Click on ME!</button>;
  }
}
export default ClassClick;
