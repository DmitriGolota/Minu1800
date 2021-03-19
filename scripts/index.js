var myAudio = document.getElementById("myAudio");
var isPlaying = false;

/// Toggle Sound On and Off ///
function togglePlay() {
  isPlaying ? myAudio.pause() : myAudio.play();
};

myAudio.onplaying = function() {
  isPlaying = true;
};
myAudio.onpause = function() {
  isPlaying = false;
};

/// Modal ///

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/// profile button ///


document.getElementById("profile").addEventListener("click", function(event){
  window.location = "./login/login.html"
});




/// link on button click triggers
//document.getElementById('template').addEventListener('click', function (event) {};
//document.getElementById('guidedworkflow').addEventListener('click', function (event) {};
//document.getElementById('freestyle').addEventListener('click', function (event) {};