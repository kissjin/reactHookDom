import React from 'react';
// import ReactDOM from 'react-dom';
//react生命周期的学习和state的学习
export default class Example4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount () {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount () {
    clearInterval(this.timerID);
  }
  tick () {
    this.setState({
      date: new Date()
    });
  }

  render () {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}