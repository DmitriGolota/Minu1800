let pdfsave = document.getElementById('savepdf')

// Define the function 
// to screenshot the div
takeshot = function () {
    let div = document.getElementById('photo');
    html2canvas(div).then(
        function (canvas) {
            var imgData = canvas.toDataURL("image/png", 0);
            var doc = new jsPDF("p", "mm", "a4");

            var width = doc.internal.pageSize.getWidth();
            var height = doc.internal.pageSize.getHeight();
            doc.addImage(imgData, 'JPEG', 0, 0, width, height);
            doc.save("menu.pdf");
        })
}


