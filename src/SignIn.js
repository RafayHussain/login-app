import React, { Component } from 'react';
import Titles from './components/Titles';
import {firebaseApp} from './firebase';


class SignIn extends Component{
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
    // this.signIn = this.signIn.bind(this);
  }
  
  // emailHandler(event) {
  //    this.setState({email: event.target.value});
  // }
  
  // passwordHandler(event) {
  //   this.setState({password: event.target.value});
  // }
  
  signIn(){
    const {email, password} = this.state;
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
    .catch(error => {
      this.setState({error})
    });

    firebaseApp.auth().onAuthStateChanged(user => {
      if(user){
        console.log("user has signed in or up", user);
        this.props.history.push('/app');
      }else{
        console.log("user has signed out or still need to sign in.");
      }
    });
  }  
  render(){
    return(
      <div className="wrapper">
        <div className="container main">
          <div className="row">
            <div className="col-sm-6 col-xs-12 p-0">
              <div className="title-container">
                <Titles innerText="Sign in to Dashboard" path="/sign_up" signText="Sign Up" />
              </div>
            </div>
            <div className="col-sm-6 col-xs-12 p-0">
              <div className="form-container">
                <form>
                  <input type="email" onChange={event => this.setState({email: event.target.value})} placeholder="Email address" />
                  <input type="password" onChange={event => this.setState({password: event.target.value})} placeholder="Password" />
                  <button type="button" onClick={() => this.signIn()} className="btn btn-default signBtn">Sign In</button>
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

export default SignIn;
