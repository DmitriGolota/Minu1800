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

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
var uiConfig = {
    callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
            // User successfully signed in.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            //------------------------------------------------------------------------------------------
            // The code below is modified from default snippet provided by the FB documentation.
            //
            // If the user is a "brand new" user, then create a new "user" in your own database.
            // Assign this user with the name and email provided.
            // Before this works, you must enable "Firestore" from the firebase console.
            // The Firestore rules must allow the user to write. 
            //------------------------------------------------------------------------------------------
            var user = authResult.user;
            if (authResult.additionalUserInfo.isNewUser) {         //if new user
                db.collection("users").doc(user.uid).set({         //write to firestore
                    name: user.displayName,                    //"users" collection
                    email: user.email                          //with authenticated user's ID (user.uid)
                }).then(function () {
                    console.log("New user added to firestore");
                    window.location.assign("./profile.html");       //re-direct to main.html after signup
                })
                    .catch(function (error) {
                        console.log("Error adding new user: " + error);
                    });
            } else {
                return true;
            }
            return false;
        },
        uiShown: function () {
            // The widget is rendered.
            // Hide the loader.
            // document.getElementById('loader').style.display = 'none';
        }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: './profile.html',
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        //firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        //firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        //firebase.auth.PhoneAuthProvider.PROVIDER_ID
    ],
    // Terms of service url.
    tosUrl: '<your-tos-url>',
    // Privacy policy url.
    privacyPolicyUrl: '<your-privacy-policy-url>'
};
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);

// Help message toggle
helpMessage = document.getElementById("help-message-container");
document.getElementById("help-button").addEventListener("click", function (event) {
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