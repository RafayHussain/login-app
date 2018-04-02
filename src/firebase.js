import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDFTWX4WUxO8RCn-tCOKcTzfqwhy9npUFA",
  authDomain: "react-basic-app.firebaseapp.com",
  databaseURL: "https://react-basic-app.firebaseio.com",
  projectId: "react-basic-app",
  storageBucket: "react-basic-app.appspot.com",
  messagingSenderId: "516795276432"
};

export const firebaseApp = firebase.initializeApp(config);