import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
      this.logoutHandler = this.logoutHandler.bind(this);
    }

    logoutHandler(){
      this.props.history.push('/');
    }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <header className="App-header">
              <img src={logo} className="App-logo text-left" alt="logo" />
              <button className="btn btn-logout" onClick={this.logoutHandler}>Logout</button>
            </header> 
            <h1 className="App-title">Welcome to React</h1>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div>
        </div>
      </div>
      
    );
  }
}

export default App;
