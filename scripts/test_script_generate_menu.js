function writeMenus() {
    
    var menuRef = db.collection("menus");
    menuRef.add({
        code: "user1",
        name: "username",             
        picture: "somephoto.jpeg",
        template: "temp1",
        version: 56423

    });
    console.log("New collection added")
}
var menubtn = document.getElementById("newmenu")

menubtn.onclick = function(){
    writeMenus();
}
