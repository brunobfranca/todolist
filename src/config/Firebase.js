import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCoigAFmtu9pAPVTrAjDaSmIgmNcdkqNfM",
  authDomain: "to-do-list-5bf9e.firebaseapp.com",
  databaseURL: "https://to-do-list-5bf9e-default-rtdb.firebaseio.com",
  projectId: "to-do-list-5bf9e",
  storageBucket: "to-do-list-5bf9e.appspot.com",
  messagingSenderId: "698102903148",
  appId: "1:698102903148:web:d2e64e684c751fb4ae4349",
  measurementId: "G-NMTMQKK2R2"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase