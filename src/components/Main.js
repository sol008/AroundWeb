import React from "react";
import { Register } from "./Register";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import { Login } from "./Login";
import { Home } from "./Home";

export class Main extends React.Component {
  getLogin = () => {
    //this.props.handleLogin
    return this.props.isLoggedIn ? <Redirect to="/home" /> : 
    <Login handleLogin={this.props.handleLogin} />;
  };

  getHome = () => {
    return this.props.isLoggedIn ? <Home /> : <Redirect to="login" />;
  };

  render() {
    return (
      <div className="main">
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" render={this.getLogin} />
          <Route path="/home" render={this.getHome} />
          <Route render={this.getLogin} />
        </Switch>

        <Link to="/register">Register</Link>
        <br />
        <Link to="/login">Login</Link>
        <br />
        <Link to="/home">Home</Link>
        <br />
      </div>
    );
  }
}
