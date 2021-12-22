import React, { Component } from "react";
import Input from "./common/input";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
  };
  username = React.createRef();

  //   componentDidMount() {
  //     this.username.current.focus();
  //   }

  handleSubmit = (e) => {
    e.preventDefault();

    //call the server
    const username = this.username.current.value;
    console.log("submitted");
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;
    return (
      <div>
        <h1>Login</h1>

        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            label="Username"
            value={account.username}
            onChange={this.handleChange}
          />
          <Input
            name="password"
            label="Password"
            value={account.password}
            onChange={this.handleChange}
          />
          <button className="btn btn-dark">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
