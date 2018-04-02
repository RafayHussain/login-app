import React, { Component } from 'react';
import Titles from './components/Titles';
import {firebaseApp} from './firebase';

class SignUp extends Component{

constructor(props){
  super(props);
  this.state = {
    email: '',
    password: '',
    error: {
      message: ''
    }
  };
  // this.emailHandler = this.emailHandler.bind(this);
  // this.passwordHandler = this.passwordHandler.bind(this);
  // this.signUp = this.signUp.bind(this);
}

// emailHandler(event) {
//    this.setState({email: event.target.value});
// }

// passwordHandler(event) {
//   this.setState({password: event.target.value});
// }

signUp(){
  const {email, password} = this.state;
  firebaseApp.auth().createUserWithEmailAndPassword(email, password)
  .catch(error => {
    this.setState({error})
  });
}

render(){
  return(
    <div className="wrapper">
      <div className="container main">
        <div className="row">
          <div className="col-sm-6 col-xs-12 p-0">
            <div className="title-container">
              <Titles innerText="Sign up to Dashboard" path="/"  signText="Sign In" />
            </div>
          </div>
          <div className="col-sm-6 col-xs-12 p-0">
            <div className="form-container">
              <form>
                <input type="email" onChange={event => this.setState({email: event.target.value})} placeholder="Email address" />
                <input type="password" onChange={event => this.setState({password: event.target.value})} placeholder="Password" />
                <button type="button" onClick={() => this.signUp()} className="btn btn-default signBtn">Sign Up</button>
                <p>{this.state.error.message}</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
    

}

export default SignUp;
