import React from "react";
import "./App.css";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/header/header.component";

import SignInAndSignUp from "../src/pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

import HomePage from "./pages/homepage/homepage.component";

import ShopPage from "./pages/shop/shop.component";

import CheckoutPage from "./pages/checkout/checkout.component";

import {
  auth,
  createUserProfileDocument,
} from "../src/firebase/firebase.utils";

import { setCurrentUser } from "./redux/user/user.actions";

import { selectCurrentUser } from "./redux/user/user.selectors";

class App extends React.Component {
  // constructor() {
  //   super();

  //   this.state = { currentUser: null };
  // }

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
          // console.log(this.state);
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth(); // this will close the subscription
  }

  render() {
    return (
      <div>
        <Header
        // currentUser={this.state.currentUser}
        />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  // it gives access to this.props.currentuser
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
