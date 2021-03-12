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

// Return to top button
document.getElementById("return-to-top-button").addEventListener("click", function(event) {
    document.documentElement.scrollTop = 0;
});