import React, { Component } from "react";
import Login from "./context/Login";
import MoviePage from "./context/MoviePage";
import UserContext from "./context/userContext";
import CartContext from "./context/cartContext";

class App extends Component {
  handleLoggedIn = (username) => {
    console.log("Getting the user:" + username);
    const user = { name: "Facundo" };
    this.setState({ currentUser: user });
  };

  state = { currentUser: null };
  render() {
    return (
      <CartContext.Provider value={{ cart: [] }}>
        <UserContext.Provider
          value={{
            currentUser: this.state.currentUser,
            onLoggedIn: this.handleLoggedIn,
          }}
        >
          <div>
            <MoviePage />
            <Login />
          </div>
        </UserContext.Provider>
      </CartContext.Provider>
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
