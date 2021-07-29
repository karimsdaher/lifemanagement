// firebase.js

import firebase from 'firebase/app';
import 'firebase/database';


    const config = {
        apiKey: "AIzaSyC83TYynmq-keZa9mGca_6WWQcHCdoGyWw",
        authDomain: "todoapp-7d660.firebaseapp.com",
        databaseURL: "https://todoapp-7d660-default-rtdb.firebaseio.com",
        projectId: "todoapp-7d660",
        storageBucket: "todoapp-7d660.appspot.com",
        messagingSenderId: "838516804265",
        appId: "1:838516804265:web:745632b1fb46c52db9b7b8"
  };
  firebase.initializeApp(config);

  // this exports the CONFIGURED version of firebase
  export default firebase;