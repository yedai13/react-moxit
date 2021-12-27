import React, { Component } from "react";
import UserContext from "./userContext";

class MovieList extends Component {
  static contextType = UserContext;

  componentDidMount() {
    console.log("context", this.context);
  }

  render() {
    return (
      <UserContext.Consumer>
        {(userContext) => <div>Movie List {userContext.name}</div>}
      </UserContext.Consumer>
    );
  }
}

// MovieList.contextType = UserContext; para asignar contexto

export default MovieList;
