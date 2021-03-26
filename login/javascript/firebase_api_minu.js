// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCV6-efUlCaZoXzuD-nnNOd200p5inM6XM",
    authDomain: "calebmarch02demo.firebaseapp.com",
    projectId: "calebmarch02demo",
    storageBucket: "calebmarch02demo.appspot.com",
    messagingSenderId: "824313031068",
    appId: "1:824313031068:web:b84179c930cc8e57c00059"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Help message toggle
helpMessage = document.getElementById("help-message-container");
document.getElementById("help-button").addEventListener("click", function(event) {
    if (helpMessage.style.display == "none") {
        helpMessage.style.display = "block";
    }
    else if (helpMessage.style.display == "block") {
        helpMessage.style.display = "none";
    }
});

/// firebase.auth().onAuthStateChanged(function(user) {
///     if (user) {
///       // User is signed in.
///       window.location = "/profile.html"
///     } else {
///       // No user is signed in.
///       window.location = "/login/login.html"
///     }
///   });