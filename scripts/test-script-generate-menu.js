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


let divitem = $('#db-div').html();

function writeMenus() {
    
    var menuRef = db.collection("menus");
    menuRef.add({
        code: "user1",
        name: "username",             
        picture: "somephoto.jpeg",
        template: "temp1",
        version: 56423,
        html: divitem.toString()

    });
    console.log("New collection added")
}
var menubtn = document.getElementById("generate_menu")

menubtn.onclick = function(){
    writeMenus();
}
