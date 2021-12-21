import React, { Component } from "react";

class LoginForm extends Component {
  render() {
    return (
      <div>
        <h1>Login</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="usarname">UserName</label>
            <input id="usarname" type="text" className="form-control" />
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

  handleSubmit = (e) => {
    e.preventDefault();

    //call the server
    console.log("submitted");
  };
}

export default LoginForm;
