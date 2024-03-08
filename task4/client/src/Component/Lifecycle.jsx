import React, { Component } from "react";

class Lifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    console.log("Component mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component updated");
    if (prevState.count !== this.state.count) {
      console.log("Count changed");
    }
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }

  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  };
decrementCount = () => {
  this.setState((prevState) => ({
    count: prevState.count - 1
  }));
};
  render() {
    return (
      <>
        <div className="counter">
          <p>Count: {this.state.count}</p>
          <button onClick={this.incrementCount}>Increment</button>
          <button onClick={this.decrementCount}>Decrement</button>
        </div>
      </>
    );
  }
}

export { Lifecycle };
