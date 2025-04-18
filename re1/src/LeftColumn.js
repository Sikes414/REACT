import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date().toLocaleTimeString() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return <div>Current Time: {this.state.time}</div>;
  }
}

class LeftColumn extends Component {
  render() {
    return (
      <div>
        <h2>Left Column</h2>
        <Clock />
      </div>
    );
  }
}

export default LeftColumn;
