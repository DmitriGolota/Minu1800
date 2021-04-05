let slider = document.getElementById("slider");

slider.addEventListener('change', function() {
    if (this.checked) {
        let mainBackground = document.getElementsByClassName("main-background");
        for(i = 0; i < mainBackground.length; i++) {
            mainBackground[i].style.backgroundColor = 'blue';
        }
    } else {
        let mainBackground = document.getElementsByClassName("main-background");
        for(i = 0; i < mainBackground.length; i++) {
            mainBackground[i].style.backgroundColor = 'red';
        }
    }
  });