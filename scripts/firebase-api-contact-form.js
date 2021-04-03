// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCV6-efUlCaZoXzuD-nnNOd200p5inM6XM",
    authDomain: "minu1800-df37c.firebaseapp.com",
    projectId: "minu1800-df37c",
    storageBucket: "minu1800-df37c.appspot.com",
    messagingSenderId: "1001139316928",
    appId: "1:1001139316928:web:529f2df9d5341d73296525"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

// Start grabbing our DOM Elements 
const contactFormSubmitBtn = document.querySelector('#contactFormSubmit');

let contactFormName = document.querySelector('#contactFormName');
let contactFormEmail = document.querySelector('#contactFormEmail');
let contactFormPhone = document.querySelector('#contactFormPhone');
let contactFormIssue = document.querySelector('#contactFormIssue');
let contactFormMessage = document.querySelector('#contactFormMessage');

const db = firestore.collection("contactData");

contactFormSubmitBtn.addEventListener('click', function () {
    console.log("Hello");
    let contactNameInput = contactFormName.value;
    let contactEmailInput = contactFormEmail.value;
    let contactPhoneInput = contactFormPhone.value;
    let contactIssueInput = contactFormIssue.value;
    let contactMessageInput = contactFormMessage.value;

    // Access the Database Collection
    db.add({
        name: contactNameInput,
        email: contactEmailInput,
        phone: contactPhoneInput,
        issue: contactIssueInput,
        message: contactMessageInput
    }).then(function () {
        alert('We have received your message. Thank you for your feedback.')
        console.log('Data Saved.');
    }).catch(function (error) {
        console.log(error);
    });
});