import firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyBQmb0NzxuwULDG4hlX0yKL1gdVpgFrwQs",
    authDomain: "finfam-f5807.firebaseapp.com",
    projectId: "finfam-f5807",
    storageBucket: "finfam-f5807.appspot.com",
    messagingSenderId: "1011618389413",
    appId: "1:1011618389413:web:7cf954e15ab6f21ef39c4c",
    measurementId: "G-G0SPZN9CRM"
  };
  // Initialize Firebase
  const fireb=firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export default fireb;