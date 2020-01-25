import React, { Component } from "react";
import { ChildComponent } from "./ChildComponent";

class ParentComponent extends Component {
  state = {
    parentName: "Parent"
  };

  greetParent = (arg) => {
    alert(`Hello ${this.state.parentName} from ${arg}`);
  };
  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent} />
      </div>
    );
  }
}
export default ParentComponent;
