let pdfsave = document.getElementById('savepdf')

// Define the function 
// to screenshot the div
takeshot = function() {
    let div = document.getElementById('photo');
    
    // Use the html2canvas
    // function to take a screenshot
    // and append it
    // to the output div
    html2canvas(div).then(
        function (canvas) {
            var myobj = document.getElementById('photo')
            myobj.remove();
            document.getElementById('db-div').appendChild(canvas);

            var imgData = canvas.toDataURL("image/jpeg", 1.0);
            var pdf = new jsPDF();

            pdf.addImage(imgData, 'JPEG', 0, 0);
            pdf.save("menu.pdf");
            console.log("successful functions execution")
        })
}


