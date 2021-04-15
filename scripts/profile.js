var firebaseConfig = {
    apiKey: "AIzaSyCV6-efUlCaZoXzuD-nnNOd200p5inM6XM",
    authDomain: "minu1800-df37c.firebaseapp.com",
    projectId: "minu1800-df37c",
    storageBucket: "minu1800-df37c.appspot.com",
    messagingSenderId: "1001139316928",
    appId: "1:1001139316928:web:529f2df9d5341d73296525"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

let editNameBtn = document.getElementById('edit-name');
let editTelBtn = document.getElementById('edit-tel');
let editBusinessBtn = document.getElementById('edit-business');
let editEmailBtn = document.getElementById('edit-email');
let userDoc = {};
// Initialize Firebase

let uid;
editNameBtn.addEventListener("click", editName);
editTelBtn.addEventListener("click", editTel);
editBusinessBtn.addEventListener("click", editBusiness);
editEmailBtn.addEventListener("click", editEmail);

function editName() {
    const newName = prompt("Please enter your name");
    userDoc.name = newName;
    updateToFireStore();
}

function editTel() {
    const newTel = prompt("Please enter a telephone number");
    userDoc.tel = newTel;
    updateToFireStore();
}

function editEmail() {
    const newEmail = prompt("Please enter a new email");
    userDoc.email = newEmail;
    updateToFireStore();
}

function editBusiness() {
    const newBusiness = prompt("Please enter your business name");
    userDoc.business = newBusiness;
    updateToFireStore();
}

function updateToFireStore() {
    db.collection("users").doc(uid).update(userDoc)
    .then(() => {
        updateDocToScreen();
        console.log("Document successfully updated!");
    })
    .catch((error) => {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
}

function updateDocToScreen() {
    document.getElementById('name-from-db').innerHTML = userDoc.name;
    document.getElementById('email-from-db').innerHTML = userDoc.email;
    document.getElementById('business-from-db').innerHTML = userDoc.business;
    document.getElementById('tel-from-db').innerHTML = userDoc.tel;
}

firebase.auth().onAuthStateChanged(function (somebody) {
    if (somebody) {
        console.log(somebody.uid);
        uid = somebody.uid;
        db.collection("users")
            .doc(somebody.uid)
            .get()
            .then(function (doc) {
                console.log(doc.data());
                userDoc = doc.data();
                updateDocToScreen();
            })
    }
});

// Welcome message
function sayHello() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            // Do something for the user here. 
            db.collection("users").doc(user.uid)
                .get()
                .then(function (doc) {
                    var n = doc.data().name;
                    document.getElementById("welcome-message").innerText = n;
                })
        } else {
            // No user is signed in.
        }
    });
}
sayHello();


// Link to main tool page from profile page

let tomenu = document.getElementById("to-tool")
tomenu.onclick = function(){
    window.location = "./main_tool.html"
}

// Delete button deletes each menu from profile for each menu created.

let deletemenu1 = document.getElementById('delete-menu-1')
deletemenu1.onclick = function(){
    menusection = document.getElementById('tr-1')
    menusection.remove()
}
let deletemenu2 = document.getElementById('delete-menu-2')
deletemenu2.onclick = function(){
    menusection = document.getElementById('tr-2')
    menusection.remove()
}
let deletemenu3 = document.getElementById('delete-menu-3')
deletemenu3.onclick = function(){
    menusection = document.getElementById('tr-3')
    menusection.remove()
}
let deletemenu4 = document.getElementById('delete-menu-4')
deletemenu4.onclick = function(){
    menusection = document.getElementById('tr-4')
    menusection.remove()
}

// Edit button takes you to main tool page and loads the html

let editmenu1 = document.getElementById('edit-menu-1');
var htmltext = ""
var htmltext2 = ""
var htmllegit = ""
editmenu1.onclick = function(){
    // testing from known data
    db.collection('menus').doc('U2QjY28DGV6FYOHGPSXS')
    .onSnapshot(function(c){
        conv = (c.data().html);

        htmltext = JSON.stringify(conv)
        htmltext2 = conv.replace(/(\r\n|\n|\r)/gm, "");
        htmllegit = htmltext2.toString();
        console.log(htmltext);
        console.log(htmltext2);
        console.log(htmllegit);
        
        window.location= './main_tool.html?htmltexts=' + htmllegit;
    })

}