let slider = document.getElementById("slider");

slider.addEventListener('change', function() {
    if (this.checked) {
        let mainBackground = document.getElementsByClassName("main-background");
        for(i = 0; i < mainBackground.length; i++) {
            mainBackground[i].style.backgroundColor = 'white';
        }
        let changeableText = document.getElementsByClassName("changeable-text");
        for(i = 0; i < changeableText.length; i++) {
            changeableText[i].style.color = 'black';
        }
    } else {
        let mainBackground = document.getElementsByClassName("main-background");
        for(i = 0; i < mainBackground.length; i++) {
            mainBackground[i].style.backgroundColor = '#26272b';
        }
        let changeableText = document.getElementsByClassName("changeable-text");
        for(i = 0; i < changeableText.length; i++) {
            changeableText[i].style.color = 'white';
        }
    }
  });