import React, { Component } from "react";

class LoginForm extends Component {
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

  render() {
    return (
      <div>
        <h1>Login</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="usarname">UserName</label>
            <input
              autoFocus
              ref={this.username}
              id="usarname"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" className="form-control" />
          </div>
          <button className="btn btn-dark">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
