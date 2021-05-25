import React from 'react';
// import ReactDOM from 'react-dom';
//react事件的学习
export const Example5 = () => {
  function handleClick (e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="https://zhuanlan.zhihu.com/p/73605806" onClick={handleClick}>
      Click me
    </a>
  );
}

// export default class Example5 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { isToggleOn: true };

//     // 为了在回调中使用 `this`，这个绑定是必不可少的
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick () {
//     this.setState(state => ({
//       isToggleOn: !state.isToggleOn
//     }));
//   }

//   render () {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? 'ON' : 'OFF'}
//       </button>
//     );
//   }
// }