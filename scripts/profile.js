let editNameBtn = document.getElementById('edit-name');
let editTelBtn = document.getElementById('edit-tel');
let editBusinessBtn = document.getElementById('edit-business');
let editEmailBtn = document.getElementById('edit-email');


editNameBtn.addEventListener("click", editName);
editTelBtn.addEventListener("click", editTel);
editBusinessBtn.addEventListener("click", editBusiness);
editEmailBtn.addEventListener("click", editEmail);

function editName() {
    prompt("Please enter your name");
}

function editTel() {
    prompt("Please enter a telephone number");
}

function editEmail() {
    prompt("Please enter a new email");
}

function editBusiness() {
    prompt("Please enter your business name");
}

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
const db = firebase.firestore();

// write name to name field from user db
// function writeName(){
//     firebase.auth().onAuthStateChanged(function(somebody){
//         if(somebody){
//             console.log(somebody.uid);
//             db.collection("users")
//             .doc(somebody.uid)
//             .get()
//             .then(function(doc){
//                 console.log(doc.data().name);
//                 var n = doc.data().name;

//                 $(".name-from-db").text(n)
//             })
//         }
//     })
// }
// writeName();
