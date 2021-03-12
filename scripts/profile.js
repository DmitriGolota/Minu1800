let usernameBtn = document.getElementById('editUsername');
let passwordBtn = document.getElementById('editPassword');
let emailBtn = document.getElementById('editEmail');

usernameBtn.addEventListener("click", editUsername);
passwordBtn.addEventListener("click", editPassword);
emailBtn.addEventListener("click", editEmail);

function editUsername() {
    prompt("Please enter a new username");
}

function editPassword() {
    prompt("Please enter a new password");
}

function editEmail() {
    prompt("Please enter a new email");
}

