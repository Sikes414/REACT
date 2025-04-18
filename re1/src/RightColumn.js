import React, { Component } from 'react';

class ClickCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div>
        <p>Button clicked {this.state.count} times</p>
        <button onClick={this.increment}>Click Me</button>
      </div>
    );
  }
}

class RightColumn extends Component {
  render() {
    return (
      <div>
        <h2>Right Column</h2>
        <ClickCounter />
      </div>
    );
  }
}

export default RightColumn;
