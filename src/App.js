import React from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";

import Header from "./components/header/header.component";

import SignInAndSignUp from "../src/pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

import HomePage from "./pages/homepage/homepage.component";

import ShopPage from "./pages/shop/shop.component";

import { auth } from "../src/firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = { currentUser: null };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user }); // checking the user is signed in it's a open subscription
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth(); // this will close the subscription
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
