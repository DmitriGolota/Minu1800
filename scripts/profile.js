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
                setup_data_table();
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
tomenu.onclick = function () {
    var menuRef = db.collection("menus");
    menuRef.add({
        user_email: userDoc.email,
        name: userDoc.name,
        is_new: true,
        html: '',
        menu_name: 'New Menu',
        last_edited: (new Date()).toDateString()
    }).then(doc => {
        window.location = "./main_tool.html?id=" + doc.id;
    });
}


function setup_data_table() {
    db.collection("menus").where("user_email", "==", userDoc.email)
        .get()
        .then((querySnapshot) => {
            let table = document.getElementById('data-table');
            table.innerHTML = '';
            table.innerHTML += ('<thead>\
                <tr>\
                <th scope="col" colspan="2">Menu Name</th>\
                <th scope="col">Last Edited</th>\
                <th scope="col">Action</th></tr></thead>');
            let new_tbody = document.createElement('tbody');
            table.appendChild(new_tbody);
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.data())
                new_tbody.innerHTML +=
                    '<tr id = "' + doc.id + '" class= "table-rows">\
                    <td colspan="2">' + doc.data().menu_name + '</td>\
                    <td>' + doc.data().last_edited + '</td>\
                    <td>\
                    <div class="actions">\
                    <i id="edit-menu-' + doc.id + '" class="far fa-edit edit-menu-btns"></i>\
                    <i id="delete-menu-' + doc.id + '" class="far fa-trash-alt del-menu-btns"></i>\
                    </div></td></tr>';
            });

            let edit_btns = document.getElementsByClassName('edit-menu-btns');
            let del_btns = document.getElementsByClassName('del-menu-btns');

            for (let button of del_btns) {
                // Delete button deletes each menu from profile for each menu created.
                let tar = document.getElementById(button.id.split('-')[2]);
                button.onclick = function () {
                    db.collection("menus").doc(button.id.split('-')[2]).delete().then(() => {
                        console.log("Document successfully deleted!");
                        tar.remove();
                    }).catch((error) => {
                        console.error("Error removing document: ", error);
                    });
                }
            }

            for (let button of edit_btns) {
                button.onclick = function () {
                    window.location = "./main_tool.html?id=" + button.id.split('-')[2];
                }
            }
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
}
