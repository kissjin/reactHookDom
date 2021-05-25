import React from 'react';
//react条件渲染的学习

function UserGreeting (props) {
  return <h1>Welcome back!</h1>;
}

// function GuestGreeting (props) {
//   return <h1>Please sign up.</h1>;
// }

const Greeting = (props) => {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return null;
}
function LoginButton (props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton (props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}



export default class Example6 extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick () {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick () {
    this.setState({ isLoggedIn: false });
  }

  render () {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
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