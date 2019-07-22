import React, { Component } from "react";
import "./App.css";
import "./style.css";

class App extends Component {
  state = {
    count: 0,
    grab: "Likes"
  };
  handleClick = () => {
    if (this.state.count === 0) {
      this.setState({
        grab: "Like"
      });
    } else {
      this.setState({ grab: "Likes" });
    }
    this.setState(({ count }) => ({
      count: count + 1
    }));
  };

  render() {
    return (
      <button id="grab" onClick={this.handleClick}>
        {this.state.count} {this.state.grab}
      </button>
    );
  }
}

export default App;
