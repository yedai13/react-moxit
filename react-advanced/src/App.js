import React, { Component } from "react";
import MoviePage from "./context/MoviePage";
import UserContext from "./context/userContext";

class App extends Component {
  state = { currentUser: { name: "Facundo" } };
  render() {
    return (
      <UserContext.Provider value={this.state.currentUser}>
        <div>
          <MoviePage />
        </div>
      </UserContext.Provider>
    );
  }
}

export default App;

// import logo from "./logo.svg";
// import "./App.css";
// import Counter from "./hooks/Counter";
// import Movie from "./hoc/Movie";
// import Users from "./hooks/Users";

// function App() {
//   return <Users />;
//   // <Counter />;
//   // <Movie id={1} />;
// }

// export default App;
