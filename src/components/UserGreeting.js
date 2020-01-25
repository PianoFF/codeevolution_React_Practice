import React, { Component } from "react"

class UserGreeting extends Component {
  state = {
    isLoggedIn: false
  }

  render() {
    // conditional rendering with JS variables
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome FF and Kyle</div>;
    // } else {
    //   message = <div> Welcome Guest</div>;
    // }
    // return <div> {message}</div>;
    //    //    //    //    //    //    //    //    //
    //conditional rendering with if/else
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome FF and Kyle</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }
    //    //    //    //    //    //    //    //    //
    // conditional rendering with ternary operator
    // return (
    //   <div>
    //     {this.state.isLoggedIn ? (
    //       <div>Welcom FF and Kyle</div>
    //     ) : (
    //       <div> Welcom Guest </div>
    //     )}
    //     <button
    //       onClick={() => {
    //         this.setState({ isLoggedIn: !this.state.isLoggedIn });
    //       }}>
    //       Log in
    //     </button>
    //   </div>
    // );
    //    //    //    //    //    //    //    //    //
    // conditional rendering with shortcircut operator
    return (
      <div>
        {this.state.isLoggedIn && <div> Welcome FF and Kyle</div>}
        <button onClick={this.logUserIn}>
          {this.state.isLoggedIn ? "Log out" : "Log in"}
        </button>
      </div>
    )
  }
  logUserIn = () => {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn
    })
  }
}
export default UserGreeting
