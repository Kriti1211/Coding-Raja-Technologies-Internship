let firebaseConfig = {
    apiKey: "AIzaSyBjHgJoOT0MSwissrrQD7392zcFJWveBsY",
    authDomain: "blogging-website-22ac7.firebaseapp.com",
    projectId: "blogging-website-22ac7",
    storageBucket: "blogging-website-22ac7.appspot.com",
    messagingSenderId: "782063845709",
    appId: "1:782063845709:web:dce81e2a1ef99328a07704"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();