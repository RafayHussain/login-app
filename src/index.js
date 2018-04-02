import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import CustomRoutes from './Routes';
import {firebaseApp} from './firebase';
// import registerServiceWorker from './registerServiceWorker';

firebaseApp.auth().onAuthStateChanged(user => {
  if(user){
    console.log("user has signed in or up", user);
    this.props.history.push('/app');
  }else{
    console.log("user has signed out or still need to sign in.");
  }
});


ReactDOM.render(<CustomRoutes />, document.getElementById('root'));
// registerServiceWorker();
