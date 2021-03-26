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

