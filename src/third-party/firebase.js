var firebase = require('firebase');

var config = {
    apiKey: "AIzaSyACswlmIpJ-P_XQr88GA5gL5rycYZzQGDU",
    authDomain: "startupped-9dc21.firebaseapp.com",
    databaseURL: "https://startupped-9dc21.firebaseio.com",
    storageBucket: "startupped-9dc21.appspot.com",
    messagingSenderId: "906063853124"
  };
  
firebase.initializeApp(config);

module.exports = firebase;