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
import PropertyUpdate from "./screens/updatePages/PropertyUpdate";
import CustomerUpdate from "./screens/updatePages/CustomerUpdate";
import AdmiUpdate from "./screens/updatePages/AdmiUpdate";
import AddAdmi from "./screens/otherAdmi/AddAdmi";
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
            <Route exact path="/signin" component={Admi} />

            <Switch>
              <PrivateRoute exact path="/cart" component={Orders} />
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute exact path="/add-item" component={AddItem} />
              <PrivateRoute exact path="/customers" component={User} />
              <PrivateRoute exact path="/admin" component={ManageAdmin} />
              <PrivateRoute exact path="/products" component={Product} />
              <PrivateRoute exact path="/add-admi" component={AddAdmi} />
              <PrivateRoute
                exact
                path="/update-product"
                component={PropertyUpdate}
              />
              <PrivateRoute exact path="/update-admi" component={AdmiUpdate} />
              <PrivateRoute
                exact
                path="/update-customer"
                component={CustomerUpdate}
              />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
