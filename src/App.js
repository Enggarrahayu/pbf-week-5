import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './containers/Header'
import Footer from './containers/Footer'
import Home from './components/Home'
import { Contact } from './components/Contact';
import { Specials } from './components/Specials';
import { Details } from './components/Details';
import Checkout from './components/Checkout'
import {
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Header/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/specials" component={Specials} />
              <Route path="/contact" component={Contact} />
              <Route path="/details" component={Details} />
              <Route path="/login">
                <LoginPage/>
             </Route>
              <PrivateRoute path="/checkout">
                  <CheckoutPage />
              </PrivateRoute>
            </Switch>
        <Footer/>
    </BrowserRouter>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb){
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb){
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function AuthButton(){
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <p>
      <button onClick={() => {
        fakeAuth.signout(() => history.push("/"));}}>Sign out</button>
    </p>
  ) : (
    <p>You are not logged in</p>
  );
}

function PrivateRoute({children, ...rest}){
  return(
    <Route
    {...rest}
    render={({location}) => 
      fakeAuth.isAuthenticated ? (
        children
      ): (
        <Redirect
        to={{
          pathname: "/login",
          state: {from: location}
        }}
        />
      )
    }
    />
  );
}

function CheckoutPage(){
  return(
    <Checkout />
  )
}

function LoginPage(){
  let history = useHistory();
  let location = useLocation();

  let {from} = location.state || {from: {pathname: "/checkout"}};
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return(
    <div id="mainBody">
    <div className="container">
      <div className="login-wrap p-4 p-md-5">
        <div className="d-flex">
          <div className="w-100">
            <h3 className="mb-4">Sign In</h3>
          </div>
          <div className="w-100">
            <p className="social-media d-flex justify-content-end">
              <a href="#" className="social-icon d-flex align-items-center justify-content-center"><span className="fa fa-facebook" /></a>
              <a href="#" className="social-icon d-flex align-items-center justify-content-center"><span className="fa fa-twitter" /></a>
            </p>
          </div>
        </div>
        <form action="#" className="login-form">
          <div className="form-group">
            <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-user" /></div>
            <input type="text" className="form-control rounded-left" placeholder="Username"  />
          </div>
          <div className="form-group">
            <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-lock" /></div>
            <input type="password" className="form-control rounded-left" placeholder="Password" />
          </div>
          <div className="form-group d-flex align-items-center">
            <div className="w-100">
              <label className="checkbox-wrap checkbox-primary mb-0">Save Password
                <input type="checkbox" defaultChecked />
                <span className="checkmark" />
              </label>
            </div>
            <div className="w-100 d-flex justify-content-end">
              <button onClick={login} className="btn btn-primary rounded submit">Login</button>
            </div>
          </div>
          <div className="form-group mt-4">
            <div className="w-100 text-center">
              <p className="mb-1">Don't have an account? <a href="#">Sign Up</a></p>
              <p><a href="#">Forgot Password</a></p>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
}
export default App;
