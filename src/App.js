import React, { Component } from 'react';
import './App.css';
import {firebaseApp} from './firebase';


class App extends Component {

    signOut(){
      firebaseApp.auth().signOut();
    }

  render() {
    return (
      <div className="">
        <div className="topBr">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <header className="App-header">
                  <h2 className="m-0">Dashboard</h2>
                  <button className="btn btn-logout" onClick={() => this.signOut()}>Sign Out</button>
                </header> 
              </div>
            </div>
          </div>
        </div>

      <div className="middleContent">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="text-center">
                <h1 className="App-title">Welcome to Dashboard</h1>
                <p className="App-intro">
                  To get started, edit <code>src/App.js</code> and save to reload.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      
    );
  }
}

export default App;
