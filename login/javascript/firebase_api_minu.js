// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDtBbbUTp9w3NpSMq2R14DrVaCi33U-Rlk",
    authDomain: "calebmarch02demo.firebaseapp.com",
    projectId: "calebmarch02demo",
    storageBucket: "calebmarch02demo.appspot.com",
    messagingSenderId: "824313031068",
    appId: "1:824313031068:web:b84179c930cc8e57c00059"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

var uiConfig = {
    callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
            // User successfully signed in.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            return true;
        },
        uiShown: function () {
            // The widget is rendered.
            // Hide the loader.
            document.getElementById('loader').style.display = 'none';
        }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: "insert url to landing page",
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        // firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        // firebase.auth.PhoneAuthProvider.PROVIDER_ID
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
document.getElementById("help-button").addEventListener("click", function(event) {
    if (helpMessage.style.display == "none") {
        helpMessage.style.display = "block";
    }
    else if (helpMessage.style.display == "block") {
        helpMessage.style.display = "none";
    }
});