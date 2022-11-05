import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDOIx-Yb4bSu82y3n6-2OAAu2S441eFT_A",
    authDomain: "wireless-buzzer-75e48.firebaseapp.com",
    databaseURL: "https://wireless-buzzer-75e48-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "wireless-buzzer-75e48",
    storageBucket: "wireless-buzzer-75e48.appspot.com",
    messagingSenderId: "444936044036",
    appId: "1:444936044036:web:13ba2a3e143fa7cc697f51",
    measurementId: "G-W1Z88MSZX1"
  };



// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();