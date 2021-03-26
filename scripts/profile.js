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
// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();

// write name to name field from user db
function writeName(){
    firebase.auth().onAuthStateChanged(function(somebody){
        if(somebody){
            console.log(somebody.uid);
            db.collection("users")
            .doc(somebody.uid)
            .get()
            .then(function(doc){
                console.log(doc.data().name);
                var n = doc.data().name;

                $(".name-from-db").text(n)
            })
        }
    })
}
writeName();
