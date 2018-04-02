import React from 'react';
import {
  Router,
  Route
} from 'react-router-dom';
import createBrowserHistory from "history/createBrowserHistory";
import SignIn from './SignIn';
import SignUp from './SignUp';
import App from './App';


const customHistory = createBrowserHistory();
const CustomRoutes = () => (
  <Router history={customHistory}>
    <div>
      <Route exact path="/" component={SignIn} />
      <Route path="/sign_up" component={SignUp} />
      <Route path="/app" component={App} />
    </div>
  </Router>
)

export default CustomRoutes;