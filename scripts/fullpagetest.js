var myAudio = document.getElementById("myAudio");
var isPlaying = false;

function togglePlay() {
  isPlaying ? myAudio.pause() : myAudio.play();
};

myAudio.onplaying = function() {
  isPlaying = true;
};
myAudio.onpause = function() {
  isPlaying = false;
};

function open_litebox(link) {
  var overlay_black = 'position:absolute;top:0%;left:0%;width:100%;height:100%;background:black;z-index:1001;opacity:0.5;';
  var overlay_white = 'position:absolute;top:50%;left:50%;background-color:white;z-index:1002;overflow:auto;width:400px;height:400px;margin-left:-200px;margin-top:-200px';
  $('body').append('<div style="' + overlay_black + '"></div>');
  var overlay_white = 'position:absolute;top:25%;left:25%;padding:5px;background-color:white;z-index:1002;overflow:auto;';
  $('body').append('<div style="' + overlay_white + '"><p>heeeyyy</p></div>');
}
