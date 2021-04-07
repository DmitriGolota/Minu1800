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

/// profile button ///

document.getElementById("profile").addEventListener("click", function(event){
      window.location = "./login.html"
});