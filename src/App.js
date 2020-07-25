import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { clearUserCart } from "./actions/cartActions";
import store from "./store";
import "./App.css";

// importing components
import PrivateRoute from "./component/widget/PrivateRoute";
import Dashboard from "./screens/dashboard/Dashboard";
import Admi from "./screens/otherAdmi/Admi";
import AddItem from "./screens/addItem/AddItem";
import Orders from "./screens/cart/Orders";
import ManageAdmin from "./screens/otherAdmi/manageAdmin";
import Product from "./screens/products/Product";
import User from "./screens/users/User";
// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    store.dispatch(clearUserCart());
    // Redirect to login
    window.location.href = "/signin";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/add-item" component={AddItem} />
            <Route exact path="/customers" component={User} />
            <Route exact path="/admin" component={ManageAdmin} />
            <Route exact path="/products" component={Product} />
            <Route exact path="/signin" component={Admi} />
            <Route exact path="/cart" component={Orders} />
            {/* <Switch>
              <PrivateRoute exact path="/cart" component={Orders} />
            </Switch> */}
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
