var cycleright = document.getElementById("selectright");
var cycleleft = document.getElementById("selectleft");

var cycleleftcolor = document.getElementById("selectleftcolor")
var cyclerightcolor = document.getElementById("selectrightcolor")

// Set title font size
let fontsize = document.getElementById("title")
fontsize.style.fontSize = "100px"

let fontcounter = 0
let colorcounter = 0
// jsons
fonts = {
    "1" : "Impact,Charcoal,sans-serif",
    "2" : '"Sofia", sans-serif',
    "3" : '"Tangerine", serif',
    "4" : "'Almendra Display'",
}
color = {
    "1" : "#FFCCCC",
    "2" : "#9adee7",
    "3" :  "#c5c5c5",
}

// Cycle Title Font
cycleright.onclick = function(){
    fontcounter += 1;
    let fontchange = document.getElementById("title");
    fontchange.style.fontFamily = fonts[fontcounter]; 
}

cycleleft.onclick = function(){
    fontcounter -= 1;
    let fontchange = document.getElementById("title");
    fontchange.style.fontFamily = fonts[fontcounter];
}

//Cycle Page Color
// Jquery Colorwheel?? or Preset options?

cycleleftcolor.onclick = function(){
    colorcounter -= 1
    let colorchange = document.getElementById("menusample");
    colorchange.style.backgroundColor = color[colorcounter]
}

cyclerightcolor.onclick = function(){
    colorcounter += 1
    let colorchange = document.getElementById("menusample");
    colorchange.style.backgroundColor = color[colorcounter]
}

